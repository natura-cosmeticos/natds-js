import React from 'react';
import PropTypes from 'prop-types';
import { Chip as PaperChip } from 'react-native-paper';

const Chip = ({
  mode,
  children,
  icon,
  avatar,
  selected,
  selectedColor,
  disabled,
  accessibilityLabel,
  onPress,
  onLongPress,
  onClose,
  textStyle,
  style,
  theme,
  testID,
  ...other
}: any) => {
  return (
    <PaperChip
      mode={mode}
      selected={selected}
      icon={icon}
      avatar={avatar}
      selectedColor={selectedColor}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      textStyle={textStyle}
      style={style}
      theme={theme}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      onClose={onClose}
      {...other}
    >
      {children}
    </PaperChip>
  );
};

Chip.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.any,
  avatar: PropTypes.node,
  selected: PropTypes.bool,
  selectedColor: PropTypes.string,
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  textStyle: PropTypes.any,
  style: PropTypes.any,
  theme: PropTypes.any,
  testID: PropTypes.string,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onClose: PropTypes.func,
};

Chip.defaultProps = {
  mode: 'flat',
  children: 'Chip',
  icon: '',
  avatar: '',
  selected: false,
  selectedColor: '',
  disabled: false,
  accessibilityLabel: '',
  textStyle: '',
  style: '',
  theme: '',
  testID: '',
  onPress: () => {},
  onLongPress: () => {},
  onClose: () => {},
};

export default Chip;
