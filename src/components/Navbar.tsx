import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo-dark.png'
import hamburger from '../assets/shared/mobile/icon-hamburger.svg'
import './navbar.css'

export const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <div className="header">
                <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
                <nav>
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
                <div className='hamburger'>
                    <button><img src={hamburger} alt="hamburger" /></button>
                </div>
            </div>
        </div>
    </header>
  )
}
