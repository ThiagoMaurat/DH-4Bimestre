// ** Next Imports
import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// ** Emotion Imports
import { CacheProvider } from "@emotion/react";
import type { EmotionCache } from "@emotion/cache";

// ** Config Imports
import themeConfig from "../../src/configs/theme";

// ** Global css styles
import "../styles/globals.css";
import createEmotionCache from "../../utils/createEmotionCache";
import { ThemeProvider } from "@mui/system";

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <>
        <Head>
          <title>{`Aula 14`}</title>
          <meta name="description" content={`Aula 14`} />
          <meta
            name="keywords"
            content="Material Design, MUI, Admin Template, React Admin Template"
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider theme={themeConfig}>
          {<Component {...pageProps} />}
        </ThemeProvider>
      </>
    </CacheProvider>
  );
};

export default App;
