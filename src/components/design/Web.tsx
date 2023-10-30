import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'


export const Web = () => {
  return (
    <div className='web'>
      <div className="content">
            
      </div>
      <div className="flex">
        <div className="flex1">
          <Link to='/app'>
            <div className="design app">
                <div className="design-text">
                    <h2>app design</h2>
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
