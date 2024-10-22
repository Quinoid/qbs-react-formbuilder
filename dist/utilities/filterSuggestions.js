"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSuggestions = void 0;
const filterSuggestions = (data, query, type, desc, inputValue, async) => {
    if ((type === 'custom_search_select' ||
        type === 'auto_complete' ||
        type === 'auto_suggestion') &&
        !async &&
        query) {
        return data === null || data === void 0 ? void 0 : data.filter((item) => item[desc].toLowerCase().includes(query.toLowerCase()));
    }
    return sortedArrayData(data, inputValue, desc);
};
exports.filterSuggestions = filterSuggestions;
const sortedArrayData = (filteredData, selectedItems, desc) => {
    return [...filteredData].sort((a, b) => {
        let aIsSelected;
        let bIsSelected;
        if (Array.isArray(selectedItems)) {
            aIsSelected = selectedItems.some((item) => item[desc] === a[desc]);
            bIsSelected = selectedItems.some((item) => item[desc] === b[desc]);
        }
        else {
            aIsSelected = a[desc] === selectedItems;
            bIsSelected = b[desc] === selectedItems;
        }
        return (bIsSelected ? 1 : 0) - (aIsSelected ? 1 : 0);
    });
};
//# sourceMappingURL=filterSuggestions.js.map