import * as React from 'react';
import {
  TextInput,
  TextInputProps,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
  View,
  TextStyle,
  Platform
} from 'react-native';
import { withTheme, DefaultTheme } from 'react-native-paper';
import { IThemeShape } from 'Provider/IThemeShape';
import Typography from '../Components/Typography';
import { themes } from '../Themes/index';
import { buildTheme } from '../Themes/buildTheme';
import { tokens } from '@naturacosmeticos/natds-styles';
/**
 * // TODO: Replace the import below to our Icon component
 */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type TextFieldSizes = 'large' | 'medium';

type TextFieldTypes = 'text' | 'password' | 'search' | 'other';

const textFieldDefaultIcons = {
  password: 'eye',
  search: 'close-circle',
  success: 'check-circle-outline',
  error: 'close-circle-outline'
};

const actionTypesMatcher = /^(password|search)$/;

interface ITextFieldProps extends Omit<TextInputProps, 'secureTextEntry'> {
  /**
   * @optional
   */
  theme: IThemeShape;
  /**
   * @optional
   */
  textInputStyle?: ViewStyle;
  /**
   * @optional
   * Label placed above the text input
   */
  label?: string;
  /**
   * @optional
   */
  labelStyle?: TextStyle;
  /**
   * @optional
   * Help text placed underneath the text input
   */
  helpText?: string;
  /**
   * @optional
   */
  helpTextStyle?: TextStyle;
  /**
   * If this field is required or not
   */
  required?: boolean;
  /**
   * @optional
   * Style to use when `disabled` is set to `true`
   */
  disabledStyle?: TextStyle;
  /**
   * Whether this field is disabled or not
   */
  disabled?: boolean;
  /**
   * Optional status for component variant
   */
  status?: 'error' | 'success';
  /**
   * @optional
   * Style to use when `status` is set to `success`
   */
  sucessStyle?: TextStyle;
  /**
   * @optional
   * Style to use when `status` is set to `error`
   */
  errorStyle?: TextStyle;
  /**
   * Name of the icone to be used. When `undefined`, the icon will not appear
   */
  icon?: string;
  /**
   * @optional
   */
  iconStyle?: TextStyle;
  /**
   * Size of the text field
   */
  size?: TextFieldSizes;
  /**
   * Type of the text field
   */
  type?: TextFieldTypes;
  /**
   * Function to call when the icon is pressed. Overrides default actions on 'password' and 'search' types.
   */
  onIconPress?: () => void;
}

