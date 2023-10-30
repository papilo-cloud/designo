import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'


export const Graphics = () => {
  return (
    <div className='graphics'>
        <div className="content">
            
        </div>
        <div className="flex">
            <div className="flex1">
            <Link to='/web'>
                <div className="design web">
                    <div className="design-text">
                        <h2>web design</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
        </div>
        <div className="flex2">
            <Link to='/app'>
                <div className="design app">
                    <div className="design-text">
                        <h2>app design</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
        </div>
        </div>
        
    </div>
  )
}
