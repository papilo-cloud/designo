import { AnimatePresence, motion } from "framer-motion"
import { Location } from "../components/about/Location"
import { ContactUs } from "../components/contact/ContactUs"

export const Contact = () => {

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
    exit='exit'
    >
        <div className="container">
          <ContactUs />
          <Location />
        </div>
    </motion.section>
  </AnimatePresence>
  )
}
