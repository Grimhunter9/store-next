import Head from "../Html/html"
/******************************************************************/
import Navbar from "../Components/Header/Header"
/******************************************************************/
import '../styles/globals.css'
import "../Components/Header/Header.css"
export default function MyApp({ Component, pageProps }) {

  if (Component.Layout) {
    return Component.Layout(<Component  {...pageProps} />)
  }

  return (
    <div>
      <Head />

      <Navbar />

      <Component {...pageProps} />

    </div>
  )
}
