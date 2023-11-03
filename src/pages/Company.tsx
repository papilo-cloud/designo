import { Deal } from "../components/about/Deal"
import { Hero } from "../components/about/Hero"
import { Location } from "../components/about/Location"
import { Talent } from "../components/about/Talent"
import { AnimatePresence, motion } from "framer-motion";

export const Company = () => {
  return (
    <AnimatePresence>
      <motion.section
      initial={{opacity: 0, x: -100}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.9}}
      exit={{x: -100}}
      >
          <div className="container">
            <Hero />
            <Talent />
            <Location />
            <Deal />
          </div>
      </motion.section>
    </AnimatePresence>
  )
}
