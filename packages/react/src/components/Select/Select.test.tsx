import { screen } from '@testing-library/react'
import React from 'react'
import Select from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { OptionProps } from './Select.props'

const options: OptionProps[] = [{
  value: '1',
  label: 'Option 1'
},
{
  value: '2',
  label: 'Option 2'
}]

const onChangeSpy = jest.fn

describe('Select component', () => {
  it('should render correctly with default props', () => {
    const { component } = renderWithTheme(
      <Select label="Label" name="select" options={options} value="" onChange={onChangeSpy} />
    )

    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(2)
    expect(component.container).toMatchSnapshot()
  })

  it('should render helper text', () => {
    renderWithTheme(
      <Select label="Label" name="select" options={options} value="" onChange={onChangeSpy} helperText="Helper text" />
    )

    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  it('should render placeholder', () => {
    renderWithTheme(
      <Select
        label="Label"
        name="select"
        options={options}
        value=""
        onChange={onChangeSpy}
        helperText="Helper text"
        placeholder="Placeholder"
      />
    )

    expect(screen.getByTestId('placeholder-option')).toBeInTheDocument()
  })

  it('should render element with custom style if feedback is success', () => {
    renderWithTheme(
      <Select
        label="Label"
        name="select"
        options={options}
        value=""
        onChange={onChangeSpy}
        helperText="Helper text"
        feedback="success"
      />
    )

    expect(screen.getByTestId('icon-outlined-action-check')).toBeInTheDocument()
  })

  it('should render element with custom style if feedback is error', () => {
    renderWithTheme(
      <Select
        label="Label"
        name="select"
        options={options}
        value=""
        onChange={onChangeSpy}
        helperText="Helper text"
        feedback="error"
      />
    )

    expect(screen.getByTestId('icon-outlined-action-cancel')).toBeInTheDocument()
  })
})
