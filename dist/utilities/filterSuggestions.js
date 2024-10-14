"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSuggestions = void 0;
var filterSuggestions = function (data, query, type, desc, inputValue, async) {
    if ((type === 'custom_search_select' ||
        type === 'auto_complete' ||
        type === 'auto_suggestion') &&
        !async &&
        query) {
        return data === null || data === void 0 ? void 0 : data.filter(function (item) {
            return item[desc].toLowerCase().includes(query.toLowerCase());
        });
    }
    return sortedArrayData(data, inputValue, desc);
};
exports.filterSuggestions = filterSuggestions;
var sortedArrayData = function (filteredData, selectedItems, desc) {
    return __spreadArray([], filteredData, true).sort(function (a, b) {
        var aIsSelected;
        var bIsSelected;
        if (Array.isArray(selectedItems)) {
            aIsSelected = selectedItems.some(function (item) { return item[desc] === a[desc]; });
            bIsSelected = selectedItems.some(function (item) { return item[desc] === b[desc]; });
        }
        else {
            aIsSelected = a[desc] === selectedItems;
            bIsSelected = b[desc] === selectedItems;
        }
        return (bIsSelected ? 1 : 0) - (aIsSelected ? 1 : 0);
    });
};
//# sourceMappingURL=filterSuggestions.js.map