export class HTMLElementUtils {
    static createHTMLElement(tag, cssClasses, attributes) {
        const element = document.createElement(tag);
        if (cssClasses) {
            element.classList.add(...cssClasses);
        }
        if (attributes) {
            attributes.forEach((attr) => {
                element.setAttribute(attr.qualifiedName, attr.value);
            });
        }
        return element;
    }
}
