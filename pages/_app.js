//CAN ONLY import global styles here
import '../styles/globals.css'
import Layout from '../components/Layout'
import React,{useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  }, [])
  
  return(
    <Layout>
        <Component {...pageProps} />
    </Layout>
  ) 
}
