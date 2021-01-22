import useTheme from "@material-ui/core/styles/useTheme";
import { ITheme } from "@naturacosmeticos/natds-styles";

export const useDefaultTheme = () => {
  const providerTheme = useTheme<ITheme>();

  return providerTheme;
};

export default useDefaultTheme;
