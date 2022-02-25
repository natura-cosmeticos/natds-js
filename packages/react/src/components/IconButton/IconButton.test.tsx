import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import { IconButtonProps } from './IconButton.props'
import IconButton from '.'
import Icon from '../Icon'

const iconButtonProps: IconButtonProps = {
  IconComponent: <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />,
  onClick: () => '',
  ariaLabel: ''
}

describe('Icon Button component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<IconButton {...iconButtonProps} onClick={onClickMock} testID="btn-test" />)

    fireEvent.click(getByTestId('btn-test'))

    expect(onClickMock).toHaveBeenCalled()
  })
  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        disabled
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="mediumEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is float', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        backgroundStyle="float"
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is float and is disabled', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        backgroundStyle="float"
        disabled
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="mediumEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is overlay', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        backgroundStyle="overlay"
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is overlay and is disabled', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        backgroundStyle="overlay"
        disabled
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="lowEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is semiX', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        size="semiX"
        IconComponent={<Icon size="semi" name="outlined-default-mockup" color="highEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is medium', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        size="medium"
        IconComponent={<Icon size="semiX" name="outlined-default-mockup" color="highEmphasis" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the color is primary', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="primary" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the color is surface', () => {
    const { styles, component } = renderWithTheme(
      <IconButton
        {...iconButtonProps}
        IconComponent={<Icon size="standard" name="outlined-default-mockup" color="surface" />}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
