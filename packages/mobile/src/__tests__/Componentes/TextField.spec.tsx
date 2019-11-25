import React, { FocusEvent } from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { TextField } from '../../index';
import Provider from '../../Provider';
import { themes } from '../../Themes/index';
import { IThemeShape } from '../../Provider/IThemeShape';

describe('TextField', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('rendering', () => {
    test('should match to snapshot - Default TextField', () => {
      const component = renderer
          .create(<TextField />)
          .toJSON();

      expect(component).toMatchSnapshot('Default TextField snapshot');
    });
    test('should match to snapshot - With label', () => {
      const component = renderer
          .create(<TextField label="Mock Label"/>)
          .toJSON();

      expect(component).toMatchSnapshot('With label TextField snapshot');
    });
    test('should match to snapshot - With help text', () => {
      const component = renderer
          .create(<TextField helpText="Mock Help Text"/>)
          .toJSON();

      expect(component).toMatchSnapshot('With help text TextField snapshot');
    });
    test('should match to snapshot - Required', () => {
      const component = renderer
          .create(<TextField required={true} label="Label"/>)
          .toJSON();

      expect(component).toMatchSnapshot('Required TextField snapshot');
    });
    test('should match to snapshot - Sucess status', () => {
      const component = renderer
          .create(<TextField status="success" label="mock" helpText="mock" icon="eye"/>)
          .toJSON();

      expect(component).toMatchSnapshot('Sucess status TextField snapshot');
    });
    test('should match to snapshot - Error status', () => {
      const component = renderer
          .create(<TextField status="error" label="mock" helpText="mock" icon="eye"/>)
          .toJSON();

      expect(component).toMatchSnapshot('Error status TextField snapshot');
    });
    test('should match to snapshot - With icon', () => {
      const component = renderer
          .create(<TextField icon="eye"/>)
          .toJSON();

      expect(component).toMatchSnapshot('With icon TextField snapshot');
    });
    test('should match to snapshot - With Provider', () => {
      const component = renderer
          .create(<Provider><TextField /></Provider>)
          .toJSON();

      expect(component).toMatchSnapshot('With Provider TextField snapshot');
    });
    test('should match to snapshot - Placeholder Text Color', () => {
      const component = renderer
          .create(<TextField placeholderTextColor={"#FFFFFF"} />)
          .toJSON();

      expect(component).toMatchSnapshot('Placeholder Text Color TextField snapshot');
    });
    test('should match to snapshot - Selection Color TextField snapshot', () => {
      const component = renderer
          .create(<TextField selectionColor={"#FFFFFF"} />)
          .toJSON();

      expect(component).toMatchSnapshot('Selection Color TextField snapshot');
    });
    test('should match to snapshot - Icon Font Size Default TextField snapshot', () => {
      const theme = themes.natura.light;
      const themeClone = Object.assign({}, {...theme});
      delete themeClone.typography.body1;

      const component = renderer
          .create(<TextField icon="eye" />)
          .toJSON();

      expect(component).toMatchSnapshot('Icon Font Size Default TextField snapshot');
    });
    test('should match to snapshot - Not Editable TextField snapshot', () => {
      const theme = themes.natura.light;
      const themeClone = Object.assign({}, {...theme});
      delete themeClone.typography.body1;

      const component = renderer
          .create(<TextField editable={false} label="mock" helpText="mock" icon="eye"/>)
          .toJSON();

      expect(component).toMatchSnapshot('Not Editable TextField snapshot');
    });
    test('should match to snapshot - Theme with missing properties', () => {
      const theme = themes.natura.light;
      const themeClone = Object.assign(
        {},
        {
          ...theme,
          typography: {
            body1: undefined,
            body2: undefined
          },
          spacing: undefined
        } as unknown as IThemeShape);

      const component = renderer
          .create(<TextField theme={themeClone}/>)
          .toJSON();

      expect(component).toMatchSnapshot('Theme with missing properties TextField snapshot');
    });
  });
  describe('functional', () => {
    test('should call focus', () => {
      const onFocus = jest.fn();
      const component = mount(<TextField onFocus={onFocus}/>);

      component.find('TextInput').first().props().onFocus(null);
      expect(onFocus).toBeCalledTimes(1);
    });
    test('should call blur', () => {
      const onBlur = jest.fn();
      const component = mount(<TextField onBlur={onBlur}/>);

      const event = {
        nativeEvent: {
          text: 'mocked'
        }
      } as FocusEvent<HTMLInputElement> & { nativeEvent: { text: string; } };

      component.find('TextInput').first().props().onBlur(event);
      expect(onBlur).toBeCalledTimes(1);
    });
    test('should call blur with no text', () => {
      const onBlur = jest.fn();
      const component = mount(<TextField onBlur={onBlur}/>);

      const event = {
        nativeEvent: {
          text: undefined
        }
      } as FocusEvent<HTMLInputElement> & { nativeEvent: { text: string; } };

      component.find('TextInput').first().props().onBlur(event);
      expect(onBlur).toBeCalledTimes(1);
    });
    test('should call press', () => {
      const focusMock = jest.fn();

      jest.spyOn(React, 'useRef').mockReturnValue({
        current: {
          focus: focusMock
        }
      });

      const component = mount(<TextField/>);

      const touchable = component.find('TouchableWithoutFeedback').first();

      const propOnPress: () => void = touchable.prop('onPress');
      propOnPress();

      expect(component).toMatchSnapshot('should match to snapshot - Pressed');
    });
  });
});
