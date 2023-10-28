import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-light.png'
// import '../../index.css'
import './footer.css'


export const FooterLink = () => {
  return (
    <div className="footer-link">
        <div className="top">
            <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
            <nav className='open'>
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
        </div>
    </div>
  )
}
