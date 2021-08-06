import React from 'react'
import { RadioProps } from './Radio.props'
import Ripple from '../Ripple'
import { Label } from '../_subcomponents/Label'
import styles from './Radio.styles'

const Radio = ({
  checked = false,
  disabled = false,
  id,
  labelText,
  name,
  onBlur,
  onChange,
  onFocus,
  ref,
  required = false,
  testID = `ds-radio-${id}`,
  value
}: RadioProps): JSX.Element => {
  const { radio, wrapper, container } = styles({ disabled })

  const getRippleColor = checked && !disabled ? 'primary' : 'highlight'

  return (
    <div className={container}>
      <Ripple
        isCentered
        hideOverflow={false}
        disabled={disabled}
        color={getRippleColor}
        animationDuration={500}
        showHover
        focus
      >
        <div className={wrapper} ref={ref}>
          <input
            checked={checked}
            className={radio}
            data-testid={testID}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            type="radio"
            value={value}
            required={required}
          />
        </div>
      </Ripple>
      {labelText && <Label text={labelText} disabled={disabled} />}
    </div>
  )
}

export default Radio
