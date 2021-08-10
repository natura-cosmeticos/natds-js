import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import Icon from '../../Icon'

export interface RatingSubcomponentProps {
  ariaLabel: string
  iconActive?: boolean
  iconFilled?: boolean
  size?: keyof Size
}

const styles = createUseStyles(({ color }: Theme) => ({
  rating: {
    '& > i': {
      display: 'flex',
      color: ({ iconFilled, iconActive }: RatingSubcomponentProps) => (
        iconFilled && iconActive ? '#F8B546' : color.mediumEmphasis
      )
    }
  }
}))

const Rating = ({
  ariaLabel,
  iconActive = true,
  iconFilled = true,
  size
}: RatingSubcomponentProps): JSX.Element => {
  const { rating } = styles({ iconFilled, iconActive })
  const checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating'

  return (
    <div className={rating}>
      <Icon size={size} name={checkIcon} ariaLabel={ariaLabel} />
    </div>
  )
}

export default Rating
