/* eslint-disable @typescript-eslint/ban-ts-comment */

/**
 * @todo Remove `chai`, `chai-enzyme` and `chai-jest-snapshot` dependencies
 */
// @ts-ignore
import chai from "chai";
// @ts-ignore
import chaiEnzyme from "chai-enzyme";
// @ts-ignore
import chaiJestSnapshot from "chai-jest-snapshot";

chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);
