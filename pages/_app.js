//CAN ONLY import global styles here
import '../styles/globals.css'
import Layout from '../components/Layout'
import {useState, useEffect} from 'react';


export default function App({ Component, pageProps }) {
  
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
