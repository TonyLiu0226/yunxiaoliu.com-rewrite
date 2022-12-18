import React from "react"
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => { //children refers to anything inside the component
    return(
            <main className={styles.main}>
                {children}
            </main>
        
    )
}

export default Layout