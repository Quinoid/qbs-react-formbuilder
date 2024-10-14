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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var autosuggestions_1 = require("./utilities/autosuggestions");
var debounce_1 = require("./utilities/debounce");
var deepEqual_1 = require("./utilities/deepEqual");
var filterSuggestions_1 = require("./utilities/filterSuggestions");
var icons_1 = require("./utilities/icons");
var tootltip_1 = __importDefault(require("./utilities/tootltip"));
var AutoComplete = (0, react_1.forwardRef)(function (_a, ref) {
    var _b, _c, _d, _e, _f, _g;
    var label = _a.label, onChange = _a.onChange, _h = _a.getData, getData = _h === void 0 ? function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, []];
    }); }); } : _h, _j = _a.data, data = _j === void 0 ? [] : _j, errors = _a.errors, _k = _a.required, required = _k === void 0 ? false : _k, name = _a.name, _l = _a.fullWidth, fullWidth = _l === void 0 ? false : _l, placeholder = _a.placeholder, id = _a.id, _m = _a.type, type = _m === void 0 ? 'custom_select' : _m, _o = _a.selectedItems, propsSeelctedItems = _o === void 0 ? [] : _o, _p = _a.readOnly, readOnly = _p === void 0 ? false : _p, _q = _a.disabled, disabled = _q === void 0 ? false : _q, value = _a.value, _r = _a.isMultiple, isMultiple = _r === void 0 ? false : _r, _s = _a.desc, desc = _s === void 0 ? 'name' : _s, _t = _a.descId, descId = _t === void 0 ? 'id' : _t, singleSelect = _a.singleSelect, className = _a.className, _u = _a.async, async = _u === void 0 ? false : _u, paginationEnabled = _a.paginationEnabled, initialLoad = _a.initialLoad, actionLabel = _a.actionLabel, handleAction = _a.handleAction, nextBlock = _a.nextBlock, notDataMessage = _a.notDataMessage, onFocus = _a.onFocus, selectAllLabel = _a.selectAllLabel, selectAll = _a.selectAll;
    var dropdownRef = (0, react_1.useRef)(null);
    // State Hooks Section
    var _v = (0, react_1.useState)(true), isInitialRender = _v[0], setIsInitialRender = _v[1];
    var _w = (0, react_1.useState)(value), inputValue = _w[0], setInputValue = _w[1];
    var _x = (0, react_1.useState)(''), searchValue = _x[0], setSearchValue = _x[1];
    var _y = (0, react_1.useState)(1), nextPage = _y[0], setNextPage = _y[1];
    var _z = (0, react_1.useState)(false), dropOpen = _z[0], setDropOpen = _z[1];
    var _0 = (0, react_1.useState)([]), selectedItems = _0[0], setSelectedItems = _0[1];
    // API call for suggestions through a custom hook
    var _1 = (0, react_1.useState)('bottom'), dropdownPosition = _1[0], setDropdownPosition = _1[1];
    var inputRef = (0, react_1.useRef)(null);
    var dropRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return inputRef.current; });
    var adjustDropdownPosition = function () {
        if (inputRef.current && dropRef.current) {
            var inputBoxRect = inputRef.current.getBoundingClientRect();
            var viewportHeight = window.innerHeight;
            var spaceAbove = inputBoxRect.top;
            var spaceBelow = viewportHeight - inputBoxRect.bottom;
            if (spaceAbove > spaceBelow) {
                setDropdownPosition('top');
            }
            else {
                setDropdownPosition('bottom');
            }
        }
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('resize', adjustDropdownPosition);
        adjustDropdownPosition();
        return function () {
            window.removeEventListener('resize', adjustDropdownPosition);
        };
    }, [dropOpen]);
    var _2 = (0, autosuggestions_1.useSuggestions)(getData, data, dropOpen, async, paginationEnabled, initialLoad, inputValue, isMultiple, setNextPage, selectedItems
    // nextBlock
    ), suggestions = _2.suggestions, isLoading = _2.isLoading, handlePickSuggestions = _2.handlePickSuggestions;
    // Handling the selection of a suggestion
    var handleSuggestionClick = (0, react_1.useCallback)(function (suggestion) {
        if (isMultiple) {
            setSelectedItems(function (prev) { return __spreadArray(__spreadArray([], prev, true), [suggestion], false); });
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
    var handleChangeWithDebounce = (0, debounce_1.debounce)(function (value) {
        if ((type === 'auto_complete' || type === 'auto_suggestion') && async) {
            handlePickSuggestions(value, 1);
        }
    }, 1000);
    var handleMultiSelect = function (e, suggestion) {
        var checked = e.target.checked;
        if (isMultiple) {
            if (checked) {
                setSelectedItems(function (prev) { return __spreadArray(__spreadArray([], prev, true), [suggestion], false); });
            }
            else {
                setSelectedItems(function (prev) {
                    return prev.filter(function (item, i) { return item[descId] !== suggestion[descId]; });
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
    (0, react_1.useEffect)(function () {
        if (!(0, deepEqual_1.deepEqual)(selectedItems, propsSeelctedItems))
            setSelectedItems(propsSeelctedItems);
    }, [propsSeelctedItems]);
    // Effect to set the input value whenever `value` prop changes
    (0, react_1.useEffect)(function () {
        setInputValue(value !== null && value !== void 0 ? value : '');
    }, [value]);
    var handleChange = function (e) {
        var _a;
        var value = e.target.value;
        setDropOpen(true);
        setSearchValue(value);
        handleChangeWithDebounce(value);
        if (!value) {
            setInputValue('');
            onChange((_a = {}, _a[descId] = '', _a[desc] = '', _a));
        }
    };
    var handleSuggestionChange = function (e) {
        var value = e.target.value;
        setDropOpen(true);
        setSearchValue(value);
        handleChangeWithDebounce(value);
    };
    var handleBlur = function () {
        setTimeout(function () {
            setDropOpen(false);
        }, 200);
    };
    var handleClear = function () {
        var _a;
        if (searchValue) {
            setSearchValue('');
            setDropOpen(false);
        }
        else {
            setInputValue('');
            onChange((_a = {}, _a[descId] = '', _a[desc] = '', _a));
            setDropOpen(false);
        }
    };
    var generateClassName = (0, react_1.useCallback)(function () {
        return "qbs-textfield-default ".concat(className, " ").concat(errors && (errors === null || errors === void 0 ? void 0 : errors.message) ? 'textfield-error' : 'textfield');
    }, [errors, name]);
    var handleRemoveSelectedItem = function (index) {
        setSelectedItems(function (prev) {
            return prev.filter(function (_, i) { return i !== index; });
        });
    };
    (0, react_1.useEffect)(function () {
        if (isInitialRender) {
            setIsInitialRender(false);
        }
        else {
            onChange(selectedItems);
        }
    }, [selectedItems]);
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            if (dropdownRef.current &&
                event.target instanceof Node &&
                !dropdownRef.current.contains(event.target)) {
                setDropOpen(false);
                setSearchValue('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Filtering suggestions based on type and search value
    var selected = isMultiple ? selectedItems : inputValue;
    var filteredData = (0, filterSuggestions_1.filterSuggestions)(suggestions, searchValue, type, desc, selected, async);
    var isSelected = function (item, selectedItems) {
        if (Array.isArray(selectedItems)) {
            return selectedItems.some(function (selectedItem) { return selectedItem[desc] === item[desc]; });
        }
        else {
            return item[desc] === selectedItems;
        }
    };
    var handleLoadMore = function () {
        if (paginationEnabled) {
            handlePickSuggestions(searchValue, nextPage + 1, true);
            setNextPage(nextPage + 1);
        }
    };
    var handleOnClick = function () {
        !disabled && !readOnly ? setDropOpen(true) : '';
    };
    var tooltipContent = (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 1
        ? selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.slice(1).map(function (item) { return item[desc]; }).join(', ')
        : '';
    var handleSelctAll = function (e) {
        var checked = e.target.checked;
        if (checked) {
            setSelectedItems(__spreadArray([], filteredData, true));
        }
        else {
            setSelectedItems([]);
        }
    };
    var arraysAreEqual = function () {
        // Check if every object in filteredData is in selectedItems
        return filteredData.every(function (filteredItem) {
            return selectedItems.some(function (selectedItem) {
                return JSON.stringify(filteredItem) === JSON.stringify(selectedItem);
            });
        });
    };
    return (react_1.default.createElement("div", { className: fullWidth ? 'fullWidth' : 'autoWidth', ref: dropdownRef },
        label && (react_1.default.createElement("div", { style: {
                marginBottom: 5,
                display: 'flex',
                justifyContent: 'space-between',
            } },
            react_1.default.createElement("label", { className: "labels label-text" },
                label,
                required && react_1.default.createElement("span", { className: "text-error" }, " *")),
            react_1.default.createElement("span", { onClick: function () { return handleAction === null || handleAction === void 0 ? void 0 : handleAction(); }, className: "action_label" }, actionLabel))),
        react_1.default.createElement("div", { style: { position: 'relative' } },
            react_1.default.createElement("div", { className: "selected-items-container " }, (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { key: selectedItems[0].id, className: "selected-item" },
                    react_1.default.createElement(tootltip_1.default, { title: (_b = selectedItems[0]) === null || _b === void 0 ? void 0 : _b[desc] }, ((_d = (_c = selectedItems[0]) === null || _c === void 0 ? void 0 : _c[desc]) === null || _d === void 0 ? void 0 : _d.length) > 8
                        ? "".concat((_e = selectedItems[0]) === null || _e === void 0 ? void 0 : _e[desc].substring(0, 8), "...")
                        : (_f = selectedItems[0]) === null || _f === void 0 ? void 0 : _f[desc]),
                    react_1.default.createElement("button", { onClick: function () { return handleRemoveSelectedItem(0); }, className: "remove-item-btn", "aria-label": "Remove ".concat((_g = selectedItems[0]) === null || _g === void 0 ? void 0 : _g[desc]) }, "X")),
                react_1.default.createElement(tootltip_1.default, { title: tooltipContent }, (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 1 && (react_1.default.createElement("div", { className: "selected-item-more" },
                    "+",
                    (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) - 1,
                    " more")))))),
            react_1.default.createElement("input", { id: id, ref: inputRef, type: "text", value: type === 'auto_suggestion'
                    ? inputValue
                    : searchValue || inputValue, onChange: handleChange, 
                // onBlur={handleBlur}
                onFocus: onFocus, onClick: function () { return handleOnClick(); }, className: generateClassName(), placeholder: (selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.length) > 0 ? '' : placeholder !== null && placeholder !== void 0 ? placeholder : '', readOnly: readOnly || type === 'custom_select' || type == 'auto_suggestion', disabled: disabled, "data-testid": "custom-autocomplete" }),
            react_1.default.createElement("div", { className: "qbs-autocomplete-close-icon" },
                (inputValue || searchValue) && !disabled && !readOnly && (react_1.default.createElement("button", { onClick: handleClear, className: "icon-button", "aria-label": "clear" },
                    react_1.default.createElement(icons_1.Close, null))),
                react_1.default.createElement("button", { disabled: disabled || readOnly, type: "button", onClick: function () { return setDropOpen(!dropOpen); }, className: "icon-button", "aria-label": "toggle" },
                    react_1.default.createElement(icons_1.DropArrow, null))),
            dropOpen && (react_1.default.createElement("ul", { ref: dropRef, className: "qbs-autocomplete-suggestions ".concat(dropdownPosition) },
                type == 'auto_suggestion' && (react_1.default.createElement("div", { style: { position: 'relative' }, className: "qbs-core-search-container" },
                    react_1.default.createElement("span", { className: "dropdown-search-icon" },
                        react_1.default.createElement(icons_1.Search, null)),
                    react_1.default.createElement("input", { className: "dropdown-search-input", onChange: handleSuggestionChange, value: searchValue, placeholder: "Search" }))),
                react_1.default.createElement("div", { className: "qbs-autocomplete-suggestions-sub" },
                    selectAll && isMultiple && (react_1.default.createElement("div", { className: "qbs-autocomplete-listitem-container ".concat((isMultiple || singleSelect) &&
                            'qbs-autocomplete-checkbox-container', " ").concat(arraysAreEqual() ? 'is-selected' : '') },
                        (isMultiple || singleSelect) && (react_1.default.createElement("div", { className: "qbs-autocomplete-checkbox" },
                            react_1.default.createElement("input", { onChange: function (e) { return handleSelctAll(e); }, type: "checkbox", checked: arraysAreEqual(), id: "qbs-checkbox-selectAll" }),
                            react_1.default.createElement("label", { htmlFor: "qbs-checkbox-selectAll" },
                                react_1.default.createElement("svg", { width: "8", height: "6", viewBox: "0 0 8 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    react_1.default.createElement("path", { d: "M0 3.21739L2.89883 6L8 1.06994L6.89494 0L2.89883 3.86768L1.09728 2.14745L0 3.21739Z", fill: "white" }))))),
                        react_1.default.createElement("li", { className: "qbs-autocomplete-suggestions-item ".concat(arraysAreEqual() ? 'is-selected' : '') }, selectAllLabel !== null && selectAllLabel !== void 0 ? selectAllLabel : 'Select All'))),
                    (filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) > 0 ? (filteredData.map(function (suggestion, idx) { return (react_1.default.createElement("div", { key: idx.toString(), className: "qbs-autocomplete-listitem-container ".concat((isMultiple || singleSelect) &&
                            'qbs-autocomplete-checkbox-container', " ").concat(isSelected(suggestion, selected) ? 'is-selected' : '') },
                        (isMultiple || singleSelect) && (react_1.default.createElement("div", { className: "qbs-autocomplete-checkbox" },
                            react_1.default.createElement("input", { onChange: function (e) { return handleMultiSelect(e, suggestion); }, type: "checkbox", checked: isSelected(suggestion, selected), id: "qbs-checkbox-".concat(idx.toString()) }),
                            react_1.default.createElement("label", { htmlFor: "qbs-checkbox-".concat(idx.toString()) },
                                react_1.default.createElement("svg", { width: "8", height: "6", viewBox: "0 0 8 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                                    react_1.default.createElement("path", { d: "M0 3.21739L2.89883 6L8 1.06994L6.89494 0L2.89883 3.86768L1.09728 2.14745L0 3.21739Z", fill: "white" }))))),
                        react_1.default.createElement("li", { key: idx, className: "qbs-autocomplete-suggestions-item ".concat(isSelected(suggestion, selected) ? 'is-selected' : ''), onClick: function () { return handleSuggestionClick(suggestion); }, "data-testid": suggestion[desc] }, suggestion[desc]))); })) : (react_1.default.createElement(react_1.default.Fragment, null, isLoading ? (react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                        react_1.default.createElement("span", null,
                            react_1.default.createElement(icons_1.Spinner, null)))) : (react_1.default.createElement("li", { className: "qbs-autocomplete-notfound", onClick: handleBlur }, notDataMessage !== null && notDataMessage !== void 0 ? notDataMessage : 'No Results Found')))),
                    paginationEnabled &&
                        nextBlock !== 0 &&
                        nextBlock !== undefined &&
                        (filteredData === null || filteredData === void 0 ? void 0 : filteredData.length) > 0 && (react_1.default.createElement("div", { className: "loadMoreSection", onClick: function () { return handleLoadMore(); } },
                        react_1.default.createElement("p", { style: { margin: 2 } }, "Load More"))))))),
        errors && (react_1.default.createElement("div", { className: "text-error text-error-label mt-[1px]", "data-testid": "autocomplete-error" }, errors.message))));
});
exports.default = react_1.default.memo(AutoComplete);
//# sourceMappingURL=AutoComplete.js.map