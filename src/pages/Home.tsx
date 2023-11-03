import { Hero } from '../components/home/Hero'   
import { Project } from '../components/home/Project'
import { Message } from '../components/home/Message'
import '../components/home/home.css'
import { AnimatePresence, motion } from 'framer-motion'

export const Home = () => {
  return (
    <AnimatePresence>
    <motion.section
    initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 0.9}}
    exit={{x: -100}}>
        <div className="container">
            <Hero />
            <Project />
            <Message />
        </div>
    </motion.section>
</AnimatePresence>
  )
}
