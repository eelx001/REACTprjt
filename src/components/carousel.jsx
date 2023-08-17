import React from "react"
import {motion} from 'framer-motion'









export default function Indicators() {
  return (
    <>
        <motion.h1     
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.8 }}
        animate={{
          x:-10,duration:1,
          scale: 1,
          rotate: 360,
        }}       
        className="MyName">Hello My name is Mehdi!</motion.h1>
    </>
  )
}


