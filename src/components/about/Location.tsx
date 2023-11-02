import canada from '../../assets/shared/desktop/illustration-canada.svg'
import australia from '../../assets/shared/desktop/illustration-australia.svg'
import london from '../../assets/shared/desktop/illustration-united-kingdom.svg'
import { Link } from 'react-router-dom'

export const Location = () => {
  return (
    <div className="main">
        <div className="locations">
            <div className="location">
                <div className="location-img one" data-aos='zoom-in' data-aos-duration="1000">
                    <img src={canada} alt="canada-image" />
                </div>
                <div className="text" data-aos='fade-up' data-aos-duration="1000">
                    <h3>canada</h3>
                    <button className='btn btn-dark'>
                        <Link to='/location'>see location</Link>
                    </button>
                </div>
            </div>
            <div className="location">
                <div className="location-img two" data-aos='zoom-in' data-aos-duration="1000">
                    <img src={australia} alt="australia-image" />
                </div>
                <div className="text" data-aos='fade-up' data-aos-duration="1000">
                    <h3>australia</h3>
                    <button className='btn btn-dark'>
                        <Link to='/location'>see location</Link>
                    </button>
                </div>
            </div>
            <div className="location">
                <div className="location-img three" data-aos='zoom-in' data-aos-duration="1000">
                    <img src={london} alt="london-image" />
                </div>
                <div className="text" data-aos='fade-up' data-aos-duration="1000">
                    <h3>london</h3>
                    <button className='btn btn-dark'>
                        <Link to='/location'>see location</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
