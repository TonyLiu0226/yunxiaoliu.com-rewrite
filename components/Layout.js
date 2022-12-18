import React from "react"
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import {useState, useEffect} from 'react';

//stuff that should be on EVERY page
const Layout = ({children}) => { //children refers to anything inside the component
  const [x, setX] = useState(0);
  useEffect(() => {
  setX(Math.random() * 100)
  }, []);
    return(
        <>
            <Nav />
            <Header var={x}/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default Layout