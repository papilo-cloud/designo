import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
import datas from '../../data/web.json'
import './design.css'

export const Web = () => {
  return (
    <div className='container design web'>
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
      <div className="flexex">
        <div className="flex">
          <Link to='/app'>
            <div className="designs app">
                <div className="design-text">
                    <h2>app design</h2>
                    <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                </div>
            </div>
          </Link>
        </div>
        <div className="flex">
              <Link to='/graphic'>
                  <div className="designs graphic">
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
