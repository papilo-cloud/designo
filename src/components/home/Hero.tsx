import hero from '../../assets/home/desktop/image-hero-phone.png'
import './home.css'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="mesg">
            <div className='text-mesg'>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <h3>With over 10 years in the industry, we are experienced
               in creating fully responsive websites, app design, and engaging brand 
               experiences. Find out more about our services.</h3>
              <button className='btn btn-light'>
                learn more
              </button>
            </div>
        </div>
        <div className="img">
            <img src={hero} alt="hero-background"  />
        </div>
    </div>
  )
}