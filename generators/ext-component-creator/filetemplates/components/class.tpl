(function () {
class Ext{capclassname} extends ExtBase {
{sGETSET}
	static XTYPE() {return '{classname}'}
  static PROPERTIESOBJECT() { return {
{sPROPERTIESOBJECT}
  }}
  static EVENTS() { return [
{sEVENTS}
  ]}
  static METHODS() { return [
{sMETHODS}
  ]}

  constructor() {
    super()
    this.METHODS = Ext{capclassname}.METHODS()
    this.XTYPE = Ext{capclassname}.XTYPE()
    //this.PROPERTIES = Ext{capclassname}.PROPERTIES()
    this.PROPERTIESOBJECT = Ext{capclassname}.PROPERTIESOBJECT()
    this.EVENTS = Ext{capclassname}.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-{classname}', Ext{capclassname});
})();