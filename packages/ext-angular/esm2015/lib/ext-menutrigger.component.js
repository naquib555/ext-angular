/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class menutriggerMetaData {
}
menutriggerMetaData.XTYPE = 'menutrigger';
menutriggerMetaData.PROPERTIES = [
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'destroyMenu',
    'disabled',
    'eventHandlers',
    'field',
    'flex',
    'floated',
    'focusCls',
    'focusOnTap',
    'group',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'iconCls',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'menu',
    'menuAlign',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'relative',
    'renderTo',
    'repeat',
    'ripple',
    'scope',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'side',
    'style',
    'toFrontOnShow',
    'touchAction',
    'translatable',
    'triggers',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'x',
    'y',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
menutriggerMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'menutrigger' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'menutrigger,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'menutrigger,event' },
    { name: 'focusenter', parameters: 'menutrigger,event' },
    { name: 'focusleave', parameters: 'menutrigger,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'menutrigger' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
menutriggerMetaData.EVENTNAMES = [
    'beforedisabledchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforetofront',
    'beforewidthchange',
    'blur',
    'disabledchange',
    'focus',
    'focusenter',
    'focusleave',
    'heightchange',
    'hiddenchange',
    'tofront',
    'widthchange',
    'ready'
];
if (false) {
    /** @type {?} */
    menutriggerMetaData.XTYPE;
    /** @type {?} */
    menutriggerMetaData.PROPERTIES;
    /** @type {?} */
    menutriggerMetaData.EVENTS;
    /** @type {?} */
    menutriggerMetaData.EVENTNAMES;
}
export class ExtMenutriggerComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, menutriggerMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.baseOnInit(menutriggerMetaData);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
}
ExtMenutriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'menutrigger',
                inputs: menutriggerMetaData.PROPERTIES,
                outputs: menutriggerMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ExtMenutriggerComponent)) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtMenutriggerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtMenutriggerComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW1lbnV0cmlnZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LW1lbnV0cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLG1CQUFtQjs7QUFDaEIseUJBQUssR0FBVyxhQUFhLENBQUM7QUFDOUIsOEJBQVUsR0FBYTtJQUNuQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixRQUFRO0lBQ1IsS0FBSztJQUNMLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0lBQ1QsSUFBSTtJQUNKLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLE1BQU07SUFDTixXQUFXO0lBQ1gsTUFBTTtJQUNOLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7SUFDZixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFl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QUFVO1lBR0gsSUFBSSx1QkFvSFMsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROzs7O0lBQTdCLGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgbWVudXRyaWdnZXJNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdtZW51dHJpZ2dlcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2Rlc3Ryb3lNZW51JyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZmllbGQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRhcCcsXG4gICAgJ2dyb3VwJyxcbiAgICAnaGFuZGxlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaWNvbkNscycsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWVudScsXG4gICAgJ21lbnVBbGlnbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVwZWF0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2NvcGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaWRlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0cmlnZ2VycycsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonbWVudXRyaWdnZXInfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonbWVudXRyaWdnZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonbWVudXRyaWdnZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonbWVudXRyaWdnZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonbWVudXRyaWdnZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonbWVudXRyaWdnZXInfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZGVuY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J3RvZnJvbnQnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnV0cmlnZ2VyJywgXG4gIGlucHV0czogbWVudXRyaWdnZXJNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBtZW51dHJpZ2dlck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRNZW51dHJpZ2dlckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dE1lbnV0cmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxtZW51dHJpZ2dlck1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5iYXNlT25Jbml0KG1lbnV0cmlnZ2VyTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=