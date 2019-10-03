import React from 'react';

interface IProps {
  labelOn: string;
  labelOff: string;
};

interface IState {
  isChecked: boolean;
};

export class Chip extends React.Component<{
  labelOn: string;
  labelOff: string;
}, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isChecked: false };
  }

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
};
