import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { Size, Color } from '@naturacosmeticos/natds-themes'
import renderWithTheme from '../../helpers/renderWithTheme'
import IconButton from '.'
import Icon from '../Icon'
import { IconButtonSize } from './IconButton.props'

type IconButtonTestProps = {
  iconSize?: keyof Size
  iconColor?: keyof Color
  onClick?: () => void
  disabled?: boolean
  testID?: string
  backgroundStyle?: 'none' | 'float' | 'overlay'
  size?: IconButtonSize
}

const renderIconButton = (props: IconButtonTestProps) => {
  const { iconSize = 'standard', iconColor = 'highEmphasis', ...rest } = props

  return (
    <IconButton
      IconComponent={<Icon size={iconSize} name="outlined-default-mockup" color={iconColor as keyof Color} />}
      onClick={() => ({})}
      ariaLabel=""
      {...rest}
    />
  )
}

describe('Icon Button component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(renderIconButton({}))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(renderIconButton({ testID: 'btn-test', onClick: onClickMock }))

    fireEvent.click(getByTestId('btn-test'))

    expect(onClickMock).toHaveBeenCalled()
  })
  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ iconColor: 'mediumEmphasis', disabled: true }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is float', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ backgroundStyle: 'float' }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is float and is disabled', () => {
    const { styles, component } = renderWithTheme(
      renderIconButton({ backgroundStyle: 'float', disabled: true, iconColor: 'mediumEmphasis' })
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is overlay', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ backgroundStyle: 'overlay' }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is overlay and is disabled', () => {
    const { styles, component } = renderWithTheme(
      renderIconButton({ backgroundStyle: 'overlay', disabled: true, iconColor: 'lowEmphasis' })
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is semiX', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ size: 'semiX', iconSize: 'semi' }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is medium', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ size: 'medium', iconSize: 'semiX' }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the color is primary', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ iconColor: 'primary' }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the color is surface', () => {
    const { styles, component } = renderWithTheme(renderIconButton({ iconColor: 'surface' }))

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
