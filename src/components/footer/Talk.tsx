import { Link } from 'react-router-dom'
import '../../index.css'


export const Talk = () => {
  return (
      <div className="talk">
          <div className="talk-text">
            <h1 className="title">Let’s talk about your project</h1>
            <p>Ready to take it to the next level? Contact us today
                and find out how our expertise can help your business grow.</p>
          </div>
          <button className='btn btn-light'>
            <Link to='/contact'>get in touch</Link>
          </button>
      </div>
  )
}
 