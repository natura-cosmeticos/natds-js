// @note can't import shallow or ShallowWrapper specifically
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// eslint-disable-next-line
import { format } from 'prettier'


// Make Enzyme functions available in all test files without importing
global.shallow = Enzyme.shallow

Enzyme.ShallowWrapper.prototype.jsx = function jsx () {
  const placeholder = '{ something: null }'
  const obj = this.debug({ ignoreProps: false, verbose: true }).replace(/{\.\.\.}/g, placeholder)

  return format(obj, {
    parser: 'babylon',
    filepath: 'test/setup.mjs',
    trailingComma: 'all',
    semi: false,
    arrowParens: 'always',
  })
    .replace(new RegExp(placeholder, 'g'), '{...}')
    .replace(';<', '<')
}
// the html function just throws errors so it's just reset to be the jsx function
Enzyme.ShallowWrapper.prototype.html = Enzyme.ShallowWrapper.prototype.jsx

jest.mock('react-native-device-info', () => {
  return {
    getDeviceLocale: () => 'en',
    getDeviceCountry: () => 'US',
  }
})

jest.mock('react-native-custom-tabs', () => ({
  CustomTabs: {
    openURL: jest.fn(),
  },
}))

jest.mock('react-native-safari-view', () => ({
  isAvailable: jest.fn(),
  show: jest.fn(),
}))



const { JSDOM } = require('jsdom')


const jsdom = new JSDOM()
const { window } = jsdom
function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop))
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
copyProps(window, global)
Enzyme.configure({ adapter: new Adapter() })

// Ignore React Web errors when using React Native
// allow other errors to propagate if they're relevant
const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|Warning: <%s \/> is using incorrect casing|Warning: Received `%s` for a non-boolean attribute `%s`)|/
const realConsoleError = console.error
console.error = (message) => {
  if (message.match(suppressedErrors)) {
    return
  }
  realConsoleError(message)
}
require('react-native-mock-render/mock')
