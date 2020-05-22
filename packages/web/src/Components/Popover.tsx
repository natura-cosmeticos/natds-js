import React, { FunctionComponent, forwardRef } from 'react';
import { PopperPlacementType, withTheme } from '@material-ui/core';
import MaterialPopper, {
  PopperProps as IPopperProps,
} from '@material-ui/core/Popper';

import styled from 'styled-components';
import { IThemeWeb } from 'Themes';
import { getDefaultTheme } from './shared';
import { Paper, Typography, Link, ILinkProps } from '../';

interface IActionLink extends Omit<ILinkProps, 'theme'> {
  text: string;
  href?: string;
  onClick?: any;
}

export interface IPopoverProps extends Omit<IPopperProps, 'placement'> {
  theme: IThemeWeb | unknown;
  component?: React.ElementType;
  actionLink?: IActionLink;
  direction?: PopperPlacementType;
  maxWidth?: number;
}

const getActionLink = (actionLink?: IActionLink) => {
  if (actionLink) {
    const { text, ...props } = actionLink;
    return (
      actionLink && (
        <Link
          {...props}
          variant="body2"
          className="popover-action-link"
        >
          {text}
        </Link>
      )
    );
  }
  return null;
};

export const Popover: FunctionComponent<IPopoverProps> = forwardRef(
  (props: IPopoverProps, ref: any) => {
    const {
      children,
      component,
      theme: providerTheme,
      modifiers,
      actionLink,
      direction = 'bottom',
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
        placement={direction}
        {...rest}
      >
        <span className="arrow" ref={setArrowRef} />
        <Paper elevation={12} variant="elevation" className="popover-container">
          <Typography variant="body2">{children}</Typography>
          {getActionLink(actionLink)}
        </Paper>
      </StyledPopper>
    );
  }
);

export default withTheme(Popover);

const StyledPopper = styled(MaterialPopper)<{ theme: IThemeWeb, maxWidth: number }>`
  && {
    z-index: 1;
    &[x-placement*='bottom'] {
      margin-top: ${({ theme }) => theme.spacing(1)}px;
      & .arrow {
        width: 3em;
        height: 1em;
        margin-top: -0.9em;

        &:before {
          margin-left: 3px;
          border-width: 0 1em 1em 1em;
          border-color: ${({ theme }) =>
            `transparent transparent ${theme.palette.background.paper} transparent`};
        }
      }
    }
    &[x-placement*='top'] {
      margin-bottom: ${({ theme }) => theme.spacing(1)}px;
      & .arrow {
        bottom: 0;
        width: 3em;
        height: 1em;
        margin-bottom: -0.9em;

        &:before {
          margin-left: 3px;
          border-width: 1em 1em 0 1em;
          border-color: ${({ theme }) =>
            `${theme.palette.background.paper} transparent transparent transparent`};
        }
      }
    }
    &[x-placement*='right'] {
      margin-left: ${({ theme }) => theme.spacing(1)}px;
      & .arrow {
        left: 0;
        width: 1em;
        height: 3em;
        margin-left: -0.9em;

        &:before {
          margin-top: 3px;
          border-width: 1em 1em 1em 0;
          border-color: ${({ theme }) =>
            `transparent ${theme.palette.background.paper} transparent transparent`};
        }
      }
    }
    &[x-placement*='left'] {
      margin-right: ${({ theme }) => theme.spacing(1)}px;
      & .arrow {
        right: 0;
        width: 1em;
        height: 3em;
        margin-right: -0.9em;

        &:before {
          margin-top: 3px;
          border-width: 1em 0 1em 1em;
          border-color: ${({ theme }) =>
            `transparent transparent transparent ${theme.palette.background.paper}`};
        }
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

    .popover-container {
      max-width: ${({ maxWidth }) => maxWidth || 380}px;
      padding: ${({ theme }) => theme.spacing(2)}px;
    }

    .popover-action-link {
      display: inline-block;
      padding-top: ${({ theme }) => theme.spacing(1)}px;
    }
  }
`;
