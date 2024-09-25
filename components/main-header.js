import Link from 'next/link'
import React from 'react'
import LogoImg from '../assets/logo.png'
import classes from './main-header.module.css'

const MainHeader = () => {
  return<>
    <header className={classes.header} >
      <Link href="/" className={classes.logo} >
       <img src={LogoImg.src} alt="Site logo" />
       foodies
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li >
            <Link href="/meals/">BrowseMeal</Link>
          </li>
          <li>
            <Link href="/community/">community</Link>
          </li>
        </ul>
      </nav>
    </header>
   
  </>
  
}

export default MainHeader