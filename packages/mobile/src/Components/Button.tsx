import * as React from 'react';
import { Button as PaperButton, ButtonProps, withTheme, Theme } from 'react-native-paper';

export interface IButtonProps extends Partial<ButtonProps> {
  theme: Theme;
}

class Button extends React.Component<IButtonProps> {
  public render(): React.ReactNode {
    const { children } = this.props;

    return (
      <PaperButton {...this.props} children={children} />
    );
  }
}

export default withTheme(Button);
