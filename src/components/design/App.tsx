import { Link } from 'react-router-dom'
import datas from '../../data/graphic.json'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
export const App = () => {
  return (
    <div className='apps'>
        <div className="intro">
            <div className="text">
                <h1>App Design</h1>
                <p>Our mobile designs bring intuitive digital
                     solutions to your customers right at their fingertips..</p>
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
