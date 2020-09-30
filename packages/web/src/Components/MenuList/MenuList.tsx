import * as React from "react";
import MaterialMenuList from "@material-ui/core/MenuList";
import { IMenuListProps } from "./MenuList.props";

export { IMenuListProps } from "./MenuList.props";

/**
 *  ## Importing
 *
 * ```
 * import { MenuList } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @constructor
 * @param {IMenuListProps} props Properties for MenuList component
 * @todo Fix missing color contrast for selected items on Avon Light theme
 */
export const MenuList : React.FunctionComponent<IMenuListProps> = (props: IMenuListProps) => <MaterialMenuList {...props} />;
MenuList.displayName = "MenuList";

export default MenuList;
