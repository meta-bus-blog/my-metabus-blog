import { Layout } from '@components/index';
import '../styles/globals.scss';
import '../styles/test.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
<Component {...pageProps} />
    </Layout>
}
