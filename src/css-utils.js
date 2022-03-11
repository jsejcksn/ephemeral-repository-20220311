import { assert } from './utils.js';
export function addStyles(rules) {
    const style = document.head.appendChild(document.createElement('style'));
    assert(style.sheet, 'Style sheet not found in style element');
    for (const [selector, declarations] of rules) {
        const index = style.sheet.insertRule(`${selector} {}`, style.sheet.cssRules.length);
        for (const declaration of declarations) {
            style.sheet.cssRules[index].style.setProperty(...declaration);
        }
    }
    return style.sheet;
}
