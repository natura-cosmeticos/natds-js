import React from 'react'
import { screen } from '@testing-library/react'
import TabItem from '../TabItem'
import Tab from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const onClick = jest.fn()

describe('Tab component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(
      <Tab>
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with align center', () => {
    const { styles, component } = renderWithTheme(
      <Tab align="center">
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with align right', () => {
    const { styles, component } = renderWithTheme(
      <Tab align="center">
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with elevation is false', () => {
    const { styles, component } = renderWithTheme(
      <Tab elevation={false}>
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with color is false', () => {
    const { styles, component } = renderWithTheme(
      <Tab color={false}>
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with position is scrollable', () => {
    const { styles, component } = renderWithTheme(
      <Tab position="scrollable">
        <TabItem onClick={onClick}>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
      </Tab>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render navigation buttons when position is scrollable', () => {
    renderWithTheme(
      <div style={{ width: '200px' }}>
        <Tab position="scrollable">
          <TabItem onClick={onClick} isActive>
            Tab 1
          </TabItem>
          <TabItem onClick={onClick}>
            Tab 2
          </TabItem>
          <TabItem onClick={onClick}>
            Tab 3
          </TabItem>
          <TabItem onClick={onClick}>
            Tab 4
          </TabItem>
          <TabItem onClick={onClick}>
            Tab 5
          </TabItem>
        </Tab>
      </div>
    )

    const btnPrev = screen.getByTestId('btn-prev')
    const btnNext = screen.getByTestId('btn-next')

    expect(btnPrev).toBeInTheDocument()
    expect(btnNext).toBeInTheDocument()
  })
})
