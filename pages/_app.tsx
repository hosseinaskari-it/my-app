import GlobalStyle from "../styles/global";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import useDarkTheme from "../utils/hooks/useDarkTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
