import {FancyTableElement, FancyTableRow} from "../atoms";

export class FancyTableBody extends FancyTableElement {
    static FANCY_TABLE_BODY_CSS_CLASS = 'fancy-table-body';
    rows = [];

    constructor(rows) {
        super([FancyTableBody.FANCY_TABLE_BODY_CSS_CLASS],[{
            qualifiedName: 'role',
            value: 'presentation',
        }]);
        this.getElement().replaceChildren(...rows.map((row) => new FancyTableRow(row).getElement()));
    }
}
