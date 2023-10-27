import { Hero } from '../components/home/Hero'   
import './home.css'                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { Project } from '../components/home/Project'

export const Home = () => {
  return (
    <section>
        <div className="container">
          <div className="home">
            <Hero />
            <Project />
          </div>
        </div>
    </section>
  )
}
