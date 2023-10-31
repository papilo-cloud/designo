import { Link } from 'react-router-dom'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
import datas from '../../data/graphic.json'
import './design.css'


export const Graphics = () => {
  return (
    <div className='container graphics design'>
        <div className="intro">
            <div className="text">
                <h1>Graphic Design</h1>
                <p>We deliver eye-catching branding materials that are 
                tailored to meet your business objectives.</p>
            </div>
        </div>
        <div className="content">
            {datas.map(data => 
                <div className="card" key={data.id} data-aos='fade-up' data-aos-duration="1000">
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
            <Link to='/web'>
                <div data-aos='fade-up' data-aos-duration="1000" className="designs web">
                    <div className="design-text">
                        <h2>web design</h2>
                        <h4>view project <img src={arrow} alt="arrow-svg" /> </h4>
                    </div>
                </div>
            </Link>
            </div>
            <div className="flex">
                <Link to='/app'>
                    <div data-aos='fade-up' data-aos-duration="1000" className="designs app">
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
