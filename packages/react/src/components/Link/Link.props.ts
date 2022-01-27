export type LinkVariants = 'regular' | 'underline'
export type LinkPositions = 'left' | 'right'
type TextColors = 'default' | 'light'

export interface LinkProps {
  /**
   * Specify an optional className to be added to your Link
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The variant to use.
   */
  variant?: LinkVariants;

  /**
   * Specifies the URL of the page the link goes to.
   */
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>['href'];

  /**
   * Specifies the language of the linked document.
   */
  hrefLang?: React.AnchorHTMLAttributes<HTMLAnchorElement>['hrefLang'];

  /**
   * The text to display inside the link.
   */
  text: string;

  /**
   * The icon to display together with the text.
   */
  textColor?: TextColors;

  /**
   * The target for the link.
   */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];

  /**
   * The position of the icon.
   */
  iconPosition?: LinkPositions;

  /**
   * The icon to display together with the text.
   */
  IconComponent?: React.ReactElement;

}
