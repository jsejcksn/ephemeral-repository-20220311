import {assert} from './utils.js';

export type StyleDeclaration = [
  propertyName: string,
  value: string,
  priority?: 'important' | '',
];

export type StyleRule = [selector: string, declarations: readonly StyleDeclaration[]];

export function addStyles (rules: readonly StyleRule[]): CSSStyleSheet {
  const style = document.head.appendChild(document.createElement('style'));
  assert(style.sheet, 'Style sheet not found in style element');

  for (const [selector, declarations] of rules) {
    const index = style.sheet.insertRule(`${selector} {}`, style.sheet.cssRules.length);
    for (const declaration of declarations) {
      (style.sheet.cssRules[index] as CSSStyleRule).style.setProperty(...declaration);
    }
  }

  return style.sheet;
}
