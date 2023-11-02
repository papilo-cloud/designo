import { Hero } from '../components/home/Hero'   
import { Project } from '../components/home/Project'
import { Message } from '../components/home/Message'
import '../components/home/home.css'

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
