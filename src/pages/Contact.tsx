import { Location } from "../components/about/Location"
import { ContactUs } from "../components/contact/ContactUs"

export const Contact = () => {
  return (
    <section>
        <div  className="container">
          <ContactUs />
          <Location />
        </div>
    </section>
  )
}
