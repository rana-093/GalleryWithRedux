import useTheme from "./useTheme";
import useWindowDimensions from "./useWindowDimensions";

const useBreakpoints = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  const desktop = width > theme.breakpointsInt.tablet;
  const mobile = width < theme.breakpointsInt.tablet;

  return { desktop, mobile };
};

export default useBreakpoints;
