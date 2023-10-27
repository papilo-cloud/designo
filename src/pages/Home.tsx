import { Hero } from '../components/home/Hero'   
import './home.css'                                                                                                                                                                                                                                                                                                                                                                                                                                        
import { Project } from '../components/home/Project'
import { Message } from '../components/home/Message'

export const Home = () => {
  return (
    <section>
        <div className="container">
            <Hero />
            <Project />
            <Message />
        </div>
    </section>
  )
}
