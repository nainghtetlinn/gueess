import { Provider } from 'react-redux'

import configureAppStore from '../store/configureStore'

import '../styles/globals.css'
import Layout from '../components/Layout'

const store = configureAppStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
