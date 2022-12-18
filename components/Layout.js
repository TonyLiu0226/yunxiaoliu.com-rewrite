import React from "react"
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

//stuff that should be on EVERY page
const Layout = (props, {children}) => { //children refers to anything inside the component
    return(
        <>
            <Nav />
            <Header var={props.var}/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default Layout