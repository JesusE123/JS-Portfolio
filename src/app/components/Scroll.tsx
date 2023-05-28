import React from 'react'
import { motion, useScroll } from "framer-motion"

const Scroll = () => {

    const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} /> 
  )
}

export default Scroll