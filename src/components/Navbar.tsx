import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo-dark.png'
import hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import './navbar.css'
import { useEffect, useRef, useState } from 'react'

export const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const menuRef = useRef<HTMLElement>(null!)
    const menuRef1 = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        console.log(menu)
        function getTarget(e: any) {
            if (!menuRef.current?.contains(e.target) && !menuRef1.current.contains(e.target)) {
                setMenu(false)
            }
        }
        document.body.addEventListener('click', getTarget )

        return () => document.body.removeEventListener('click', getTarget)
    },[menu])

  return (
    <header>
        <div className='container'>
            <div className="header">
                <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
                <nav className={menu ? 'open': ''} ref={menuRef}>
                    <ul>
                        <li>
                            <Link to='/company'>Our Company</Link>
                        </li>
                        <li>
                            <Link to='/location'>Location</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='hamburger' ref={menuRef1}>
                    <button onClick={() => setMenu(!menu)} ><img src={hamburger} alt="hamburger" /></button>
                </div>
            </div>
        </div>
    </header>
  )
}
