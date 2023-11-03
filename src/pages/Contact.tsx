import { AnimatePresence, motion } from "framer-motion"
import { Location } from "../components/about/Location"
import { ContactUs } from "../components/contact/ContactUs"

export const Contact = () => {
  return (

    <AnimatePresence>
    <motion.section
    initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 0.9}}
    exit={{x: -100}}
    >
        <div className="container">
          <ContactUs />
          <Location />
        </div>
    </motion.section>
  </AnimatePresence>
  )
}
