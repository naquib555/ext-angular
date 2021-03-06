'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require('@babel/polyfill');

const v = require('./pluginUtil').logv;

class ExtWebpackPlugin {
  constructor(options) {
    this.plugin = require(`./pluginUtil`)._constructor(options);
  }

  apply(compiler) {
    const vars = this.plugin.vars;
    const options = this.plugin.options;
    v(options, 'FUNCTION apply');

    if (!compiler.hooks) {
      console.log('not webpack 4');
      return;
    }

    compiler.hooks.thisCompilation.tap(`ext-this-compilation`, compilation => {
      v(options, 'HOOK thisCompilation');

      if (vars.pluginErrors.length > 0) {
        compilation.errors.push(new Error(vars.pluginErrors.join("")));
      }
    });

    if (vars.pluginErrors.length > 0) {
      return;
    }

    if (vars.framework == 'extjs') {
      compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
        v(options, 'HOOK compilation (empty)');
      });
      compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
        v(options, 'HOOK afterCompile');

        require(`./extjsUtil`)._afterCompile(compilation, vars, options);
      });
    } else {
      compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
        v(options, 'HOOK compilation');

        require(`./pluginUtil`)._compilation(compiler, compilation, vars, options);
      });
      compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
        v(options, 'HOOK afterCompile');

        require(`./pluginUtil`)._afterCompile(compiler, compilation, vars, options);
      });
    }

    if (options.treeshake == true && options.environment == 'production' || options.treeshake == false && options.environment != 'production') {
      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        v(options, 'HOOK emit');

        require(`./pluginUtil`).emit(compiler, compilation, vars, options, callback);
      });
    }

    compiler.hooks.done.tap(`ext-done`, () => {
      v(options, 'HOOK done');

      require(`./pluginUtil`)._done(vars, options);

      require('./pluginUtil').log(vars.app + `Completed ext-webpack-plugin processing`);
    });
  }

}

