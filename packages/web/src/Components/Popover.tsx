import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/core';
import MaterialPopper, {
  PopperProps as IPopperProps,
} from '@material-ui/core/Popper';

import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import { getDefaultTheme } from './shared';

export interface IPopoverProps extends IPopperProps {
  theme: IThemeWeb | unknown;
  component?: React.ElementType;
}

export const Popover: FunctionComponent<IPopoverProps> = forwardRef(
  (props: IPopoverProps, ref: any) => {
    const {
      children,
      component,
      theme: providerTheme,
      modifiers,
      ...rest
    } = props;
    const theme: any = React.useMemo(() => getDefaultTheme(providerTheme), [
      providerTheme,
    ]);
    const [arrowRef, setArrowRef] = React.useState<HTMLSpanElement | null>(
      null
    );

    return (
      <StyledPopper
        as={component}
        theme={theme}
        ref={ref}
        modifiers={{
          flip: {
            enabled: true,
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'scrollParent',
          },
        }}
        {...rest}
      >
        <span className="arrow" ref={setArrowRef} />
        {children}
      </StyledPopper>
    );
  }
);

export default withTheme(Popover);

const StyledPopper = styled(MaterialPopper)<{ theme: IThemeWeb }>`
  && {
    z-index: 1;
    &[x-placement*='bottom'] .arrow {
      width: 3em;
      height: 1em;
      margin-top: -0.9em;

      &:before {
        border-width: 0 1em 1em 1em;
        border-color: ${({ theme }) =>
          `transparent transparent ${theme.palette.background.paper} transparent`};
      }
    }

    &[x-placement*='top'] .arrow {
      bottom: 0;
      width: 3em;
      height: 1em;
      margin-bottom: -0.9em;

      &:before {
        border-width: 1em 1em 0 1em;
        border-color: ${({ theme }) =>
          `${theme.palette.background.paper} transparent transparent transparent`};
      }
    }

    &[x-placement*='right'] .arrow {
      left: 0;
      width: 1em;
      height: 3em;
      margin-left: -0.9em;

      &:before {
        border-width: 1em 1em 1em 0;
        border-color: ${({ theme }) =>
          `transparent ${theme.palette.background.paper} transparent transparent`};
      }
    }

    &[x-placement*='left'] .arrow {
      right: 0;
      width: 1em;
      height: 3em;
      margin-right: -0.9em;

      &:before {
        border-width: 1em 0 1em 1em;
        border-color: ${({ theme }) =>
          `transparent transparent transparent ${theme.palette.background.paper}`};
      }
    }

    .arrow {
      position: absolute;
      font-size: 7px;
      width: 3em;
      height: 3em;

      &:before {
        content: '';
        margin: auto;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
      }
    }
  }
`;
