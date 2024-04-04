import {FancyTableElement} from "./element.js";

export class FancyTableCell extends FancyTableElement {
    static FANCY_TABLE_CELL_CSS_CLASS = 'fancy-table-cell';
    constructor(cellData) {
        super([FancyTableCell.FANCY_TABLE_CELL_CSS_CLASS], [{
            qualifiedName: 'role',
            value: 'gridcell',
        }]);
        this.updateCellContent(cellData)
    }

    updateCellContent(cellData) {
        this.getElement().innerHTML = cellData.value;
    }
}
