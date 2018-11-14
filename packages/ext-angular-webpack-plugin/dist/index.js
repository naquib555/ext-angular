'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require('@babel/polyfill');

class ExtWebpackPlugin {
  constructor(options) {
    this.plugin = require(`./pluginUtil`)._constructor(options);
  }

  apply(compiler) {
    require('./pluginUtil').logv(this.plugin.options, 'FUNCTION apply');

    if (compiler.hooks) {
      compiler.hooks.thisCompilation.tap(`ext-this-compilation`, compilation => {
        compilation.hooks.additionalAssets.tapAsync(`ext-additionalAssets`, cb => {
          console.log('additionalAssets1');
          cb();
        });

        require('./pluginUtil').logv(this.plugin.options, 'HOOK thisCompilation');

        if (this.plugin.vars.pluginErrors.length > 0) {
          compilation.errors.push(new Error(this.plugin.vars.pluginErrors.join("")));
        } else {//this.plugin.vars.deps = []
        }
      });

      if (this.plugin.vars.pluginErrors.length > 0) {
        return;
      }

      if (this.plugin.vars.framework == 'extjs') {
        compiler.hooks.afterCompile.tap('ext-after-compile', compilation => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK afterCompile');

          require(`./extjsUtil`)._afterCompile(compilation, this.plugin.vars, this.plugin.options);
        });
      } else {
        compiler.hooks.compilation.tap(`ext-compilation`, compilation => {
          require('./pluginUtil').logv(this.plugin.options, 'HOOK compilation');

          require(`./pluginUtil`)._compilation(compiler, compilation, this.plugin.vars, this.plugin.options);
        });
      }

      compiler.hooks.emit.tapAsync(`ext-emit`, (compilation, callback) => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK emit');

        require(`./pluginUtil`).emit(compiler, compilation, this.plugin.vars, this.plugin.options, callback);
      });
      compiler.hooks.done.tap(`ext-done`, () => {
        require('./pluginUtil').logv(this.plugin.options, 'HOOK done');

        require('./pluginUtil').log(this.plugin.vars.app + `Completed ext-webpack-plugin processing`);
      });
    } else {
      console.log('not webpack 4');
    }
  }

}

