import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import { tokens } from '@naturacosmeticos/natds-styles';

import { ITextFieldProps, getProp, getBorderByState, stateStyles } from './shared';
import PasswordReveal from './PasswordReveal';
import SearchClear from './SearchClear';
import CustomIcon from './CustomIcon';

export const TEXT_TYPE = 'text';
export const SEARCH_TYPE = 'search';
export const PASSWORD_TYPE = 'password';

const Field: FunctionComponent<ITextFieldProps> = (props: ITextFieldProps) => {
  const {
    id,
    theme,
    required = false,
    disabled = false,
    state,
    multiline,
    mask,
    placeholder = '&nbsp;',
    type,
    onIconPress,
    icon,
    searchIcon,
    showPasswordIcon,
    hidePasswordIcon,
    ...rest
  } = props;

  const fieldType = multiline ? 'textarea' : (mask ? MaskedInput : 'input');
  const [showing, togglePasswordReveal] = useState(false);
  const [value, setValue] = useState("");
  const customType = showing ? TEXT_TYPE : type;
  const showPasswordReveal = type === PASSWORD_TYPE && !icon;
  const showSearchClear = type === SEARCH_TYPE && !icon;

  return (
    <FieldContainer>
      <FieldComponent
        theme={theme}
        id={id}
        type={customType || TEXT_TYPE}
        placeholder={placeholder}
        state={state}
        disabled={disabled}
        required={required}
        as={fieldType}
        value={value}
        mask={mask}
        onChange={(event: any) => setValue(event.target.value)}
        {...rest}
      />
      {showPasswordReveal && <PasswordReveal
        theme={theme}
        showing={showing}
        onTogglePasswordReveal={togglePasswordReveal}
        showPasswordIcon={showPasswordIcon}
        hidePasswordIcon={hidePasswordIcon}
      />}
      {showSearchClear && <SearchClear
        theme={theme}
        onClearSearch={setValue}
        searchIcon={searchIcon}
      />}
      <CustomIcon
        theme={theme}
        icon={icon}
        onIconPress={onIconPress}
      />
    </FieldContainer>
  );
};

export default Field;

const FieldContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`;

export const FieldComponent = styled.input`
  border: 0;
  border-radius: ${getProp('shape', 'borderRadius')}px;
  box-sizing: border-box;
  width: 100%;
  line-height: ${tokens.spacing.spacingStandard}px;
  min-height: ${tokens.spacing.spacingLarge}px;
  outline: none;
  color: ${getProp('palette', 'text', 'primary')};
  font-size: ${getProp('typography', 'body2', 'fontSize')};
  font-weight: ${getProp('typography', 'body2', 'fontWeight')};
  flex: 1 1 100%;
  padding: ${tokens.spacing.spacingSmall}px;
  resize: vertical;

  &:disabled,
  &:disabled:hover {
    color: ${getProp('palette', 'text', 'disabled')};
    box-shadow: ${getProp('palette', 'text', 'disabled')} 0 0 0 1px;
  }

  &::placeholder {
    color: ${getProp('palette', 'text', 'hint')};
  }

  &:disabled::placeholder {
    color: ${getProp('palette', 'text', 'disabled')};
  }

  &:placeholder-shown {
    box-shadow: ${getBorderByState(stateStyles.default)};
  }

  &:not(:placeholder-shown) {
    box-shadow: ${getBorderByState(stateStyles.filled)};
  }

  &:hover:not(:read-only) {
    box-shadow: ${getBorderByState(stateStyles.hover)};
  }

  &:focus:not(:read-only) {
    box-shadow: ${getBorderByState(stateStyles.focus)};
  }
`;
