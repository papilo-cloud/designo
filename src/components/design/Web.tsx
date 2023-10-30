import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
import datas from '../../data/graphic.json'


export const Web = () => {
  return (
    <div className='web'>
      <div className="intro">
        <div className="text">
            <h1>Web Design</h1>
            <p>We build websites that serve as powerful marketing tools 
              and bring memorable brand experiences.</p>
        </div>
      </div>
      <div className="content">
          {datas.map(data => 
              <div className="card" key={data.id}>
                  <div className="img">
                      <img src={data.imgUrl} alt={data.heading} />
                  </div>
                  <div className="card-text">
                      <h3>{data.heading}</h3>
                      <p>{data.text}</p>
                  </div>
              </div>
          )}
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
