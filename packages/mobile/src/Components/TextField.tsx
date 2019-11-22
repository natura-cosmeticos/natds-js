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
/**
 * // TODO: Replace the import below to our Icon component
 */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ITextFieldProps extends TextInputProps {
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
   * Style to use when `editable` is set to `false`
   */
  disabledStyle?: TextStyle;
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
    disabledStyle,
    value,
    status,
    icon,
    iconStyle: propIconStyle
  } = props;

  const theme = providerTheme !== DefaultTheme
    ? providerTheme
    : buildTheme(themes.natura.light, themes.natura.light);

  const placeholderTextColor = propPlaceholderTextColor
  ? propPlaceholderTextColor
  : theme.colors.textHint;

  const selectionColor = propSelectionColor
  ? propSelectionColor
  : theme.colors.primary;

  const iconFontSize = theme.typography.body1
    ? theme.typography.body1.fontSize
    : 16;

  const styles = React.useMemo(() => {
    const stylesToParse = {
      input: {
        default: {
          borderRadius: theme.roundness,
          padding: theme.spacing ? theme.spacing : 8,
          paddingRight: ((theme.spacing ? theme.spacing : 8)
            * (icon ? 2 : 0))
            + (icon ? iconFontSize : 0),
          width: '100%',
          color: theme.colors.text,
          flex: 1,
          caretColor: selectionColor,
          fontSize: theme.typography.body2 ? theme.typography.body2.fontSize : 14
        } as TextStyle & { caretColor: string; },
        theme: {
          shadowColor: theme.colors.textHint,
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 1
        } as TextStyle,
        themeFocus: {
          shadowColor: theme.colors.primary,
          shadowOpacity: 1,
          shadowRadius: 4,
          elevation: 2
        } as TextStyle,
        themeFilled: {
          shadowColor: theme.colors.text,
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 1
        } as TextStyle,
        disabled: {
          color: theme.colors.textHint,
          shadowColor: theme.colors.textHint,
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 1
        } as TextStyle,
        success: {
          shadowColor: theme.colors.success,
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 1
        } as TextStyle,
        error: {
          shadowColor: theme.colors.error,
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 1
        } as TextStyle
      },
      label: {
        default: {
          marginBottom: 2
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
          marginTop: 1
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
          padding: theme.spacing ? theme.spacing : 8,
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
          position: 'relative'
        } as ViewStyle
      }
    };

    /**
     * //Note: caretColor prop is for docs purpose only
     */
    const clonedStyles = Object.assign({}, {...stylesToParse});
    if(Platform.OS !== 'web') {
      delete clonedStyles.input.default.caretColor;
    }

    return clonedStyles;
  }, [theme]);

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

    if(onFocus) {
      onFocus(e);
    }
    textInput.current.focus();
  };

  const textInput = React.useRef(null);

  const styleStatusMap = {
    error: 'errorStyle',
    success: 'successStyle'
  };

  const parsedInputStyle = React.useCallback((): TextStyle => {
    if(!editable) {
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
  },[editable, disabledStyle, inputStyle, textInputStyle, status, icon]);

  const parsedLabelStyle = React.useCallback((): TextStyle => {
    if(!editable) {
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
  },[editable, disabledStyle, labelStyle, propLabelStyle, status]);

  const parsedHelpTextStyle = React.useCallback((): TextStyle => {
    if(!editable) {
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
  },[editable, disabledStyle, helpTextStyle, propHelpTextStyle, status]);

  const parseIconStyle = React.useCallback((): TextStyle => {
    if(!editable) {
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
  },[editable, disabledStyle, propIconStyle, status, icon]);

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
          ref={textInput}
          {...textInputProps}
          style={parsedInputStyle()}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
        />
        {!!icon &&  <Icon name={icon} style={parseIconStyle()} />}
      </View>
      {!!helpText &&
        <Typography
          variant="caption"
          style={parsedHelpTextStyle()}>
            {helpText}
        </Typography>
      }
    </View>
  </TouchableWithoutFeedback>);
};

export default withTheme(TextField);
