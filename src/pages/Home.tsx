import { Hero } from '../components/home/Hero'   
import { Project } from '../components/home/Project'
import { Message } from '../components/home/Message'
import '../components/home/home.css'
import { AnimatePresence, motion } from 'framer-motion'

export const Home = () => {
  
  const animate = {
    initial:{
      opacity: 0, x: -100
    },
    anime: {opacity: 1, x: 0},
    transition: {
      type: 'tween', ease: 'easeOut' ,duration: 1
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: 'tween', ease: 'easeIn' ,duration: 1, staggerChildren: 0
      }
    }
  }

  return (
    <AnimatePresence>
    <motion.section
    variants={animate}
    initial='initial'
    animate='anime'
    exit='exit'>
        <div className="container">
            <Hero />
            <Project />
            <Message />
        </div>
    </motion.section>
</AnimatePresence>
  )
}
