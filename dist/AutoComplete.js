"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const autosuggestions_1 = require("./utilities/autosuggestions");
const debounce_1 = require("./utilities/debounce");
const deepEqual_1 = require("./utilities/deepEqual");
const filterSuggestions_1 = require("./utilities/filterSuggestions");
const icons_1 = require("./utilities/icons");
const tootltip_1 = __importDefault(require("./utilities/tootltip"));
const AutoComplete = (0, react_1.forwardRef)(({ label, onChange, getData = () => __awaiter(void 0, void 0, void 0, function* () { return []; }), data = [], errors, required = false, name, fullWidth = false, placeholder, id, type = 'custom_select', selectedItems: propsSeelctedItems = [], readOnly = false, disabled = false, value, isMultiple = false, desc = 'name', descId = 'id', singleSelect, className, async = false, paginationEnabled, initialLoad, actionLabel, handleAction, nextBlock, notDataMessage, onFocus, selectAllLabel, selectAll, }, ref) => {
    var _a, _b, _c, _d, _e, _f;
    const dropdownRef = (0, react_1.useRef)(null);
    // State Hooks Section
    const [isInitialRender, setIsInitialRender] = (0, react_1.useState)(true);
    const [inputValue, setInputValue] = (0, react_1.useState)(value);
    const [searchValue, setSearchValue] = (0, react_1.useState)('');
    const [nextPage, setNextPage] = (0, react_1.useState)(1);
    const [dropOpen, setDropOpen] = (0, react_1.useState)(false);
    const [selectedItems, setSelectedItems] = (0, react_1.useState)([]);
    // API call for suggestions through a custom hook
    const [dropdownPosition, setDropdownPosition] = (0, react_1.useState)('bottom');
    const inputRef = (0, react_1.useRef)(null);
    const dropRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, () => inputRef.current);
    const adjustDropdownPosition = () => {
        if (inputRef.current && dropRef.current) {
            const inputBoxRect = inputRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const spaceAbove = inputBoxRect.top;
            const spaceBelow = viewportHeight - inputBoxRect.bottom;
            if (spaceAbove > spaceBelow) {
                setDropdownPosition('top');
            }
            else {
                setDropdownPosition('bottom');
            }
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('resize', adjustDropdownPosition);
        adjustDropdownPosition();
        return () => {
            window.removeEventListener('resize', adjustDropdownPosition);
        };
    }, [dropOpen]);
    const { suggestions, isLoading, handlePickSuggestions } = (0, autosuggestions_1.useSuggestions)(getData, data, dropOpen, async, paginationEnabled, initialLoad, inputValue, isMultiple, setNextPage, selectedItems
    // nextBlock
    );
    // Handling the selection of a suggestion
    const handleSuggestionClick = (0, react_1.useCallback)((suggestion) => {
        if (isMultiple) {
            setSelectedItems((prev) => [...prev, suggestion]);
        }
        else {
            setInputValue(suggestion[desc]);
        }
        setSearchValue('');
        setInputValue(suggestion[desc]);
        onChange(suggestion);
        setDropOpen(false);
    }, []);
    // Adding debounce to avoid making API calls on every keystroke
    const handleChangeWithDebounce = (0, debounce_1.debounce)((value) => {
        if ((type === 'auto_complete' || type === 'auto_suggestion') && async) {
            handlePickSuggestions(value, 1);
        }
    }, 1000);
    const handleMultiSelect = (e, suggestion) => {
        const { checked } = e.target;
        if (isMultiple) {
            if (checked) {
                setSelectedItems((prev) => [...prev, suggestion]);
            }
            else {
                setSelectedItems((prev) => {
                    return prev.filter((item, i) => item[descId] !== suggestion[descId]);
                });
            }
        }
        else {
            if (checked) {
                setInputValue(suggestion[desc]);
                onChange(suggestion);
            }
            else {
                setInputValue('');
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (!(0, deepEqual_1.deepEqual)(selectedItems, propsSeelctedItems))
            setSelectedItems(propsSeelctedItems);
    }, [propsSeelctedItems]);
    // Effect to set the input value whenever `value` prop changes
    (0, react_1.useEffect)(() => {
        setInputValue(value !== null && value !== void 0 ? value : '');
    }, [value]);
    const handleChange = (e) => {
        const { value } = e.target;
        setDropOpen(true);
        setSearchValue(value);
        handleChangeWithDebounce(value);
        if (!value) {
            setInputValue('');
            onChange({ [descId]: '', [desc]: '' });
        }
    };
    const handleSuggestionChange = (e) => {
        const { value } = e.target;
        setDropOpen(true);
        setSearchValue(value);
        handleChangeWithDebounce(value);
    };
    const handleBlur = () => {
        setTimeout(() => {
            setDropOpen(false);
        }, 200);
    };
    const handleClear = () => {
        if (searchValue) {
            setSearchValue('');
            setDropOpen(false);
        }
        else {
            setInputValue('');
            onChange({ [descId]: '', [desc]: '' });
            setDropOpen(false);
        }
    };
    const generateClassName = (0, react_1.useCallback)(() => {
        return `qbs-textfield-default ${className} ${errors && (errors === null || errors === void 0 ? void 0 : errors.message) ? 'textfield-error' : 'textfield'}`;
    }, [errors, name]);
    const handleRemoveSelectedItem = (index) => {
        setSelectedItems((prev) => {
            return prev.filter((_, i) => i !== index);
        });
    };
    (0, react_1.useEffect)(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
        }
        else {
            onChange(selectedItems);
        }
    }, [selectedItems]);
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                event.target instanceof Node &&
                !dropdownRef.current.contains(event.target)) {
                setDropOpen(false);
                setSearchValue('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Filtering suggestions based on type and search value
    const selected = isMultiple ? selectedItems : inputValue;
    const filteredData = (0, filterSuggestions_1.filterSuggestions)(suggestions, searchValue, type, desc, selected, async);
    const isSelected = (item, selectedItems) => {
        if (Array.isArray(selectedItems)) {
            return selectedItems.some((selectedItem) => selectedItem[desc] === item[desc]);
        }
        else {
            return item[desc] === selectedItems;
        }
    };
    const handleLoadMore = () => {
        if (paginationEnabled) {
            handlePickSuggestions(searchValue, nextPage + 1, true);
            setNextPage(nextPage + 1);
        }
    };
    const handleOnClick = () => {
        !disabled && !readOnly ? setDropOpen(true) : '';
    };
    const tooltipContent = (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 1
        ? selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.slice(1).map((item) => item[desc]).join(', ')
        : '';
    const handleSelctAll = (e) => {
        const { checked } = e.target;
        if (checked) {
            setSelectedItems([...filteredData]);
        }
        else {
            setSelectedItems([]);
        }
    };
    const arraysAreEqual = () => {
        // Check if every object in filteredData is in selectedItems
        return filteredData.every((filteredItem) => selectedItems.some((selectedItem) => JSON.stringify(filteredItem) === JSON.stringify(selectedItem)));
    };
    return (react_1.default.createElement("div", { className: fullWidth ? 'fullWidth' : 'autoWidth', ref: dropdownRef },
        label && (react_1.default.createElement("div", { style: {
                marginBottom: 5,
                display: 'flex',
                justifyContent: 'space-between',
            } },
            react_1.default.createElement("label", { className: `labels label-text` },
                label,
                required && react_1.default.createElement("span", { className: "text-error" }, " *")),
            react_1.default.createElement("span", { onClick: () => handleAction === null || handleAction === void 0 ? void 0 : handleAction(), className: `action_label` }, actionLabel))),
        react_1.default.createElement("div", { style: { position: 'relative' } },
            react_1.default.createElement("div", { className: "selected-items-container " }, (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: selectedItems[0].id, className: "selected-item" },
                    react_1.default.createElement(tootltip_1.default, { title: (_a = selectedItems[0]) === null || _a === void 0 ? void 0 : _a[desc] }, ((_c = (_b = selectedItems[0]) === null || _b === void 0 ? void 0 : _b[desc]) === null || _c === void 0 ? void 0 : _c.length) > 8
                        ? `${(_d = selectedItems[0]) === null || _d === void 0 ? void 0 : _d[desc].substring(0, 8)}...`
                        : (_e = selectedItems[0]) === null || _e === void 0 ? void 0 : _e[desc]),
                    react_1.default.createElement("button", { onClick: () => handleRemoveSelectedItem(0), className: "remove-item-btn", "aria-label": `Remove ${(_f = selectedItems[0]) === null || _f === void 0 ? void 0 : _f[desc]}` }, "X")),
                react_1.default.createElement(tootltip_1.default, { title: tooltipContent }, (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 1 && (react_1.default.createElement("div", { className: "selected-item-more" },
                    "+",
                    (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) - 1,
                    " more")))))),
            react_1.default.createElement("input", { id: id, ref: inputRef, type: "text", value: type === 'auto_suggestion'
                    ? inputValue
                    : searchValue || inputValue, onChange: handleChange, 
                // onBlur={handleBlur}
                onFocus: onFocus, onClick: () => handleOnClick(), className: generateClassName(), placeholder: (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 ? '' : placeholder !== null && placeholder !== void 0 ? placeholder : '', readOnly: readOnly || type === 'custom_select' || type == 'auto_suggestion', disabled: disabled, "data-testid": "custom-autocomplete" }),
            react_1.default.createElement("div", { className: "qbs-autocomplete-close-icon" },
                (inputValue || searchValue) && !disabled && !readOnly && (react_1.default.createElement("button", { onClick: handleClear, className: "icon-button", "aria-label": "clear" },
                    react_1.default.createElement(icons_1.Close, null))),
                react_1.default.createElement("button", { disabled: disabled || readOnly, type: "button", onClick: () => setDropOpen(!dropOpen), className: "icon-button", "aria-label": "toggle" },
                    react_1.default.createElement(icons_1.DropArrow, null))),
            dropOpen && (react_1.default.createElement("ul", { ref: dropRef, className: `qbs-autocomplete-suggestions ${dropdownPosition}` },
                type == 'auto_suggestion' && (react_1.default.createElement("div", { style: { position: 'relative' }, className: "qbs-core-search-container" },
                    react_1.default.createElement("span", { className: "dropdown-search-icon" },
                        react_1.default.createElement(icons_1.Search, null)),
                    react_1.default.createElement("input", { className: "dropdown-search-input", onChange: handleSuggestionChange, value: searchValue, placeholder: "Search" }))),
                react_1.default.createElement("div", { className: "qbs-autocomplete-suggestions-sub" },
                    selectAll && isMultiple && (react_1.default.createElement("div", { className: `qbs-autocomplete-listitem-container ${(isMultiple || singleSelect) &&
                            'qbs-autocomplete-checkbox-container'} ${arraysAreEqual() ? 'is-selected' : ''}` },
                        (isMultiple || singleSelect) && (react_1.default.createElement("div", { className: "qbs-autocomplete-checkbox" },
                            react_1.default.createElement("input", { onChange: (e) => handleSelctAll(e), type: "checkbox", checked: arraysAreEqual(), id: `qbs-checkbox-selectAll` }),
                            react_1.default.createElement("label", { htmlFor: `qbs-checkbox-selectAll` },
                                react_1.default.createElement("svg", { width: "8", height: "6", viewBox: "0 0 8 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    react_1.default.createElement("path", { d: "M0 3.21739L2.89883 6L8 1.06994L6.89494 0L2.89883 3.86768L1.09728 2.14745L0 3.21739Z", fill: "white" }))))),
                        react_1.default.createElement("li", { className: `qbs-autocomplete-suggestions-item ${arraysAreEqual() ? 'is-selected' : ''}` }, selectAllLabel !== null && selectAllLabel !== void 0 ? selectAllLabel : 'Select All'))),
                    (filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) > 0 ? (filteredData.map((suggestion, idx) => (react_1.default.createElement("div", { key: idx.toString(), className: `qbs-autocomplete-listitem-container ${(isMultiple || singleSelect) &&
                            'qbs-autocomplete-checkbox-container'} ${isSelected(suggestion, selected) ? 'is-selected' : ''}` },
                        (isMultiple || singleSelect) && (react_1.default.createElement("div", { className: "qbs-autocomplete-checkbox" },
                            react_1.default.createElement("input", { onChange: (e) => handleMultiSelect(e, suggestion), type: "checkbox", checked: isSelected(suggestion, selected), id: `qbs-checkbox-${idx.toString()}` }),
                            react_1.default.createElement("label", { htmlFor: `qbs-checkbox-${idx.toString()}` },
                                react_1.default.createElement("svg", { width: "8", height: "6", viewBox: "0 0 8 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    react_1.default.createElement("path", { d: "M0 3.21739L2.89883 6L8 1.06994L6.89494 0L2.89883 3.86768L1.09728 2.14745L0 3.21739Z", fill: "white" }))))),
                        react_1.default.createElement("li", { key: idx, className: `qbs-autocomplete-suggestions-item ${isSelected(suggestion, selected) ? 'is-selected' : ''}`, onClick: () => handleSuggestionClick(suggestion), "data-testid": suggestion[desc] }, suggestion[desc]))))) : (react_1.default.createElement(react_1.default.Fragment, null, isLoading ? (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                        react_1.default.createElement("span", null,
                            react_1.default.createElement(icons_1.Spinner, null)))) : (react_1.default.createElement("li", { className: "qbs-autocomplete-notfound", onClick: handleBlur }, notDataMessage !== null && notDataMessage !== void 0 ? notDataMessage : 'No Results Found')))),
                    paginationEnabled &&
                        nextBlock !== 0 &&
                        nextBlock !== undefined &&
                        (filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) > 0 && (react_1.default.createElement("div", { className: "loadMoreSection", onClick: () => handleLoadMore() },
                        react_1.default.createElement("p", { style: { margin: 2 } }, "Load More"))))))),
        errors && (react_1.default.createElement("div", { className: "text-error text-error-label mt-[1px] textfield-error", "data-testid": "autocomplete-error" }, errors.message))));
});
exports.default = react_1.default.memo(AutoComplete);
//# sourceMappingURL=AutoComplete.js.map