exports.default = ExtWebpackPlugin;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidiIsImxvZ3YiLCJFeHRXZWJwYWNrUGx1Z2luIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicGx1Z2luIiwiX2NvbnN0cnVjdG9yIiwiYXBwbHkiLCJjb21waWxlciIsInZhcnMiLCJob29rcyIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsInBsdWdpbkVycm9ycyIsImxlbmd0aCIsImVycm9ycyIsInB1c2giLCJFcnJvciIsImpvaW4iLCJmcmFtZXdvcmsiLCJhZnRlckNvbXBpbGUiLCJfYWZ0ZXJDb21waWxlIiwiX2NvbXBpbGF0aW9uIiwidHJlZXNoYWtlIiwiZW52aXJvbm1lbnQiLCJlbWl0IiwidGFwQXN5bmMiLCJjYWxsYmFjayIsImRvbmUiLCJfZG9uZSIsImFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFDQUEsT0FBTyxDQUFDLGlCQUFELENBQVA7O0FBQ0EsTUFBTUMsQ0FBQyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUFQLENBQXdCRSxJQUFsQzs7QUFDZSxNQUFNQyxnQkFBTixDQUF1QjtBQUNwQ0MsRUFBQUEsV0FBVyxDQUFDQyxPQUFELEVBQVU7QUFDbkIsU0FBS0MsTUFBTCxHQUFjTixPQUFPLENBQUUsY0FBRixDQUFQLENBQXdCTyxZQUF4QixDQUFxQ0YsT0FBckMsQ0FBZDtBQUNEOztBQUVERyxFQUFBQSxLQUFLLENBQUNDLFFBQUQsRUFBVztBQUNkLFVBQU1DLElBQUksR0FBRyxLQUFLSixNQUFMLENBQVlJLElBQXpCO0FBQ0EsVUFBTUwsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUQsT0FBNUI7QUFDQUosSUFBQUEsQ0FBQyxDQUFDSSxPQUFELEVBQVMsZ0JBQVQsQ0FBRDs7QUFDQSxRQUFJLENBQUNJLFFBQVEsQ0FBQ0UsS0FBZCxFQUFxQjtBQUFDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxl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eUIsVUFBekIsRUFBb0MsTUFBTTtBQUN4Q2QsTUFBQUEsQ0FBQyxDQUFDSSxPQUFELEVBQVMsV0FBVCxDQUFEOztBQUNBTCxNQUFBQSxPQUFPLENBQUUsY0FBRixDQUFQLENBQXdCaUMsS0FBeEIsQ0FBOEJ2QixJQUE5QixFQUFvQ0wsT0FBcEM7O0FBQ0FMLE1BQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JhLEdBQXhCLENBQTRCSCxJQUFJLENBQUN3QixHQUFMLEdBQVkseUNBQXhDO0FBQ0QsS0FKRDtBQUtEOztBQXZEbUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbnJlcXVpcmUoJ0BiYWJlbC9wb2x5ZmlsbCcpXG5jb25zdCB2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0V2VicGFja1BsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBsdWdpbiA9IHJlcXVpcmUoYC4vcGx1Z2luVXRpbGApLl9jb25zdHJ1Y3RvcihvcHRpb25zKVxuICB9XG5cbiAgYXBwbHkoY29tcGlsZXIpIHtcbiAgICBjb25zdCB2YXJzID0gdGhpcy5wbHVnaW4udmFyc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnBsdWdpbi5vcHRpb25zXG4gICAgdihvcHRpb25zLCdGVU5DVElPTiBhcHBseScpXG4gICAgaWYgKCFjb21waWxlci5ob29rcykge2NvbnNvbGUubG9nKCdub3Qgd2VicGFjayA0Jyk7cmV0dXJufVxuXG4gICAgY29tcGlsZXIuaG9va3MudGhpc0NvbXBpbGF0aW9uLnRhcChgZXh0LXRoaXMtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgIHYob3B0aW9ucywnSE9PSyB0aGlzQ29tcGlsYXRpb24nKVxuICAgICAgaWYgKHZhcnMucGx1Z2luRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcih2YXJzLnBsdWdpbkVycm9ycy5qb2luKFwiXCIpKSApXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAodmFycy5wbHVnaW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCB2YXJzLmZyYW1ld29yayA9PSAnZXh0anMnKSB7XG4gICAgICBjb21waWxlci5ob29rcy5jb21waWxhdGlvbi50YXAoYGV4dC1jb21waWxhdGlvbmAsIChjb21waWxhdGlvbikgPT4ge1xuICAgICAgICB2KG9wdGlvbnMsJ0hPT0sgY29tcGlsYXRpb24gKGVtcHR5KScpXG4gICAgICB9KVxuICAgICAgY29tcGlsZXIuaG9va3MuYWZ0ZXJDb21waWxlLnRhcCgnZXh0LWFmdGVyLWNvbXBpbGUnLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgdihvcHRpb25zLCdIT09LIGFmdGVyQ29tcGlsZScpXG4gICAgICAgIHJlcXVpcmUoYC4vZXh0anNVdGlsYCkuX2FmdGVyQ29tcGlsZShjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucylcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZXIuaG9va3MuY29tcGlsYXRpb24udGFwKGBleHQtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcbiAgICAgICAgdihvcHRpb25zLCdIT09LIGNvbXBpbGF0aW9uJylcbiAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2NvbXBpbGF0aW9uKGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdmFycywgb3B0aW9ucylcbiAgICAgIH0pXG4gICAgICBjb21waWxlci5ob29rcy5hZnRlckNvbXBpbGUudGFwKCdleHQtYWZ0ZXItY29tcGlsZScsIChjb21waWxhdGlvbikgPT4ge1xuICAgICAgICB2KG9wdGlvbnMsJ0hPT0sgYWZ0ZXJDb21waWxlJylcbiAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2FmdGVyQ29tcGlsZShjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmKChvcHRpb25zLnRyZWVzaGFrZSA9PSB0cnVlICYmIG9wdGlvbnMuZW52aXJvbm1lbnQgPT0gJ3Byb2R1Y3Rpb24nKSB8fFxuICAgICAgIChvcHRpb25zLnRyZWVzaGFrZSA9PSBmYWxzZSAmJiBvcHRpb25zLmVudmlyb25tZW50ICE9ICdwcm9kdWN0aW9uJykpXG4gICAge1xuICAgICAgY29tcGlsZXIuaG9va3MuZW1pdC50YXBBc3luYyhgZXh0LWVtaXRgLCAoY29tcGlsYXRpb24sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHYob3B0aW9ucywnSE9PSyBlbWl0JylcbiAgICAgICAgcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuZW1pdChjb21waWxlciwgY29tcGlsYXRpb24sIHZhcnMsIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21waWxlci5ob29rcy5kb25lLnRhcChgZXh0LWRvbmVgLCAoKSA9PiB7XG4gICAgICB2KG9wdGlvbnMsJ0hPT0sgZG9uZScpXG4gICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5fZG9uZSh2YXJzLCBvcHRpb25zKVxuICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHZhcnMuYXBwICsgYENvbXBsZXRlZCBleHQtd2VicGFjay1wbHVnaW4gcHJvY2Vzc2luZ2ApXG4gICAgfSlcbiAgfVxufVxuIl19