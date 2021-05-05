import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import { IconButtonProps } from './IconButton.props'
import IconButton from '.'
import { checkIconColor, getIconSize } from './IconButton'

const iconButtonProps: IconButtonProps = {
  iconName: 'outlined-default-mockup',
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
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is float', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} backgroundStyle="float" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is float and is disabled', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} backgroundStyle="float" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is overlay', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} backgroundStyle="overlay" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the backgroundStyle is overlay and is disabled', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} backgroundStyle="overlay" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is semiX', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} size="semiX" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is medium', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the color is primary', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} color="primary" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the color is surface', () => {
    const { styles, component } = renderWithTheme(<IconButton {...iconButtonProps} color="surface" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})

describe('getIconSize', () => {
  it('should return semiX as icon size', () => {
    expect(getIconSize('medium')).toBe('semiX')
  })
  it('should return semi as icon size', () => {
    expect(getIconSize('semiX')).toBe('semi')
  })
  it('should return standard as icon size', () => {
    expect(getIconSize('semi')).toBe('standard')
  })
})

describe('checkIconColor', () => {
  it('should return the given color when is not disabled', () => {
    expect(checkIconColor('none', false, 'primary')).toBe('primary')
  })
  it('should return the mediumEmphasis color when is disabled and have backgroundStyle as none', () => {
    expect(checkIconColor('none', true, 'primary')).toBe('mediumEmphasis')
  })
  it('should return the mediumEmphasis color when is disabled and have backgroundStyle as float', () => {
    expect(checkIconColor('float', true, 'primary')).toBe('mediumEmphasis')
  })
  it('should return the mediumEmphasis color when is disabled and have backgroundStyle as overlay', () => {
    expect(checkIconColor('overlay', true, 'primary')).toBe('lowEmphasis')
  })
})
