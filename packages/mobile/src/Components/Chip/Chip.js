"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_native_paper_1 = require("react-native-paper");
var Chip = function (_a) {
    var mode = _a.mode, children = _a.children, icon = _a.icon, avatar = _a.avatar, selected = _a.selected, selectedColor = _a.selectedColor, disabled = _a.disabled, accessibilityLabel = _a.accessibilityLabel, onPress = _a.onPress, onLongPress = _a.onLongPress, onClose = _a.onClose, textStyle = _a.textStyle, style = _a.style, theme = _a.theme, testID = _a.testID, other = __rest(_a, ["mode", "children", "icon", "avatar", "selected", "selectedColor", "disabled", "accessibilityLabel", "onPress", "onLongPress", "onClose", "textStyle", "style", "theme", "testID"]);
    return (react_1.default.createElement(react_native_paper_1.Chip, __assign({ mode: mode, selected: selected, icon: icon, avatar: avatar, selectedColor: selectedColor, disabled: disabled, accessibilityLabel: accessibilityLabel, textStyle: textStyle, style: style, theme: theme, testID: testID, onPress: onPress, onLongPress: onLongPress, onClose: onClose }, other), children));
};
Chip.propTypes = {
    mode: prop_types_1.default.string,
    children: prop_types_1.default.node,
    icon: prop_types_1.default.any,
    avatar: prop_types_1.default.node,
    selected: prop_types_1.default.bool,
    selectedColor: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
    accessibilityLabel: prop_types_1.default.string,
    textStyle: prop_types_1.default.any,
    style: prop_types_1.default.any,
    theme: prop_types_1.default.any,
    testID: prop_types_1.default.string,
    onPress: prop_types_1.default.func,
    onLongPress: prop_types_1.default.func,
    onClose: prop_types_1.default.func,
};
Chip.defaultProps = {
    mode: 'flat',
    children: 'Chip',
    icon: '',
    avatar: '',
    selected: false,
    selectedColor: '',
    disabled: false,
    accessibilityLabel: '',
    textStyle: '',
    style: '',
    theme: '',
    testID: '',
    onPress: function () { },
    onLongPress: function () { },
    onClose: function () { },
};
exports.default = Chip;
//# sourceMappingURL=Chip.js.map