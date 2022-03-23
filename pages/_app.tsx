import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'

import client from '../config/apolloClient'
import '../styles/normalize.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Wars App</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
