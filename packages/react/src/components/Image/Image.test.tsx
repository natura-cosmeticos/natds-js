import { fireEvent } from '@testing-library/react'
import * as React from 'react'
import Image from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Image component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Image sourceImage="https://picsum.photos/256" />)

    expect([styles.toString(), component]).toMatchSnapshot()
  })

  it('should render with overlay when highlight is true', () => {
    const { component } = renderWithTheme(<Image highlight sourceImage="https://picsum.photos/256" />)

    expect(component.getByTestId('image-overlay')).toBeInTheDocument()
  })

  it('should render fallback image when image is not loaded', () => {
    const { component } = renderWithTheme(<Image highlight sourceImage="INVALID" fallbackImage="FALLBACK_IMAGE" />)

    const image = component.getByRole('img')

    expect(image).toHaveAttribute('src', 'INVALID')
    fireEvent.error(image)
    expect(image).toHaveAttribute('src', 'FALLBACK_IMAGE')
  })

  it('should render INVALID when fallbackImage is not defined', () => {
    const { component } = renderWithTheme(<Image highlight sourceImage="INVALID" />)

    const image = component.getByRole('img')

    expect(image).toHaveAttribute('src', 'INVALID')
    fireEvent.error(image)
    expect(image).toHaveAttribute('src', 'INVALID')
  })
})
