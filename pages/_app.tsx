import {GlobalStyles, Chakra} from 'styles'
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <GlobalStyles />
      <Component {...pageProps} />
    </Chakra>
  );
};
export default MyApp;
