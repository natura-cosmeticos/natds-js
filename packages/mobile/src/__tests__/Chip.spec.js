"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
var react_1 = __importDefault(require("react"));
var Chip_1 = __importDefault(require("../Components/Chip"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var enzyme_1 = require("enzyme");
describe('Chip', function () {
    describe('rendering', function () {
        test('should match to snapshot - Default', function () {
            var component = react_test_renderer_1.default.create(react_1.default.createElement(Chip_1.default, { children: true })).toJSON();
            expect(component).toMatchSnapshot('Default chip snapshot');
        });
        test('should match to snapshot - Icon', function () {
            var component = react_test_renderer_1.default.create(react_1.default.createElement(Chip_1.default, { children: true, icon: "add" })).toJSON();
            expect(component).toMatchSnapshot('Icon chip snapshot');
        });
        test('should match to snapshot - Avatar', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, avatar: "avatar" }))
                .toJSON();
            expect(component).toMatchSnapshot('Avatar chip snapshot');
        });
        test('should match to snapshot - Selected', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, selected: true }))
                .toJSON();
            expect(component).toMatchSnapshot('Selected chip snapshot');
        });
        test('should match to snapshot - SelectedColor', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, selectedColor: "red" }))
                .toJSON();
            expect(component).toMatchSnapshot('SelectedColor chip snapshot');
        });
        test('should match to snapshot - Disabled', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, disabled: true }))
                .toJSON();
            expect(component).toMatchSnapshot('Disabled chip snapshot');
        });
        test('should match to snapshot - AccessibilityLabel', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, accessibilityLabel: "accessibilityLabel" }))
                .toJSON();
            expect(component).toMatchSnapshot('AccessibilityLabel chip snapshot');
        });
        test('should match to snapshot - TextStyle', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, textStyle: {} }))
                .toJSON();
            expect(component).toMatchSnapshot('TextStyle chip snapshot');
        });
        test('should match to snapshot - Style', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, style: "style" }))
                .toJSON();
            expect(component).toMatchSnapshot('Style chip snapshot');
        });
        test('should match to snapshot - Theme', function () {
            var component = react_test_renderer_1.default.create(react_1.default.createElement(Chip_1.default, { children: true, theme: {} })).toJSON();
            expect(component).toMatchSnapshot('Theme chip snapshot');
        });
        test('should match to snapshot - TestID', function () {
            var component = react_test_renderer_1.default
                .create(react_1.default.createElement(Chip_1.default, { children: true, testID: "testID" }))
                .toJSON();
            expect(component).toMatchSnapshot('TestID chip snapshot');
        });
    });
    describe('interaction', function () {
        test('should call onPress', function () {
            var mockOnPress = jest.fn();
            var component = enzyme_1.shallow(react_1.default.createElement(Chip_1.default, { children: true, onPress: mockOnPress }));
            component
                .props()
                .children()
                .props.onPress();
            expect(mockOnPress).toHaveBeenCalled();
        });
        test('should call onClose', function () {
            var mockOnClose = jest.fn();
            var component = enzyme_1.shallow(react_1.default.createElement(Chip_1.default, { children: true, onClose: mockOnClose }));
            component
                .props()
                .children()
                .props.onClose();
            expect(mockOnClose).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=Chip.spec.js.map