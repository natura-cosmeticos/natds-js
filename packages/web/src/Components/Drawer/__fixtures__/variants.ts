import { IDrawerProps } from "../Drawer.props";

export const variants: Record<IDrawerProps["variant"], IDrawerProps["variant"]> = {
  permanent: "permanent",
  persistent: "persistent",
  temporary: "temporary",
};

export default variants;
