import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import classes from '../../styles/SideBar.module.css'
import Link from 'next/link'

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false)

  const sidebarHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <FaIcons.FaBars className={classes.sidebarBar} onClick={sidebarHandler} />
      <nav className={showSidebar ? classes.sidebarActive : classes.sidebar}>
        <ul className={classes.sideMenu} onClick={sidebarHandler} >
          <li className={classes.sidebarToggle}>
            <AiIcons.AiOutlineClose className={classes.closeSide} />
          </li>
          <li className={classes.navText}>
            <Link href='/'>Home</Link>
          </li>
          <li className={classes.navText}>
            <Link href='/about'>About</Link>
          </li>
          <li className={classes.navText}>
            <Link href='/main'>Tool</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar;