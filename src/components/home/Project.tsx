import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
import './home.css'
export const Project = () => {
  return (
    <div className='project'>
        <div className="flex1 flex">
            <Link to='/web'>
                <div data-aos='fade-up' data-aos-duration="1000" className="designn web">
                    <div className="design-text">
                        <h2>web design</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
        </div> 
        <div className="flex2 flex">
            <Link to='/app'>
                <div data-aos='fade-up' data-aos-duration="1000" className="designn app">
                    <div className="design-text">
                        <h2>app design</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
            <Link to='/graphic'>
                <div data-aos='fade-up' data-aos-duration="1000" className="designn graphic">
                    <div className="design-text">
                        <h2>graphic design</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}
 