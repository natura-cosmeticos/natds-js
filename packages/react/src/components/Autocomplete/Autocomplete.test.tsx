import { screen } from '@testing-library/react'
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
    const { styles, component } = renderWithTheme(<Autocomplete options={options}/>)

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
  })
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
