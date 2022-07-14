import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import { FlagsmithProvider } from 'flagsmith/react';
import flagsmith from 'flagsmith/isomorphic';

function MyApp({ Component, pageProps, flagsmithState }) {
  return (
    <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
     <Component {...pageProps} />
    </FlagsmithProvider>
   );
}

MyApp.getInitialProps = async () => {
  await flagsmith.init({
   environmentID:'<YOUR_ENVIRONMENT_ID>',
  });
  return { flagsmithState: flagsmith.getState() };
 };

export default appWithTranslation(MyApp, nextI18NextConfig)
