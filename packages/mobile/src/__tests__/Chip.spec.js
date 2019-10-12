"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
var react_1 = __importDefault(require("react"));
var Chip_1 = __importDefault(require("../Components/Chip/Chip"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
it('renders chip correctly', function () {
    var chip = react_test_renderer_1.default.create(react_1.default.createElement(Chip_1.default, null)).toJSON();
    expect(chip).toMatchSnapshot();
});
//# sourceMappingURL=Chip.spec.js.map