import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo-light.png'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
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
                <div className="detail-item">
                    <p className="bold opac">Designo Central Office</p>
                    <p className="opac">3886 Wellington Street</p>
                    <p className="opac">Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="detail-item">
                    <p className="bold opac">Contact Us (Central Office)</p>
                    <p className="opac">P : +1 253-863-8967</p>
                    <p className="opac">M : contact@designo.co</p>
                </div>
            </div>
            <div className="social">
                <ul role='list'>
                    <li><img src={facebook} alt="soaicl-icon-facebook" role='img' /></li>
                    <li><img src={youtube} alt="soaicl-icon-youtube" role='img' /></li>
                    <li><img src={twitter} alt="soaicl-icon-twitter" role='img' /></li>
                    <li><img src={pinterest} alt="soaicl-icon-pinterest" role='img' /></li>
                    <li><img src={instagram} alt="soaicl-icon-instagram" role='img' /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
