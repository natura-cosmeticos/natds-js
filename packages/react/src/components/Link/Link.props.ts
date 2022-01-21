export type LinkVariants = 'regular' | 'underline'

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
   * The target for the link.
   */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}
