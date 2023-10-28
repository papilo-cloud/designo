import { FooterLink } from "./FooterLink"
import { Talk } from "./Talk"
import './footer.css'

export const Footer = () => {
  return (
    <footer>
        <div className="container">
          <Talk />
          <FooterLink />
        </div>
    </footer>
  )
}
