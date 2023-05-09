/* eslint-disable max-len */
import React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import styles from './StepBar.styles'
import StepPlay from './StepPlay'
import { StepBarProps } from './StepBar.props'
import useMedia from '../../hookMedia/useMedia'
import labelText from '../../mocks/labelText'

const StepBar: React.FC<StepBarProps> = (props) => {
  const { dataLabel } = props
  const { mediaOn } = useMedia(780)
  const { container } = styles()
  return (
    <div className={container}>
      {
        dataLabel.map((data) => {
          if (data[1] !== labelText.mycar.title) {
            return (
              <StepPlay iconShow={data[3]} iconName={data[0] as IconName} labelName={!mediaOn ? data[1] : undefined} position={data[2]} />
            )
          }
          return <StepPlay iconShow={data[3]} iconName={data[0] as IconName} labelName={data[1]} position={data[2]} />
        })
      }

    </div>
  )
}

export default StepBar
