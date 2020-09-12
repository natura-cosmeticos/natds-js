/* eslint-disable @typescript-eslint/no-var-requires */
import { configure } from "enzyme";

const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });
