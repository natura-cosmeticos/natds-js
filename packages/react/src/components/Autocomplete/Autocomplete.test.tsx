import { act, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Autocomplete from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { OptionProps } from './Autocomplete.props'

const options: OptionProps[] = [{
  value: '1',
  label: 'Option 1'
},
{
  value: '2',
  label: 'Option 2'
}]

const onChangeSpy = jest.fn

describe('Autocomplete component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Autocomplete options={options} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render helper text', () => {
    const { component } = renderWithTheme(
      <Autocomplete label="Label" name="select" options={options} value="" onChange={onChangeSpy} helperText="Helper text" />
    )
    const autoComplete = component.getByTestId('input-search')

    userEvent.click(autoComplete)

    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Helper text')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(2)
    const option = component.getByTestId('ul-options')
    option.parentElement?.click()
    expect(option).not.toBeInTheDocument()
  })
  it('should open toggleMenu in onKeydown', () => {
    const { component } = renderWithTheme(
      <Autocomplete label="Label" name="select" options={options} value="" onChange={onChangeSpy} helperText="Helper text" />
    )
    const autoComplete = component.getByTestId('input-search')

    act(() => {
      autoComplete.focus()
      fireEvent.keyDown(autoComplete, {
        key: 'a',
        code: 'keyA',
        keyCode: 65,
        charCode: 65
      })
    })

    expect(screen.getAllByRole('option')).toHaveLength(2)
  })

  it('should render placeholder', () => {
    renderWithTheme(
      <Autocomplete
        label="Label"
        name="Autocomplete"
        options={options}
        value=""
        onChange={onChangeSpy}
        helperText="Helper text"
        placeholder="Placeholder"
      />
    )

    expect(screen.getByTestId('input-search')).toBeInTheDocument()
  })

  it('should render correctly when the variant is contained and disabled is true', () => {
    const { styles, component } = renderWithTheme(<Autocomplete disabled />)

    expect(component.getByTestId('input-search')).toBeDisabled()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is contained and feedback is success', () => {
    const { styles, component } = renderWithTheme(<Autocomplete feedback="success" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is contained and feedback is error', () => {
    const { styles, component } = renderWithTheme(<Autocomplete feedback="error" />)
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
