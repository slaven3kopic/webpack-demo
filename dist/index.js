(()=>{"use strict";class e{static createHTMLElement(e,t,n){const l=document.createElement(e);return t&&l.classList.add(...t),n&&n.forEach((e=>{l.setAttribute(e.qualifiedName,e.value)})),l}}class t{static PRO_GRID_ELEMENT_CSS_CLASS="fancy-table-element";element;constructor(n,l){this.element=e.createHTMLElement("div",[t.PRO_GRID_ELEMENT_CSS_CLASS,...n],l)}getElement(){return this.element}}class n extends t{static FANCY_TABLE_CELL_CSS_CLASS="fancy-table-cell";constructor(e){super([n.FANCY_TABLE_CELL_CSS_CLASS],[{qualifiedName:"role",value:"gridcell"}]),this.updateCellContent(e)}updateCellContent(e){this.getElement().innerHTML=e.value}}class l extends t{static FANCY_TABLE_ROW_CSS_CLASS="fancy-table-row";constructor(e){super([l.FANCY_TABLE_ROW_CSS_CLASS],[{qualifiedName:"role",value:"row"}]),this.getElement().append(...e.map((e=>new n(e).getElement())))}}class a extends t{static FANCY_TABLE_BODY_CSS_CLASS="fancy-table-body";rows=[];constructor(e){super([a.FANCY_TABLE_BODY_CSS_CLASS],[{qualifiedName:"role",value:"presentation"}]),this.getElement().replaceChildren(...e.map((e=>new l(e).getElement())))}}class c extends t{static FANCY_TABLE_HEADER_CSS_CLASS="fancy-table-header";constructor(e){super([c.FANCY_TABLE_HEADER_CSS_CLASS],[{qualifiedName:"role",value:"rowgroup"}]),this.getElement().append(new l(e).getElement())}}class s extends t{static FANCY_TABLE_CSS_CLASS="fancy-table";constructor(e){super([s.FANCY_TABLE_CSS_CLASS],[{qualifiedName:"role",value:"grid"}]),this.appendGridElements(e),this.attachGrid()}appendGridElements(e){this.createGridElements(e).forEach((e=>this.getElement().appendChild(e)))}createGridElements(e){return[new c(e.columnDefs).getElement(),new a(e.rows).getElement()]}attachGrid(){document.body.appendChild(this.getElement())}}new s({columnDefs:[{value:"name"},{value:"country"}],rows:[[{column:"name",value:"John Doe"},{column:"country",value:"USA"}],[{column:"name",value:"John Doe"},{column:"country",value:"USA"}],[{column:"name",value:"John Doe"},{column:"country",value:"USA"}],[{column:"name",value:"John Doe"},{column:"country",value:"USA"}],[{column:"name",value:"John Doe"},{column:"country",value:"USA"}]]})})();