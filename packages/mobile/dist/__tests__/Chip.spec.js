"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
var react_1 = __importDefault(require("react"));
var Chip_1 = __importDefault(require("../Components/Chip/Chip"));
var enzyme_1 = require("enzyme");
describe('Chip', function () {
    describe('rendering', function () {
        test('should match to snapshot - Default', function () {
            var component = enzyme_1.shallow(react_1.default.createElement(Chip_1.default, null));
            expect(component).toMatchSnapshot('Default chip snapshot');
        });
    });
    describe('interaction', function () {
        test('should call onPress', function () {
            var mockOnPress = jest.fn();
            var component = enzyme_1.shallow(react_1.default.createElement(Chip_1.default, { onPress: mockOnPress }));
            component.simulate('press');
            expect(mockOnPress).toHaveBeenCalled();
        });
        test('should call onLongPress', function () {
            var mockOnLongPress = jest.fn();
            var component = enzyme_1.shallow(react_1.default.createElement(Chip_1.default, { onLongPress: mockOnLongPress }));
            component.simulate('longPress');
            expect(mockOnLongPress).toHaveBeenCalled();
        });
        test('should call onClose', function () {
            var mockOnClose = jest.fn();
            var component = enzyme_1.shallow(react_1.default.createElement(Chip_1.default, { onClose: mockOnClose }));
            component.simulate('close');
            expect(mockOnClose).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=Chip.spec.js.map