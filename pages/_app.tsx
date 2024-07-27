// pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CrmProvider } from '../contexts/CrmContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CrmProvider>
      <Component {...pageProps} />
    </CrmProvider>
  );
}

export default MyApp;