import React from 'react'

export interface MenuItemProps {
  /**
   * Specify an optional className to be added to your MenuItem
   */
  children: React.ReactNode

  /**
   * Specify an optional className to be added to your MenuItem
   */
  className?: string

  /**
   * Click handler
   */
  onClick?: (e?: React.MouseEvent<HTMLLIElement>) => void

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Specify whether the MenuItem should be disabled, or not
   * @default true
   */
  disabled?: boolean;

  /**
   * Used to show for the user the current selected menu.
   * If `true`, the primary color will be applied on background
   * @default false
   */
  selected?: boolean;

  /**
   * Used to show for the user the parent menu activated.
   * If `true`, a low emphasis color will be applied on background
   * @default false
   */
  activated?: boolean;

  /**
   * If `true`, a border will be displayed on the left of the container.
   * @default false
   */
  submenu?: boolean;

  /** The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: React.AnchorHTMLAttributes<HTMLAnchorElement>['href']

  /**
   * Specifies the language of the linked document.
   */
  hrefLang?: React.AnchorHTMLAttributes<HTMLAnchorElement>['hrefLang']
}
