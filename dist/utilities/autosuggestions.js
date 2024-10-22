"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSuggestions = void 0;
const react_1 = require("react");
const useSuggestions = (getData, initialData = [], dropOpen = false, asyncFetch = false, paginationEnabled = false, initialLoad = false, inputValue = '', isMultiple, setNextPage, selectedItems = []) => {
    const [suggestions, setSuggestions] = (0, react_1.useState)(initialData);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const handlePickSuggestions = (value, nextPage, appendData) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            const data = yield (asyncFetch || initialLoad
                ? getData(value, nextPage)
                : Promise.resolve(initialData));
            if (!data || (data === null || data === void 0 ? void 0 : data.length) === 0) {
                setNextPage(undefined);
            }
            const newSuggestions = appendData ? [...suggestions, ...data] : data;
            setSuggestions(newSuggestions);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setIsLoading(false);
        }
    });
    (0, react_1.useEffect)(() => {
        if (dropOpen) {
            if (!isMultiple && (!inputValue || suggestions.length === 0)) {
                setNextPage(1);
                handlePickSuggestions('', paginationEnabled ? 1 : undefined);
            }
            else if (isMultiple &&
                (suggestions.length === 0 ||
                    !selectedItems ||
                    (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) === 0)) {
                handlePickSuggestions('', paginationEnabled ? 1 : undefined);
            }
        }
    }, [dropOpen]);
    return { suggestions, isLoading, handlePickSuggestions };
};
exports.useSuggestions = useSuggestions;
//# sourceMappingURL=autosuggestions.js.map