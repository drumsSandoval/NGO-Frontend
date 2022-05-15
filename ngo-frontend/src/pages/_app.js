import { useEffect, createContext } from 'react';
import App from 'next/app';
import Router from 'next/router';

import { initGA, logPageView } from 'analytics';
import { fetchAPI } from '../lib/api';
import "../assets/css/style.css";
import 'rc-drawer/assets/index.css';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.css';

export const GlobalContext = createContext({});


function CustomApp({ Component, pageProps }) {
    const {global} = pageProps;
  
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <GlobalContext.Provider value={global.attributes}>
    <Component {...pageProps} />
  </GlobalContext.Provider>;
}


CustomApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const globalRes = await fetchAPI('/global', {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      }
    }
  });
  return {
    ...appProps,
    pageProps: { global: globalRes.data }
  }
};

export default CustomApp;
