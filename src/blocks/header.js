import {FancyTableElement, FancyTableRow} from "../atoms";

export class FancyTableHeader extends FancyTableElement {
    static FANCY_TABLE_HEADER_CSS_CLASS = 'fancy-table-header';

    constructor(columnDefs) {
        super([FancyTableHeader.FANCY_TABLE_HEADER_CSS_CLASS],[{
            qualifiedName: 'role',
            value: 'rowgroup',
        }]);
        this.getElement().append(new FancyTableRow(columnDefs).getElement())
    }
}