const TextField: React.FunctionComponent<ITextFieldProps> = (props: ITextFieldProps) => {

  const {
    theme: providerTheme,
    textInputStyle,
    onFocus,
    onBlur,
    label,
    labelStyle: propLabelStyle,
    helpText,
    helpTextStyle: propHelpTextStyle,
    required = false,
    placeholderTextColor: propPlaceholderTextColor,
    selectionColor: propSelectionColor,
    editable = true,
    disabled = false,
    disabledStyle,
    value,
    status,
    icon: iconProp,
    iconStyle: propIconStyle,
    size = 'large',
    type = 'text',
    onIconPress
  } = props;

  const theme = React.useMemo(() => {
    return providerTheme !== DefaultTheme
    ? providerTheme
    : buildTheme(themes.natura.light, themes.natura.light);
  },[providerTheme]);

  const placeholderTextColor = propPlaceholderTextColor
  ? propPlaceholderTextColor
  : theme.colors.textHint;

  const selectionColor = propSelectionColor
  ? propSelectionColor
  : theme.colors.primary;

  const iconFontSize = theme.typography.body1
  ? theme.typography.body1.fontSize
  : 16;

  React.useEffect(() => {
    setSecureTextEntry(type === 'password');
  },[type]);

  const icon = React.useMemo(() => {
    if(iconProp) return iconProp;
    if(type.match(actionTypesMatcher)) {
      return textFieldDefaultIcons[type];
    }
    return undefined;
  },[iconProp, type]);

  const padding = React.useMemo(() => {
    const sizes = {
      large: tokens.spacing.spacingSmall,
      medium: tokens.spacing.spacing
    };
    return sizes[size];
  },[size, theme]);

  const styles: any = React.useMemo(() => {
    const doublePadding = 2;
    const singlePadding = 1;

    const stylesToParse = {
      input: {
        default: {
          borderRadius: theme.roundness,
          padding,
          paddingRight: ((textInputStyle && textInputStyle.padding ? textInputStyle.padding : padding) as number
            * (icon ? doublePadding : singlePadding))
            + (icon ? iconFontSize : 0),
          width: '100%',
          color: theme.colors.text,
          flex: 1,
          caretColor: selectionColor,
          fontSize: theme.typography.body2 ? theme.typography.body2.fontSize : 14,
          lineHeight: tokens.spacing.spacingStandard
        } as TextStyle & { caretColor: string; },
        theme: {
          borderColor: theme.colors.textHint,
          borderWidth: 1
        } as TextStyle,
        themeFocus: {
          borderColor: theme.colors.primary,
          borderWidth: 2
        } as TextStyle,
        themeFilled: {
          borderColor: theme.colors.text,
          borderWidth: 1
        } as TextStyle,
        disabled: {
          color: theme.colors.textHint,
          borderColor: theme.colors.textHint,
          borderWidth: 1
        } as TextStyle,
        success: {
          borderColor: theme.colors.success,
          borderWidth: 1
        } as TextStyle,
        error: {
          borderColor: theme.colors.error,
          borderWidth: 2
        } as TextStyle
      },
      label: {
        default: {
          paddingBottom: tokens.spacing.spacingMicro,
          flexWrap: 'wrap'
        } as TextStyle,
        theme: {
          color: theme.colors.textSecondary
        } as TextStyle,
        themeFocus: {
          color: theme.colors.textSecondary
        } as TextStyle,
        disabled: {
          color: theme.colors.textHint
        } as TextStyle,
        success: {
          color: theme.colors.success
        } as TextStyle,
        error: {
          color: theme.colors.error
        }
      },
      helpText: {
        default: {
          paddingTop: tokens.spacing.spacingMicro,
          flexWrap: 'wrap'
        } as TextStyle,
        theme: {
          color: theme.colors.textSecondary
        } as TextStyle,
        themeFocus: {
          color: theme.colors.textSecondary
        } as TextStyle,
        disabled: {
          color: theme.colors.textHint
        } as TextStyle,
        success: {
          color: theme.colors.success
        } as TextStyle,
        error: {
          color: theme.colors.error
        }
      },
      icon: {
        default: {
          padding,
          position: 'absolute',
          fontSize: iconFontSize
        } as TextStyle,
        theme: {
          color: theme.colors.textSecondary
        } as TextStyle,
        disabled: {
          color: theme.colors.textHint
        } as TextStyle,
        success: {
          color: theme.colors.success
        } as TextStyle,
        error: {
          color: theme.colors.error
        }
      },
      inputContainer: {
        default: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          flexGrow: 0,
          flexBasis: 'auto'
        } as ViewStyle
      }
    };

    /**
     * //Note: caretColor prop is for docs purpose only
     */
    const clonedStyles = Object.assign({}, {...stylesToParse});
    /* istanbul ignore else  */
    if(Platform.OS !== 'web') {
      delete clonedStyles.input.default.caretColor;
    }

    return clonedStyles;
  }, [theme, icon, textInputStyle]);

  const [inputStyle, setInputStyle] = React.useState({
    ...styles.input.default,
    ...styles.input.theme
  });

  const [labelStyle, setLabelStyle] = React.useState({
    ...styles.label.default,
    ...styles.label.theme
  });

  const [helpTextStyle, setHelpTextStyle] = React.useState({
    ...styles.helpText.default,
    ...styles.helpText.theme
  });

  const [secureTextEntry, setSecureTextEntry] = React.useState(type === 'password');


  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const filledStyle = (value || e.nativeEvent.text)
      ? styles.input.themeFilled
      : styles.input.theme;

    setInputStyle({
      ...styles.input.default,
      ...filledStyle
    });

    setLabelStyle({
      ...styles.label.default,
      ...styles.label.theme
    });

    setHelpTextStyle({
      ...styles.helpText.default,
      ...styles.helpText.theme
    });

    /* istanbul ignore else  */
    if(onBlur) {
      onBlur(e);
    }
    textInput.current.blur();
  };

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setInputStyle({
      ...styles.input.default,
      ...styles.input.themeFocus
    });

    setLabelStyle({
      ...styles.label.default,
      ...styles.label.themeFocus
    });

    setHelpTextStyle({
      ...styles.helpText.default,
      ...styles.helpText.themeFocus
    });

    /* istanbul ignore else  */
    if(onFocus) {
      onFocus(e);
    }
    textInput.current.focus();
  };

  const clearInputText = () => {
    textInput.current.clear();
  };

  const handleOnPressIcon = () => {
    if(onIconPress) {
      onIconPress();
      return;
    }
    switch(type) {
      case 'password':
        setSecureTextEntry(!secureTextEntry);
        break;
      case 'search':
        clearInputText();
        break;
      default:
        break;
    }
  };

  const textInput = React.useRef<TextInput>(null);

  const styleStatusMap = {
    error: 'errorStyle',
    success: 'successStyle'
  };

  const parsedInputStyle = React.useCallback((): TextStyle => {
    if(disabled) {
      return {
        ...styles.input.default,
        ...styles.input.disabled,
        ...disabledStyle
      } as TextStyle;
    } else {
      if(status) {
        return {
          ...styles.input.default,
          ...styles.input[status],
          ...props[styleStatusMap[status]]
        };
      } else {
        return {
          ...inputStyle,
          ...textInputStyle
        } as TextStyle;
      }
    }
  },[disabled, disabledStyle, inputStyle, textInputStyle, status, iconProp]);

  const parsedLabelStyle = React.useCallback((): TextStyle => {
    if(disabled) {
      return {
        ...styles.label.default,
        ...styles.label.disabled,
        ...disabledStyle
      } as TextStyle;
    } else {
      if(status) {
        return {
          ...styles.label.default,
          ...styles.label[status],
          ...props[styleStatusMap[status]]
        };
      } else {
        return {
          ...labelStyle,
          ...propLabelStyle
        } as TextStyle;
      }
    }
  },[disabled, disabledStyle, labelStyle, propLabelStyle, status]);

  const parsedHelpTextStyle = React.useCallback((): TextStyle => {
    if(disabled) {
      return {
        ...styles.helpText.default,
        ...styles.helpText.disabled,
        ...disabledStyle
      } as TextStyle;
    } else {
      if(status) {
        return {
          ...styles.helpText.default,
          ...styles.helpText[status],
          ...props[styleStatusMap[status]]
        };
      } else {
        return {
          ...helpTextStyle,
          ...propHelpTextStyle
        } as TextStyle;
      }
    }
  },[disabled, disabledStyle, helpTextStyle, propHelpTextStyle, status]);

  const parsedIconStyle = React.useCallback((): TextStyle => {
    if(disabled) {
      return {
        ...styles.icon.default,
        ...styles.icon.disabled,
        ...disabledStyle
      } as TextStyle;
    } else {
      if(status) {
        return {
          ...styles.icon.default,
          ...styles.icon[status],
          ...props[styleStatusMap[status]]
        };
      } else {
        return {
          ...styles.icon.default,
          ...styles.icon.theme,
          ...propIconStyle
        } as TextStyle;
      }
    }
  },[disabled, disabledStyle, propIconStyle, status, iconProp]);

  /**
   * This is due to the browser complaining about the 'helpText' property on docs
   */
  const textInputProps = Object.assign({}, {...props});
  delete textInputProps.helpText;

  return (
  <TouchableWithoutFeedback onPress={() => textInput.current.focus()}>
    <View style={{flexGrow: 1}}>
      {!!label &&
        <Typography variant="subtitle2" style={parsedLabelStyle()}>
          {`${label}${required ? ' *' : ''}`}
        </Typography>
      }
      <View style={styles.inputContainer.default}>
        <TextInput
          style={parsedInputStyle()}
          {...textInputProps}
          ref={textInput}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
          secureTextEntry={secureTextEntry}
          editable={editable || !disabled}
        />
        {(!!iconProp || type.match(actionTypesMatcher)) &&
          <TouchableWithoutFeedback onPress={handleOnPressIcon} style={{
            flexGrow: 0,
            flexBasis: theme.typography.caption ? theme.typography.caption.fontSize : 14
              + tokens.spacing.spacingMicro
          }}>
            <Icon name={icon} style={parsedIconStyle()} />
          </TouchableWithoutFeedback>
        }
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
      }}>
        {!!status &&
          <Icon
            name={textFieldDefaultIcons[status]}
            style={{
              ...parsedHelpTextStyle(),
              marginRight: tokens.spacing.spacingMicro
            }}
            />
        }
        {!!helpText &&
          <Typography
            variant="caption"
            style={parsedHelpTextStyle()}>
              {helpText}
          </Typography>
        }
      </View>
    </View>
  </TouchableWithoutFeedback>);
};

export default withTheme(TextField);
