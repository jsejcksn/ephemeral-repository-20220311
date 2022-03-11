export declare type StyleDeclaration = [
    propertyName: string,
    value: string,
    priority?: 'important' | ''
];
export declare type StyleRule = [selector: string, declarations: readonly StyleDeclaration[]];
export declare function addStyles(rules: readonly StyleRule[]): CSSStyleSheet;
