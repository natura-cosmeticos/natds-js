import {iconNames} from '@naturacosmeticos/natds-icons';
import {IIconSizes} from '@naturacosmeticos/natds-styles';
import {IThemeWeb} from '../../Themes';

export interface IIconProps {
  className?: string;
  name: keyof typeof iconNames;
  size?: keyof IIconSizes;
  theme: IThemeWeb | unknown;
}
