/* eslint-disable @typescript-eslint/no-var-requires */
const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });
