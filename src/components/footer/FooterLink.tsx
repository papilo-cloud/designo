import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-light.png'
// import '../../index.css'
import './footer.css'


export const FooterLink = () => {
  return (
    <div className="footer-link">
        <div className="list">
            <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
            <nav className='link'>
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
        <div className="details">
            <div className="detail">
                <div className="details-location">
                    <p className="bold opac">Designo Central Office</p>
                    <p className="opac">3886 Wellington Street</p>
                    <p className="opac">Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="details-contact">
                    <p className="bold opac">Contact Us (Central Office)</p>
                    <p className="bold opac">P : +1 253-863-8967</p>
                    <p className="bold opac">M : contact@designo.co</p>
                </div>
            </div>
            <div className="details-social">
                <span className="social-icon social-icon-facebook"></span>
                <span className="social-icon social-icon-youtube"></span>
                <span className="social-icon social-icon-twitter"></span>
                <span className="social-icon social-icon-pinterest"></span>
                <span className="social-icon social-icon-insta"></span>
            </div>
        </div>
    </div>
  )
}
