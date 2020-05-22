import * as React from 'react';
import MaterialAlert, { AlertProps as MaterialAlertProps } from '@material-ui/lab/Alert';
import { withTheme } from '@material-ui/core/styles';
import Icon from './Icon';

export { AlertProps as IAlertProps } from '@material-ui/lab/Alert';

export const Alert: React.FunctionComponent<MaterialAlertProps> = React.forwardRef((
  props: MaterialAlertProps,
  ref: any
) => {
  const { iconMapping } = props;

  const defaultIconMapping: typeof iconMapping = React.useMemo(() => {
    return {
      success: <Icon name="outlined-alert-check" size="tiny" />,
      info: <Icon name="outlined-alert-info" size="tiny" />,
      warning: <Icon name="outlined-alert-warning" size="tiny" />,
      error: <Icon name="outlined-alert-cancel" size="tiny" />,
      ...iconMapping
    };
  }, [iconMapping]);

  return <MaterialAlert {...props} iconMapping={defaultIconMapping} ref={ref} />;
});

export default withTheme(Alert);
