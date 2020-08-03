import { ComponentWithLabel } from './components/ComponentWithLabel';
import {getComponentParams} from "./parameters/componentParams";
import withContainer from "./decorators/container";
import withJest from "./decorators/jest/jest";

export { ComponentWithLabel } from './components/ComponentWithLabel';
export const getDefaultDecorators = () => ([withContainer, withJest])
export { getComponentParams } from "./parameters/componentParams";
