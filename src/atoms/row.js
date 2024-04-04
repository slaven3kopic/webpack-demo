import {FancyTableElement} from "./element.js";
import {FancyTableCell} from "./cell.js";

export class FancyTableRow extends FancyTableElement {
    static FANCY_TABLE_ROW_CSS_CLASS = 'fancy-table-row';
    constructor(rowData) {
        super([FancyTableRow.FANCY_TABLE_ROW_CSS_CLASS], [{
            qualifiedName: 'role',
            value: 'row',
        }]);
        this.getElement().append(...rowData.map(cell => new FancyTableCell(cell).getElement()))
    }
}
