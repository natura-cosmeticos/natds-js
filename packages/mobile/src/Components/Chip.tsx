import * as React from 'react';
import { Chip as PaperChip, ChipProps, withTheme } from 'react-native-paper';
import { IThemeShape } from 'Provider/IThemeShape';

export interface IChipProps extends Partial<ChipProps> {
  theme: IThemeShape;
}

class Chip extends React.Component<IChipProps> {
  public render(): React.ReactNode {
    const { children, theme } = this.props;
    return (
      <PaperChip {...this.props}  theme={theme} children={children} />
    );
  }
}

export default withTheme(Chip);
