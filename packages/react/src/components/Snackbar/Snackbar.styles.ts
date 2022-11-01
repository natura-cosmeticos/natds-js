/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

type VariantTypes = 'info' | 'success' | 'error' | 'warning' | 'custom'
type BorderTypes = 'contained' | 'outlined'

type StyleProps = {
  backgroundColor: VariantTypes
  verticalButton: boolean
  customTextColor: string
}

const setBaseStyle = () => ({
  backgroundColor
}: StyleProps) => {
  const variantStyle = {
    info: {
      background: '#D0EBFF',
    },
    success: {
      background: '#D3F9D8',
    },
    error: {
      background: '#FFE3E3',
    },
    warning: {
      background: '#FFF3BF',
    },
    custom: {
      background: backgroundColor
    }
  }

  return variantStyle[backgroundColor]
}

const styles = createUseStyles((theme: Theme) => ({
  viewContainer: (props: StyleProps) => ({
    // ...setBaseStyle()(props),
    display: 'flex',
    flexDirection: !!props.verticalButton ? 'column' : 'row',
  }),
  verticalButtonView: (props: StyleProps) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: !!props.verticalButton ? 8 : 0,
    alignItems: 'center'
  }),
  container: (props: StyleProps) => ({
    ...setBaseStyle()(props),
    display: 'flex',
    flexDirection: 'row',
    borderRadius: theme.snackbar.borderRadius,
  }),
}))

export default styles
