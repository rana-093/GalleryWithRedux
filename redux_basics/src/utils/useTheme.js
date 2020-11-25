import { useContext } from "react";
import { ThemeContext } from "styled-components";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  // console.log("Current theme: ", themeContext);
  return themeContext;
};

export default useTheme;
