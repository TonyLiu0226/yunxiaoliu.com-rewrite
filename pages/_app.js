//CAN ONLY import global styles here
import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  const x = Math.random() * 100;
  console.log(x);
  return(
    <Layout var={x}>
      <Component {...pageProps} />
    </Layout>
  ) 
}
