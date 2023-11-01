import { Hero } from "../components/about/Hero"
import { Location } from "../components/about/Location"
import { Talent } from "../components/about/Talent"

export const Company = () => {
  return (
    <section>
        <div className="container">
          <Hero />
          <Talent />
          <Location />
        </div>
    </section>
  )
}
