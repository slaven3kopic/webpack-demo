import {FancyTableElement} from "./atoms";
import {FancyTableBody, FancyTableHeader} from "./blocks";

import './index.css';

class FancyTable extends FancyTableElement {
    static FANCY_TABLE_CSS_CLASS = 'fancy-table';
    constructor(data) {
        super([FancyTable.FANCY_TABLE_CSS_CLASS],  [{
            qualifiedName: 'role',
            value: 'grid',
        }]);
        this.appendGridElements(data);
        this.attachGrid();
    }

    appendGridElements(data) {
        this.createGridElements(data).forEach((gridElement) =>
            this.getElement().appendChild(gridElement)
        );
    }

    createGridElements(data) {
        return [
            new FancyTableHeader(data.columnDefs).getElement(),
            new FancyTableBody(data.rows).getElement(),
        ];
    }

    attachGrid() {
        document.body.appendChild(this.getElement());
    };
}

new FancyTable({
    columnDefs: [{value: 'name'}, {value: 'country'}],
    rows: [
        [{ column: 'name', value: 'John Doe'}, { column: 'country', value: 'USA'}],
        [{ column: 'name', value: 'John Doe'}, { column: 'country', value: 'USA'}],
        [{ column: 'name', value: 'John Doe'}, { column: 'country', value: 'USA'}],
        [{ column: 'name', value: 'John Doe'}, { column: 'country', value: 'USA'}],
        [{ column: 'name', value: 'John Doe'}, { column: 'country', value: 'USA'}],
    ]
})
