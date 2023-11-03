import { useState } from 'react'
import './contact.css'
import useForm from '../../utilities/useForm'

export const ContactUs = () => {
  const [bool, setBool] = useState(false)

  const email = useForm()
  const phone = useForm()
  const name = useForm()
  const message = useForm()


  function HandleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault()
    if (email.value.trim().length <= 0 && !email.value.includes('@')||(
      name.value.trim().length <=0
    )||(phone.value.trim().length <= 0)||(message.value.trim().length <= 0)) {
      setBool(true)
      setTimeout(() => {
        setBool(false)
      },3000)
    } else{
      alert('Details Submitted')
    }
  }
  return (
    <div className="contact-us">
        <div className="contact-bdy">
          <div className="contact-mesg">
            <div className="text">
              <h1>Contact Us</h1>
              <p>Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow. 
                If you are looking for unique digital experiences that’s relatable
                  to your users, drop us a line.</p>
            </div>
          </div>
          <div className="form-bdy">
          <form onSubmit={HandleSubmit}>
            <div className="label">
              <label>
                <input type="text"
                value={name.value}
                onChange={name.handleChange} placeholder="Name" />
              </label>
              {name.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p>: ''}
            </div>
            <div className="label">
              <label>
                <input
                value={email.value}
                onChange={email.handleChange}
                type="email" placeholder="Email Adress" />
              </label>
              {email.value.trim().length <= 0 && bool ? <p><i>please use a valid email address</i></p>: ''}
            </div>
            <div className="label">
              <label>
                <input type="phone"
                value={phone.value}
                onChange={phone.handleChange}
                 placeholder="Phone" />
              </label>
              {phone.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p>: ''}
            </div>
            <div className="label label1">
              <label>
                <textarea
                  value={message.value}
                  onChange={message.handleChange}  cols={30}  placeholder='Your Message'></textarea>
              </label>
              {message.value.trim().length <= 0 && bool ? <p><i>Can't be empty</i></p>: ''}
            </div>
            <button type='submit' className="btn btn-light">submit</button>
          </form>
          </div>
        </div>
    </div>
  )
}
