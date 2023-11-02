import friendly from '../../assets/home/desktop/illustration-friendly.svg'
import passionate from '../../assets/home/desktop/illustration-passionate.svg'
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg'
import './home.css'


export const Message = () => {
  return (
    <div className="message">
        <div className="mesg-bdy">
            <div className="illustration one" data-aos='zoom-in' data-aos-duration="1000">
                <img src={passionate} alt="illustration-passionate" role="img" />
            </div>
            <div className="text" data-aos='fade-up' data-aos-duration="1000">
                <h3>PASSIONATE</h3>
                <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>                   
            </div>
        </div>
        <div className="mesg-bdy">
            <div className="illustration two" data-aos='zoom-in' data-aos-duration="1000">
                <img src={resourceful} alt="illustration-resourceful" role="img" />
            </div>
            <div className="text" data-aos='fade-up' data-aos-duration="1000">
                <h3>RESOURCEFUL</h3>
                <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
            </div>
        </div>
        <div className="mesg-bdy">
            <div className="illustration three" data-aos='zoom-in' data-aos-duration="1000">
                <img src={friendly} alt="illustration-friendly" role="img" />
            </div>
            <div className="text" data-aos='fade-up' data-aos-duration="1000">
                <h3>FRIENDLY</h3>
                <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
            </div>
        </div>
    </div>
  )
}
