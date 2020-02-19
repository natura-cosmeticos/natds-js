import React, { FunctionComponent, useState, forwardRef } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import { tokens } from '@naturacosmeticos/natds-styles';

import { ITextFieldProps, getProp, getBorderByState, stateStyles, getColorByState } from './shared';
import PasswordReveal from './PasswordReveal';
import SearchClear from './SearchClear';
import CustomIcon from './CustomIcon';

export const TEXT_TYPE = 'text';
export const SEARCH_TYPE = 'search';
export const PASSWORD_TYPE = 'password';

export const Field: FunctionComponent<ITextFieldProps> = forwardRef((
  props: ITextFieldProps,
  ref: any
) => {
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
    onChange,
    className,
    ...rest
  } = props;

  const fieldType = multiline ? 'textarea' : (mask ? MaskedInput : 'input');
  const [showing, togglePasswordReveal] = useState(false);
  const [value, setValue] = useState("");
  const customType = showing ? TEXT_TYPE : type;
  const showPasswordReveal = type === PASSWORD_TYPE && !icon;
  const showSearchClear = type === SEARCH_TYPE && !icon;
  const hasIcon = !!showPasswordReveal || !!showSearchClear || !!icon;

  const handleChange = (event: any) => {
    setValue(event.target.value);
    onChange && onChange(event);
  };

  const clearSearch = (event: any) => {
    setValue('');
    onChange && onChange(event);
  };

  return (
    <FieldContainer theme={theme} disabled={disabled}>
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
        hasIcon={hasIcon}
        className={`${className}__input`}
        mask={mask}
        onChange={handleChange}
        ref={ref}
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
        onClearSearch={clearSearch}
        searchIcon={searchIcon}
      />}
      {icon && <CustomIcon
        theme={theme}
        icon={icon}
        onIconPress={onIconPress}
      />}
    </FieldContainer>
  );
});

export default Field;

const IconPad = `${tokens.spacing.spacingSmall}px ${tokens.spacing.spacingLarge}px ${tokens.spacing.spacingSmall}px ${tokens.spacing.spacingSmall}px`;

const FieldContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  fill: ${getColorByState(stateStyles.filled)};
`;

export const FieldComponent = styled.input`
  background-color: transparent;
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
  font-family: ${getProp('typography', 'fontFamily')};
  flex: 1 1 100%;
  padding: ${({ hasIcon }) => hasIcon ? IconPad : `${tokens.spacing.spacingSmall}px`};
  resize: vertical;

  &:disabled,
  &:disabled:hover {
    color: ${getProp('palette', 'text', 'hint')};
    box-shadow: ${getProp('palette', 'text', 'hint')} 0 0 0 1px;
  }

  &::placeholder {
    color: ${getProp('palette', 'text', 'secondary')};
  }

  &:disabled::placeholder {
    color: ${getProp('palette', 'text', 'hint')};
  }

  &:placeholder-shown {
    box-shadow: ${getBorderByState(stateStyles.default)};
  }

  &:not(:placeholder-shown) {
    box-shadow: ${getBorderByState(stateStyles.filled)};
  }

  &:focus:not(:read-only) {
    box-shadow: ${getBorderByState(stateStyles.focus)};
  }

  &:hover:not(:read-only):not(:disabled):not(:focus) {
    box-shadow: ${getProp('palette', 'text', 'secondary')} 0 0 0 1px;
  }

  &[type="text"]::-ms-clear,
  &[type="text"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;
