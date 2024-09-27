'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LogoImg from '../../assets/logo.png'
import classes from './main-header.module.css'
import { usePathname } from 'next/navigation'

const MainHeader = () => {
  const pathname = usePathname();

  return<>
    <header className={classes.header} >
      <Link href="/" className={classes.logo} >
      <Image src={LogoImg} alt="Site logo" priority />
       {/* <img src={LogoImg.src} alt="Site logo" /> */}
       foodies
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li >
            <Link href="/meals/" className={pathname.startsWith('/meals') ? classes.active : ''}>BrowseMeal</Link>
          </li>
          <li>
            <Link href="/community/" className={pathname === '/community' ? classes.active : ''}>community</Link>
          </li>
        </ul>
      </nav>
    </header>
   
  </>
  
}

export default MainHeader