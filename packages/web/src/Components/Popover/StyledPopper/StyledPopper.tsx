// @todo rewrite to remove dependency from StyledComponents
import styled from "styled-components";
import MaterialPopper from "@material-ui/core/Popper";
import { IStyledPopperProps } from "./StyledPopper.props";

export { IStyledPopperProps } from "./StyledPopper.props";

/**
 * @todo refactor(web): replace magic number 1 by spacing token
 */
const THEME_SPACING_1 = 1;

/**
 * @todo refactor(web): replace magic number 2 by spacing token
 */
const THEME_SPACING_2 = 2;

/**
 * @todo refactor(web): replace magic number 3 by breakpoint or sizing token
 */
const DEFAULT_POPOVER_CONTAINER_MAX_WIDTH = 380;

export const StyledPopper = styled(MaterialPopper)<IStyledPopperProps>`
  && {
    z-index: 1;
    &[x-placement*='bottom'] {
      margin-top: ${({ theme }) => theme.spacing(THEME_SPACING_1)}px;
      & .arrow {
        width: 3em;
        height: 1em;
        margin-top: -0.9em;

        &:before {
          margin-left: 3px;
          border-width: 0 1em 1em 1em;
          border-color: ${({ theme }) => `transparent transparent ${theme.palette.background.paper} transparent`};
        }
      }
    }
    &[x-placement*='top'] {
      margin-bottom: ${({ theme }) => theme.spacing(THEME_SPACING_1)}px;
      & .arrow {
        bottom: 0;
        width: 3em;
        height: 1em;
        margin-bottom: -0.9em;

        &:before {
          margin-left: 3px;
          border-width: 1em 1em 0 1em;
          border-color: ${({ theme }) => `${theme.palette.background.paper} transparent transparent transparent`};
        }
      }
    }
    &[x-placement*='right'] {
      margin-left: ${({ theme }) => theme.spacing(THEME_SPACING_1)}px;
      & .arrow {
        left: 0;
        width: 1em;
        height: 3em;
        margin-left: -0.9em;

        &:before {
          margin-top: 3px;
          border-width: 1em 1em 1em 0;
          border-color: ${({ theme }) => `transparent ${theme.palette.background.paper} transparent transparent`};
        }
      }
    }
    &[x-placement*='left'] {
      margin-right: ${({ theme }) => theme.spacing(THEME_SPACING_1)}px;
      & .arrow {
        right: 0;
        width: 1em;
        height: 3em;
        margin-right: -0.9em;

        &:before {
          margin-top: 3px;
          border-width: 1em 0 1em 1em;
          border-color: ${({ theme }) => `transparent transparent transparent ${theme.palette.background.paper}`};
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
      max-width: ${({ maxWidth }) => maxWidth || DEFAULT_POPOVER_CONTAINER_MAX_WIDTH}px;
      padding: ${({ theme }) => theme.spacing(THEME_SPACING_2)}px;
    }

    .popover-action-link {
      display: inline-block;
      padding-top: ${({ theme }) => theme.spacing(THEME_SPACING_1)}px;
    }
  }
`;

export default StyledPopper;
