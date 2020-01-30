import * as React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { iconNames } from '@naturacosmeticos/natds-icons';
import { Chip, Icon, Avatar } from '@naturacosmeticos/natds-web';

import ChipDocs from './Chip.docs.mdx';

export default {
  title: 'Components|Chip',
  component: Chip,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Chip'],
    theme: {
      context: 'web'
    },
    docs: {
      page: ChipDocs
    }
  }
};

const avatarSrc: any = {
  image: require('../../assets/images/1.png'),
  anonymous: require('../../assets/images/avatar.png'),
  none: null
};

const colors:any = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default'
};

const variants: any = {
  default: 'default',
  outlined: 'outlined'
};

const sizes: any = {
  small: 'small',
  medium: 'medium'
};

const icons: any = Object.keys(iconNames);
const deleteIcons: any = [undefined, ...icons];

export const Default = () => {
  const label = text('label', 'Chip Component');
  const color = select('colors', colors, colors.default);
  const variant = select('variant', variants, variants.default);
  const size = select('size', sizes, sizes.medium);
  const clickable = boolean('clickable', true);
  const disabled = boolean('disabled', false);
  const deletable = boolean('deletable', false);
  const onDelete = deletable ? () => undefined : undefined;
  const deleteIconPresence = deletable 
    ? select('deleteIcon', deleteIcons, deleteIcons[0])
    : undefined;
  const deleteIcon = deleteIconPresence 
    ? <Icon name={select('deleteIcon', icons, icons[0])} /> 
    : undefined;
  const withAvatar = boolean('show avatar', false);
  const withIcon = !withAvatar && boolean('show icon', false);
  const avatar = withAvatar ? <Avatar
    src={select('avatar source', avatarSrc, avatarSrc.image)}
    children={text('avatar text', 'XD')}
  /> : undefined;
  const icon = !withAvatar && withIcon 
    ? <Icon name={select('icon', icons, icons[0])} /> 
    : undefined;

  return (
     <Chip
      label={label}
      color={color}
      variant={variant}
      size={size}
      clickable={clickable}
      disabled={disabled}
      onDelete={onDelete}
      deleteIcon={deleteIcon}
      avatar={avatar}
      icon={icon}
    />
  );
};
