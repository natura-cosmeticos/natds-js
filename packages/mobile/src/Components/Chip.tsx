import * as React from 'react';
import { Chip as PaperChip, ChipProps, withTheme, Theme } from 'react-native-paper';

export interface IChipProps extends Partial<ChipProps> {
  theme: Theme;
}

class Chip extends React.Component<IChipProps> {
  public render(): React.ReactNode {
    const { children } = this.props;

    return (
      <PaperChip {...this.props} children={children} />
    );
  }
}

export default withTheme(Chip);