exports.default = ExtWebpackPlugin;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRXh0V2VicGFja1BsdWdpbiIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBsdWdpbiIsIl9jb25zdHJ1Y3RvciIsImFwcGx5IiwiY29tcGlsZXIiLCJsb2d2IiwiaG9va3MiLCJ0aGlzQ29tcGlsYXRpb24iLCJ0YXAiLCJjb21waWxhdGlvbiIsImFkZGl0aW9uYWxBc3NldHMiLCJ0YXBBc3luYyIsImNiIiwiY29uc29sZSIsImxvZyIsInZhcnMiLCJwbHVnaW5FcnJvcnMiLCJsZW5ndGgiLCJlcnJvcnMiLCJwdXNoIiwiRXJyb3IiLCJqb2luIiwiZnJhbWV3b3JrIiwiYWZ0ZXJDb21waWxlIiwiX2FmdGVyQ29tcGlsZSIsIl9jb21waWxhdGlvbiIsImVtaXQiLCJjYWxsYmFjayIsImRvbmUiLCJhcHAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBQ0FBLE9BQU8sQ0FBQyxpQkFBRCxDQUFQOztBQUVlLE1BQU1DLGdCQUFOLENBQXVCO0FBQ3BDQyxFQUFBQSxXQUFXLENBQUNDLE9BQUQsRUFBVTtBQUNuQixTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBRSxjQUFGLENBQVAsQ0FBd0JLLFlBQXhCLENBQXFDRixPQUFyQyxDQUFkO0FBQ0Q7O0FBQ0RHLEVBQUFBLEtBQUssQ0FBQ0MsUUFBRCxFQUFXO0FBQ2RQLElBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsZ0JBQWpEOztBQUNBLFFBQUlJLFFBQVEsQ0FBQ0UsS0FBYixFQUFvQjtBQUVsQkYsTUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVDLGVBQWYsQ0FBK0JDLEdBQS9CLENBQW9DLHNCQUFwQyxFQUE0REMsV0FBRCxJQUFpQjtBQUUxRUEsUUFBQUEsV0FBVyxDQUFDSCxLQUFaLENBQWtCSSxnQkFBbEIsQ0FBbUNDLFFBQW5DLENBQTZDLHNCQUE3QyxFQUFxRUMsRUFBRCxJQUFRO0FBQzFFQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBRixVQUFBQSxFQUFFO0FBQ0gsU0FIRDs7QUFNQWYsUUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxzQkFBakQ7O0FBQ0EsWUFBSSxLQUFLQyxNQUFMLENBQVljLElBQVosQ0FBaUJDLFlBQWpCLENBQThCQyxNQUE5QixHQUF1QyxDQUEzQyxFQUE4QztBQUM1Q1IsVUFBQUEsV0FBVyxDQUFDUyxNQUFaLENBQW1CQyxJQUFuQixDQUF5QixJQUFJQyxLQUFKLENBQVUsS0FBS25CLE1BQUwsQ0FBWWMsSUFBWixDQUFpQkMsWUFBakIsQ0FBOEJLLElBQTlCLENBQW1DLEVBQW5DLENBQVYsQ0FBekI7QUFDRCxTQUZELE1BR0ssQ0FDSDtBQUNEO0FBQ0YsT0FmRDs7QUFpQkEsVUFBSSxLQUFLcEIsTUFBTCxDQUFZYyxJQUFaLENBQWlCQyxZQUFqQixDQUE4QkMsTUFBOUIsR0FBdUMsQ0FBM0MsRUFBOEM7QUFDNUM7QUFDRDs7QUFFRCxVQUFLLEtBQUtoQixNQUFMLENBQVljLElBQVosQ0FBaUJPLFNBQWpCLElBQThCLE9BQW5DLEVBQTRDO0FBQzFDbEIsUUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVpQixZQUFmLENBQTRCZixHQUE1QixDQUFnQyxtQkFBaEMsRUFBc0RDLFdBQUQsSUFBaUI7QUFDcEVaLFVBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsbUJBQWpEOztBQUNBSCxVQUFBQSxPQUFPLENBQUUsYUFBRixDQUFQLENBQXVCMkIsYUFBdkIsQ0FBcUNmLFdBQXJDLEVBQWtELEtBQUtSLE1BQUwsQ0FBWWMsSUFBOUQsRUFBb0UsS0FBS2QsTUFBTCxDQUFZRCxPQUFoRjtBQUNELFNBSEQ7QUFJRCxPQUxELE1BTUs7QUFDSEksUUFBQUEsUUFBUSxDQUFDRSxLQUFULENBQWVHLFdBQWYsQ0FBMkJELEdBQTNCLENBQWdDLGlCQUFoQyxFQUFtREMsV0FBRCxJQUFpQjtBQUNqRVosVUFBQUEsT0FBTyxDQUFDLGNBQUQsQ0FBUCxDQUF3QlEsSUFBeEIsQ0FBNkIsS0FBS0osTUFBTCxDQUFZRCxPQUF6QyxFQUFpRCxrQkFBakQ7O0FBQ0FILFVBQUFBLE9BQU8sQ0FBRSxjQUFGLENBQVAsQ0FBd0I0QixZQUF4QixDQUFxQ3JCLFFBQXJDLEVBQStDSyxXQUEvQyxFQUE0RCxLQUFLUixNQUFMLENBQVljLElBQXhFLEVBQThFLEtBQUtkLE1BQUwsQ0FBWUQsT0FBMUY7QUFDRCxTQUhEO0FBSUQ7O0FBRURJLE1BQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlb0IsSUFBZixDQUFvQmYsUUFBcEIsQ0FBOEIsVUFBOUIsRUFBeUMsQ0FBQ0YsV0FBRCxFQUFja0IsUUFBZCxLQUEyQjtBQUNsRTlCLFFBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsV0FBakQ7O0FBQ0FILFFBQUFBLE9BQU8sQ0FBRSxjQUFGLENBQVAsQ0FBd0I2QixJQUF4QixDQUE2QnRCLFFBQTdCLEVBQXVDSyxXQUF2QyxFQUFvRCxLQUFLUixNQUFMLENBQVljLElBQWhFLEVBQXNFLEtBQUtkLE1BQUwsQ0FBWUQsT0FBbEYsRUFBMkYyQixRQUEzRjtBQUNELE9BSEQ7QUFLQXZCLE1BQUFBLFFBQVEsQ0FBQ0UsS0FBVCxDQUFlc0IsSUFBZixDQUFvQnBCLEdBQXBCLENBQXlCLFVBQXpCLEVBQW9DLE1BQU07QUFDeENYLFFBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JRLElBQXhCLENBQTZCLEtBQUtKLE1BQUwsQ0FBWUQsT0FBekMsRUFBaUQsV0FBakQ7O0FBQ0FILFFBQUFBLE9BQU8sQ0FBQyxjQUFELENBQVAsQ0FBd0JpQixHQUF4QixDQUE0QixLQUFLYixNQUFMLENBQVljLElBQVosQ0FBaUJjLEdBQWpCLEdBQXdCLHlDQUFwRDtBQUNELE9BSEQ7QUFLRCxLQTlDRCxNQStDSztBQUFDaEIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUE2QjtBQUNwQzs7QUF0RG1DIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5yZXF1aXJlKCdAYmFiZWwvcG9seWZpbGwnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRXZWJwYWNrUGx1Z2luIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucGx1Z2luID0gcmVxdWlyZShgLi9wbHVnaW5VdGlsYCkuX2NvbnN0cnVjdG9yKG9wdGlvbnMpXG4gIH1cbiAgYXBwbHkoY29tcGlsZXIpIHtcbiAgICByZXF1aXJlKCcuL3BsdWdpblV0aWwnKS5sb2d2KHRoaXMucGx1Z2luLm9wdGlvbnMsJ0ZVTkNUSU9OIGFwcGx5JylcbiAgICBpZiAoY29tcGlsZXIuaG9va3MpIHtcblxuICAgICAgY29tcGlsZXIuaG9va3MudGhpc0NvbXBpbGF0aW9uLnRhcChgZXh0LXRoaXMtY29tcGlsYXRpb25gLCAoY29tcGlsYXRpb24pID0+IHtcblxuICAgICAgICBjb21waWxhdGlvbi5ob29rcy5hZGRpdGlvbmFsQXNzZXRzLnRhcEFzeW5jKGBleHQtYWRkaXRpb25hbEFzc2V0c2AsIChjYikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRpdGlvbmFsQXNzZXRzMScpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIHRoaXNDb21waWxhdGlvbicpXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29tcGlsYXRpb24uZXJyb3JzLnB1c2goIG5ldyBFcnJvcih0aGlzLnBsdWdpbi52YXJzLnBsdWdpbkVycm9ycy5qb2luKFwiXCIpKSApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy90aGlzLnBsdWdpbi52YXJzLmRlcHMgPSBbXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5wbHVnaW4udmFycy5wbHVnaW5FcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCB0aGlzLnBsdWdpbi52YXJzLmZyYW1ld29yayA9PSAnZXh0anMnKSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmFmdGVyQ29tcGlsZS50YXAoJ2V4dC1hZnRlci1jb21waWxlJywgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGFmdGVyQ29tcGlsZScpXG4gICAgICAgICAgcmVxdWlyZShgLi9leHRqc1V0aWxgKS5fYWZ0ZXJDb21waWxlKGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBpbGVyLmhvb2tzLmNvbXBpbGF0aW9uLnRhcChgZXh0LWNvbXBpbGF0aW9uYCwgKGNvbXBpbGF0aW9uKSA9PiB7XG4gICAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGNvbXBpbGF0aW9uJylcbiAgICAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5fY29tcGlsYXRpb24oY29tcGlsZXIsIGNvbXBpbGF0aW9uLCB0aGlzLnBsdWdpbi52YXJzLCB0aGlzLnBsdWdpbi5vcHRpb25zKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjb21waWxlci5ob29rcy5lbWl0LnRhcEFzeW5jKGBleHQtZW1pdGAsIChjb21waWxhdGlvbiwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndih0aGlzLnBsdWdpbi5vcHRpb25zLCdIT09LIGVtaXQnKVxuICAgICAgICByZXF1aXJlKGAuL3BsdWdpblV0aWxgKS5lbWl0KGNvbXBpbGVyLCBjb21waWxhdGlvbiwgdGhpcy5wbHVnaW4udmFycywgdGhpcy5wbHVnaW4ub3B0aW9ucywgY2FsbGJhY2spXG4gICAgICB9KVxuXG4gICAgICBjb21waWxlci5ob29rcy5kb25lLnRhcChgZXh0LWRvbmVgLCAoKSA9PiB7XG4gICAgICAgIHJlcXVpcmUoJy4vcGx1Z2luVXRpbCcpLmxvZ3YodGhpcy5wbHVnaW4ub3B0aW9ucywnSE9PSyBkb25lJylcbiAgICAgICAgcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9nKHRoaXMucGx1Z2luLnZhcnMuYXBwICsgYENvbXBsZXRlZCBleHQtd2VicGFjay1wbHVnaW4gcHJvY2Vzc2luZ2ApXG4gICAgICB9KVxuXG4gICAgfVxuICAgIGVsc2Uge2NvbnNvbGUubG9nKCdub3Qgd2VicGFjayA0Jyl9XG4gIH1cbn1cbiJdfQ==