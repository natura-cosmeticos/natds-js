import * as React from 'react';
import { Chip as PaperChip, ChipProps, withTheme, Theme } from 'react-native-paper';
import { ITheme } from '@naturacosmeticos/natds-styles';
import { ThemeBuilder } from '../Themes/ThemeBuilder';

export interface IChipProps extends Partial<ChipProps> {
  theme: Theme;
}

export interface IChipThemeProps {
  theme?: ITheme;
}

class Chip extends React.Component<IChipProps & IChipThemeProps> {
  public render(): React.ReactNode {
    const { children, theme } = this.props;
    const themeOverride = ThemeBuilder(theme);

    return (
      <PaperChip {...this.props} {...themeOverride} children={children} />
    );
  }
}

export default withTheme(Chip);
