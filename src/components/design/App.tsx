import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
export const App = () => {
  return (
    <div className='apps'>
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
                <Link to='/graphic'>
                    <div className="design graphic">
                        <div className="design-text">
                            <h2>graphic design</h2>
                            <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
