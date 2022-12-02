import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Autocomplete, AutocompleteProps } from '.'
import { OptionProps } from './Autocomplete.props'
import { Theme } from '@naturacosmeticos/natds-themes'
import { useTheme } from 'react-jss'


const componentStatus = `
- - -

**NOTE FOR UXs**: This component is available in the following variants:

  - ✅ Standard

With the following attribute statuses:

  - **Attributes:**
    - ✅ Label
    - ✅ Name
    - ✅ Placeholder
    - ✅ Options
    - ✅ Size
    - ✅ HelperText
    - ✅ Feedback
    - ✅ Required
    - ✅ Disabled

- - -
`

const options: OptionProps[] = [{
  value: '1',
  label: 'Kaiak Masculino'
},
{
  value: '2',
  label: 'Kaiak Aventura'
},
{
  value: '3',
  label: 'Natura Homem'
},
{
  value: '4',
  label: 'Humor a Dois'
},
{
  value: '5',
  label: 'Una Artisan Deo Parfum'
},
{
  value: '6',
  label: 'Essencial Deo Parfum'
},
]

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
} as Meta

export const Playground: Story<AutocompleteProps> = (args) => {
  const theme: Theme = useTheme()
  const [value, setValue] = useState<string | undefined>(options[0].label)
  const [filterOptions, setFilterOptions] = useState<OptionProps[]>(options)

  const handleSelect = (value: OptionProps) =>{
    setValue(value.label)
    // handleChange(value)
  }

  const handleChange = (value: string) => {
    setValue(value)
    const newFilter = options.filter((opt)=> opt.label.toLowerCase().includes(value.toLowerCase()))
    if(newFilter.length > 0){

      setFilterOptions(newFilter)
    }else{
      setFilterOptions(()=>[{value: '0', label: 'Item não encontrado'}])
    }
  }
 return( 
 
  <div style={{
    height: '300px',
    // border: '1px solid yellow', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'start',
    color: theme.color.highEmphasis
    
    }}>

    <Autocomplete  
     {...args}
     placeholder={'Placeholder'} 
     label={'Label' } 
     onChange={(e)=> handleChange(e.target.value) } 
     options={filterOptions} 
     value={value} 
     handleSelect={handleSelect}
     />
  </div>
 )
}

export const WithPlaceholder: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete {...args}  />
  )
}
WithPlaceholder.args = {placeholder:'Placeholder', label:'Label'}

export const WithHelperText: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete {...args} placeholder={'Placeholder'} label={'Label'} helperText="Helper Text" />
  )
}

export const HasSuccess: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete {...args} placeholder={'Placeholder'}  feedback={'success'} label={'Label'} helperText="Helper Text" />
  )
}

export const HasError: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete  {...args} placeholder={'Placeholder'} label={'Label'}  helperText="Helper Text" />
  )
}
HasError.args = {feedback:'error'}

export const Required: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete  {...args} placeholder={'Placeholder'} label={'Label'}/>
  )
}
Required.args = {required:true}

export const ReadOnly: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete  {...args} placeholder={'Placeholder'} label={'Label'}/>
  )
}
ReadOnly.args = {readonly:true}

export const Disabled: Story<AutocompleteProps> = (args) => {
  return(
    <Autocomplete  {...args} placeholder={'Placeholder'} label={'Label'}/>
  )
}
Disabled.args = {disabled:true}



export const Position: Story<AutocompleteProps> = (args) => {
  const theme: Theme = useTheme()
  const [value, setValue] = useState<string | undefined>(options[0].label)
  const [filterOptions, setFilterOptions] = useState<OptionProps[]>(options)

  const handleSelect = (value: OptionProps) =>{
    setValue(value.label)
    // handleChange(value)
  }

  const handleChange = (value: string) => {
    setValue(value)
    const newFilter = options.filter((opt)=> opt.label.toLowerCase().includes(value.toLowerCase()))
    setFilterOptions(newFilter)
    
 
  }
 return( 
 
  <div style={{
    height: '300px',
    // border: '1px solid yellow', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'end',
    color: theme.color.lowEmphasis
    
    }}>

    <Autocomplete  
     {...args}
     placeholder={'Placeholder'} 
     label={'Label' } 
     onChange={(e)=> handleChange(e.target.value) } 
     options={filterOptions} 
     value={value} 
     handleSelect={handleSelect}
     position={'bottom'}
     />
  </div>
 )
}
