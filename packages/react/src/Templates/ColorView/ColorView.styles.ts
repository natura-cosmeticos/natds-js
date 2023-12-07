/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Color, Theme } from '@naturacosmeticos/natds-themes'

export type ColorViewColors = keyof Color

type PropsColorView = {
    labelToken: ColorViewColors;
}
export const getColor = (theme: Theme) => ({ labelToken }: PropsColorView): string => theme.color[labelToken]

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    width: '240px',
    height: '40px',
    padding: '5px',
    alignContent: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    backgroundColor: getColor(theme)
  },
  colorText: {
    color: theme.color.highEmphasis
  }
}))

export default styles
