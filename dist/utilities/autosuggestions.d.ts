type ValueProps = {
    [key: string]: string;
};
type UseSuggestionsType = (getData: (key?: string, next?: number) => Promise<ValueProps[]>, initialData?: ValueProps[], dropOpen?: boolean, asyncFetch?: boolean, paginationEnabled?: boolean, initialLoad?: boolean, inputValue?: string, isMultiple?: boolean, setNextPage?: (value: number) => void, selectedItems?: any[]) => {
    suggestions: ValueProps[];
    isLoading: boolean;
    handlePickSuggestions: (value?: string, next?: number, append?: boolean) => Promise<void>;
};
export declare const useSuggestions: UseSuggestionsType;
export {};
