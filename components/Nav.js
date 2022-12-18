import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return(
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/about">About me</Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav
