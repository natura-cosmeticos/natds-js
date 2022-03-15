import React from 'react'
import Tag from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { Icon } from '../Icon'
import { TagProps } from './Tag.props'

const tagProps: TagProps = {
  children: 'Design System'
}

describe('Tag component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Tag {...tagProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with different border', () => {
    const { styles, component } = renderWithTheme(<Tag {...tagProps} borderPosition="left" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with different size', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Tag {...tagProps} size="standard" testID="standard-size" />)
    const component = getByTestId('standard-size')

    expect(component).toHaveStyle({ 'min-height': '24px' })
    expect([styles.toString(), component]).toMatchSnapshot()
  })

  it('should render correctly with different color', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Tag {...tagProps} color="success" testID="success-color" />)
    const component = getByTestId('success-color')

    expect(component).toHaveStyle({ 'background-color': '#569a32' })
    expect([styles.toString(), component]).toMatchSnapshot()
  })

  it('should render icon only border position is equal to default', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(
      <Tag testID="icon-render">
        <Icon name="outlined-default-mockup" color="highEmphasis" size="small" />
        Design System
      </Tag>
    )
    const component = getByTestId('icon-render')
    const element = getByTestId('icon-outlined-default-mockup')

    expect(element).toBeTruthy()
    expect([styles.toString(), component]).toMatchSnapshot()
  })
})
