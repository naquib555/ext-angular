/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class menuitemMetaData {
}
menuitemMetaData.XTYPE = 'menuitem';
menuitemMetaData.PROPERTIESOBJECT = {
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "centered": "Boolean",
    "clickHideDelay": "Number",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultListenerScope": "Boolean",
    "destroyMenu": "Boolean",
    "disabled": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "handler": "Function/String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnClick": "Boolean",
    "hideOnMaskTap": "Boolean",
    "href": "String",
    "html": "String/Ext.dom.Element/HTMLElement",
    "icon": "String",
    "iconAlign": "'left'/'right'",
    "iconCls": "String",
    "id": "String",
    "indented": "Boolean",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "left": "Number/String",
    "listeners": "Object",
    "margin": "Number/String",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "menu": "Ext.menu.Menu/Object",
    "menuAlign": "String",
    "menuExpandDelay": "Number",
    "menuHideDelay": "Number",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scope": "Object",
    "scrollable": "Boolean/String/Object",
    "selfAlign": "String",
    "separator": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "style": "String/Object",
    "tabIndex": "Number",
    "target": "String",
    "text": "String",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
menuitemMetaData.PROPERTIES = [
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'centered',
    'clickHideDelay',
    'cls',
    'constrainAlign',
    'contentEl',
    'controller',
    'data',
    'defaultListenerScope',
    'destroyMenu',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusCls',
    'fullscreen',
    'handler',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnClick',
    'hideOnMaskTap',
    'href',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'indented',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'left',
    'listeners',
    'margin',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuAlign',
    'menuExpandDelay',
    'menuHideDelay',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'padding',
    'plugins',
    'publishes',
    'record',
    'reference',
    'relative',
    'renderTo',
    'right',
    'ripple',
    'scope',
    'scrollable',
    'selfAlign',
    'separator',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'style',
    'tabIndex',
    'target',
    'text',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
menuitemMetaData.EVENTS = [
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforetofront', parameters: 'menuitem' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'menuitem,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'menuitem,event' },
    { name: 'focusenter', parameters: 'menuitem,event' },
    { name: 'focusleave', parameters: 'menuitem,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'menuitem' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
menuitemMetaData.EVENTNAMES = [
    'added',
    'beforebottomchange',
    'beforecenteredchange',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforerightchange',
    'beforescrollablechange',
    'beforeshow',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'centeredchange',
    'destroy',
    'disabledchange',
    'dockedchange',
    'erased',
    'floatingchange',
    'focus',
    'focusenter',
    'focusleave',
    'fullscreen',
    'heightchange',
    'hiddenchange',
    'hide',
    'initialize',
    'leftchange',
    'maxHeightchange',
    'maxWidthchange',
    'minHeightchange',
    'minWidthchange',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'removed',
    'resize',
    'rightchange',
    'scrollablechange',
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'widthchange',
    'ready'
];
if (false) {
    /** @type {?} */
    menuitemMetaData.XTYPE;
    /** @type {?} */
    menuitemMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    menuitemMetaData.PROPERTIES;
    /** @type {?} */
    menuitemMetaData.EVENTS;
    /** @type {?} */
    menuitemMetaData.EVENTNAMES;
}
export class ExtMenuitemComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, menuitemMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(menuitemMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtMenuitemComponent.decorators = [
    { type: Component, args: [{
                selector: 'menuitem',
                inputs: menuitemMetaData.PROPERTIES,
                outputs: menuitemMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtMenuitemComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtMenuitemComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW1lbnVpdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1tZW51aXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2Isc0JBQUssR0FBVyxVQUFVLENBQUM7QUFDM0IsaUNBQWdCLEdBQVE7SUFDcEMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGlCQUFpQixFQUFFLFFBQVE7SUFDM0IsV0FBVyxFQUFFLFFBQVE7SUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixVQUFVLEVBQUUsU0FBUztJQUNyQixNQUFNLEVBQUUsZUFBZTtJQUN2QixRQUFRLEVBQUUsU0FBUztJQUNuQixRQUFRLEVBQUUsZUFBZTtJQUN6QixVQUFVLEVBQUUsU0FBUztJQUNyQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELFdBQVcsRUFBRSxvQ0FBb0M7SUFDakQsWUFBWSxFQUFFLHNDQUFzQztJQUNwRCxNQUFNLEVBQUUsUUFBUTtJQUNoQixzQkFBc0IsRUFBRSxTQUFTO0lBQ2pDLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7SUFDN0MsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxlQUFlLEVBQUUsUUFBUTtJQUN6QixlQUFlLEVBQUUsY0FBYztJQUMvQixNQUFNLEVB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dEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgbWVudWl0ZW1NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdtZW51aXRlbSc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXhpc0xvY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbGlja0hpZGVEZWxheVwiOiBcIk51bWJlclwiLFxuICAgIFwiY2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJjb25zdHJhaW5BbGlnblwiOiBcIlN0cmluZy9FeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJFeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnQvU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRlc3Ryb3lNZW51XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNwbGF5ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkb2NrZWRcIjogXCJTdHJpbmdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kcmFnLlNvdXJjZVwiLFxuICAgIFwiZW50ZXJBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4aXRBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXIvU3RyaW5nL09iamVjdFwiLFxuICAgIFwiZmxvYXRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmdWxsc2NyZWVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGFuZGxlclwiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZUFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJoaWRlT25DbGlja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVPbk1hc2tUYXBcIjogXCJCb29sZWFuXCIsXG4gICAgXCJocmVmXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJodG1sXCI6IFwiU3RyaW5nL0V4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudFwiLFxuICAgIFwiaWNvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaWNvbkFsaWduXCI6IFwiJ2xlZnQnLydyaWdodCdcIixcbiAgICBcImljb25DbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbmRlbnRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGVmdFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWF4SGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtZW51XCI6IFwiRXh0Lm1lbnUuTWVudS9PYmplY3RcIixcbiAgICBcIm1lbnVBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWVudUV4cGFuZERlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtZW51SGlkZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzY29wZVwiOiBcIk9iamVjdFwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2VsZkFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzZXBhcmF0b3JcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0YXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcInRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ4dHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwieVwiOiBcIk51bWJlclwiLFxuICAgIFwiekluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xpY2tIaWRlRGVsYXknLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZXN0cm95TWVudScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZW50ZXJBbmltYXRpb24nLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZXhpdEFuaW1hdGlvbicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnaGFuZGxlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbkNsaWNrJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2hyZWYnLFxuICAgICdodG1sJyxcbiAgICAnaWNvbicsXG4gICAgJ2ljb25BbGlnbicsXG4gICAgJ2ljb25DbHMnLFxuICAgICdpZCcsXG4gICAgJ2luZGVudGVkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWVudScsXG4gICAgJ21lbnVBbGlnbicsXG4gICAgJ21lbnVFeHBhbmREZWxheScsXG4gICAgJ21lbnVIaWRlRGVsYXknLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdzY29wZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXBhcmF0b3InLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RhcmdldCcsXG4gICAgJ3RleHQnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J21lbnVpdGVtJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonbWVudWl0ZW0sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonbWVudWl0ZW0sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonbWVudWl0ZW0sZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG5cdFx0e25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J21lbnVpdGVtJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdmbG9hdGluZ2NoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdmdWxsc2NyZWVuJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQnaGlkZScsXG5cdFx0J2luaXRpYWxpemUnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmVkJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnVpdGVtJywgXG4gIGlucHV0czogbWVudWl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBtZW51aXRlbU1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRNZW51aXRlbUNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI2R5bmFtaWM+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dE1lbnVpdGVtQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsbWVudWl0ZW1NZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQobWVudWl0ZW1NZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==