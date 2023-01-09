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
      testID,
      className = '',
      position = 'topCenter',
      feedback = 'default',
      directionButton,
      animation = false,
      timer = 10,
      buttonComponent,
      ...rest
    } = props

    const {
      snackbarContainer, wrapper, wrapperRow, wrapperColumm, wrapperAction, bodyText,
      wrapperIcon, show, close
    } = styles({
      position, feedback, directionButton, timer, animation
    })

    const [state, setState] = useState(false)
    useImperativeHandle(ref, () => ({
      show() {
        setState(!state)
        if (animation) {
          setTimeout(() => setState(false), timer * 1000)
        }
      }
    }))

    return (
      <div
        data-timer={timer}
        data-testid={testID}
        className={`${className} ${state ? show : close} ${snackbarContainer}`}
        {...rest}
      >
        <div className={wrapper}>
          <div className={wrapperRow}>
            {
              rest.icon && (
              <div data-testid="icon-item" className={wrapperIcon}>
                {rest.icon}
              </div>
              )
            }
            <div className={wrapperColumm} data-testid="title-item">
              {
                rest.title && <div className={bodyText}>{rest.title}</div>
              }
              <div className={bodyText}>
                {props.children}
              </div>

            </div>
          </div>
          {
            directionButton !== 'none'
            && (
              <div data-testid="btn-action-wrapper" className={wrapperAction}>

                <span data-testid="btn-component">{buttonComponent}</span>

              </div>
            )
}
        </div>
      </div>
    )
  }
)

export default Snackbar
