import React, { useImperativeHandle, useState } from 'react'
import styles from './Snackbar.styles'
import { SnackbarProps } from './Snackbar.props'

export type refProp = {
  show: () => void;
};

const Snackbar = React.forwardRef<refProp, SnackbarProps>(
  // eslint-disable-next-line complexity
  (props, ref) => {
    const {
      className = '',
      position = 'topCenter',
      feedback = 'default',
      actionButton,
      timer,
      buttonComponent,
      ...rest
    } = props

    const {
      snackbarContainer, wrapper, wrapperRow, wrapperColumm, wrapperAction, bodyText,
      wrapperIcon, show, close
    } = styles({
      position, feedback, actionButton, timer
    })

    const [state, setState] = useState(false)
    useImperativeHandle(ref, () => ({
      show() {
        setState(!state)
        if (timer) {
          setTimeout(() => {
            setState(false)
          }, timer * 1000)
        }
      }
    }))

    return (
      <div
        className={`${className} ${state ? show : close} ${snackbarContainer}`}
        {...rest}
      >
        {props.children}
        <div className={wrapper}>
          <div className={wrapperRow}>
            {
              rest.icon && (
              <div className={wrapperIcon}>
                {rest.icon}
              </div>
              )
            }
            <div className={wrapperColumm}>
              {
                rest.title && <div className={bodyText}>{rest.title}</div>
              }
              <div className={bodyText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!
              </div>

            </div>
          </div>
          {
            actionButton !== 'none'
            && (
              <div className={wrapperAction}>

                <span>{buttonComponent}</span>

              </div>
            )
}
        </div>
      </div>
    )
  }
)

export default Snackbar
