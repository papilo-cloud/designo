import canada from '../../assets/shared/desktop/illustration-canada.svg'
import australia from '../../assets/shared/desktop/illustration-australia.svg'
import london from '../../assets/shared/desktop/illustration-united-kingdom.svg'

export const Location = () => {
  return (
    <div className="main">
        <div className="locations">
            <div className="location">
                <div className="location-img one">
                    <img src={canada} alt="canada-image" />
                </div>
                <div className="text">
                    <h3>canada</h3>
                    <button className='btn btn-dark'>see location</button>
                </div>
            </div>
            <div className="location">
                <div className="location-img two">
                    <img src={australia} alt="australia-image" />
                </div>
                <div className="text">
                    <h3>australia</h3>
                    <button className='btn btn-dark'>see location</button>
                </div>
            </div>
            <div className="location">
                <div className="location-img three">
                    <img src={london} alt="london-image" />
                </div>
                <div className="text">
                    <h3>london</h3>
                    <button className='btn btn-dark'>see location</button>
                </div>
            </div>
        </div>
    </div>
  )
}
