interface Item {
    [key: string]: string;
}
export declare const filterSuggestions: (data: Item[], query: string, type: string, desc: string, inputValue?: string, async?: boolean) => Item[];
export {};
