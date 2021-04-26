import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TextFieldProps } from './TextField.props'

type TextFieldStyleProps = Required<TextFieldProps>

const styles = createUseStyles((theme: Theme) => ({
  input: { }
}))

export default styles
