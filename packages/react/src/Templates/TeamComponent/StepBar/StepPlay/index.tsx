import React from 'react'
import { IconName, icons } from '@naturacosmeticos/natds-icons'
import Icon from '../../../../components/Icon'
import styles from './styles'

interface StepProp {
    iconName: IconName
    labelName: string
    position: string

}
export const checkIcon = (iconName: string): string => (iconName in icons ? iconName : 'outlined-default-mockup')

const StepPlay = React.forwardRef<HTMLDivElement, StepProp>(
  (props, ref) => {
    const { iconName, labelName, position } = props
    const { wrapper, circlo, spanText } = styles({ position })
    return (
      <div className={wrapper} ref={ref}>
        <div className={circlo}>
          <Icon size="standard" name={iconName} color={position === 'true' ? 'onPrimary' : 'highEmphasis'} />
        </div>
        <span className={spanText}>{labelName}</span>
        <Icon size="standard" name="outlined-navigation-arrowleft" color={position === 'true' ? 'highEmphasis' : 'lowEmphasis'} />
      </div>
    )
  }
)
export default StepPlay
