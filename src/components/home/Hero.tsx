import hero from '../../assets/home/desktop/bg-pattern-hero-home.svg'
import './home.css'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="mesg">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <h3></h3>
        </div>
        <div className="img">
            {/* <img src={hero} alt="hero-background" role='img' /> */}
        </div>
    </div>
  )
}
