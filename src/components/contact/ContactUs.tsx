import './contact.css'

export const ContactUs = () => {
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
          <form>
            <div className="label">
              <label>
                <input type="text" placeholder="Name" />
              </label>
              <p><i>Can't be empty</i></p>
            </div>
            <div className="label">
              <label>
                <input type="email" placeholder="Email Adress" />
              </label>
              <p><i>please use a valid email address</i></p>
            </div>
            <div className="label">
              <label>
                <input type="phone" placeholder="Phone" />
              </label>
              <p><i>Can't be empty</i></p>
            </div>
            <div className="label label1">
              <label>
                <textarea  cols={30} rows={7} placeholder='Your Message'></textarea>
              </label>
              <p><i>Can't be empty</i></p>
            </div>
            <button className="btn light-btn">submit</button>
          </form>
          </div>
        </div>
    </div>
  )
}
