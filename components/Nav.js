import Link from 'next/link'
import { Navbar } from 'flowbite-react';

const Nav = () => {
    return(
        <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="/YL.png" className="mr-3 h-6 sm:h-9" alt="YL logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          About me
        </Navbar.Link>
        <Navbar.Link as={Link} href="/">
         Work Experience
        </Navbar.Link>
        <Navbar.Link href="/">Projects</Navbar.Link>
        <Navbar.Link href="/">Contact me</Navbar.Link>
        <Navbar.Link href="blog">Blog</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default Nav
