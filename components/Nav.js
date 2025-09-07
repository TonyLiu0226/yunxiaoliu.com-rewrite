import Link from 'next/link'
import { Navbar } from 'flowbite-react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { getTableBodyUtilityClass } from '@mui/material';


let dark = false;

const Nav = () => {
    return(
        <Navbar fluid rounded className="fixed top-0 left-0 right-0 z-40">
      <Navbar.Brand>
        <img src="/YL.png" className="mr-3 h-6 sm:h-9" alt="YL logo" />
      </Navbar.Brand>
      <Flowbite>
          <DarkThemeToggle />
      </Flowbite>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          About me
        </Navbar.Link>
        <Navbar.Link as={Link} href="/#work-card">
         Work & Education
        </Navbar.Link>
        <Navbar.Link href="/#projects-card">Projects</Navbar.Link>
        <Navbar.Link href="/#courses-card">Courses</Navbar.Link>
        <Navbar.Link href="/#contacts-card">Contact me</Navbar.Link>
        <Navbar.Link href="blog">Blog</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default Nav
