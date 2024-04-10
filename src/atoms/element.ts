import { HTMLElementUtils } from "../shared";

export class FancyTableElement {
    static PRO_GRID_ELEMENT_CSS_CLASS = 'fancy-table-element';
    element;

    constructor(cssClasses, htmlAttributes) {
        this.element = HTMLElementUtils.createHTMLElement(
            'div',
            [FancyTableElement.PRO_GRID_ELEMENT_CSS_CLASS, ...cssClasses],
            htmlAttributes
        );
    }

    /**
     * Gets the grid element
     */
    getElement() {
        return this.element;
    }
}
