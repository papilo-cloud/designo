import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-dark.png'
import hamburger from '../../assets/shared/mobile/icon-hamburger.svg'
import close from '../../assets/shared/mobile/icon-close.svg'
import './navbar.css'
import { useEffect, useRef, useState } from 'react'

export const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const menuRef = useRef<HTMLUListElement>(null!)
    const menuRef1 = useRef<HTMLDivElement>(null!)
    const headRef = useRef<HTMLHeadElement>(null!)

    useEffect(() => {
        let position = window.scrollY
        function scrollHeaderIntoView() {
            let currentPosition = window.scrollY;
            if ( position > currentPosition) {
                headRef.current.style.top = '0';
            } else {
                headRef.current.style.top = '-100px';
            }
            headRef.current.style.transition = '.3s'
            position = currentPosition;
        }
        window.addEventListener('scroll',scrollHeaderIntoView)
        return () => window.removeEventListener('scroll', scrollHeaderIntoView)

    }, [])

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset' 
        }
        function getTarget(e: any) {
            if (!menuRef.current?.contains(e.target) && !menuRef1.current.contains(e.target)) {
                setMenu(false)
            }
        }
        document.body.addEventListener('click', getTarget )

        return () => document.body.removeEventListener('click', getTarget)
    },[menu])

  return ( 
    <header ref={headRef}>
        <div className='container'>
            <div className="header">
                <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
                <nav className={menu ? 'open': ''}>
                    <ul ref={menuRef}>
                        <li onClick={() => setMenu(!menu)}>
                            <Link to='/company'>Our Company</Link>
                        </li>
                        <li onClick={() => setMenu(!menu)}>
                            <Link to='/location'>Location</Link>
                        </li>
                        <li onClick={() => setMenu(!menu)}>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='hamburger' ref={menuRef1}>
                    <button onClick={() => setMenu(!menu)} >
                        {menu ? <img src={close} alt="close" role='img'/>:
                        <img src={hamburger} alt="hamburger" role='img'/>}
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}
