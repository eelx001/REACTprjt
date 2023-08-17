import React from 'react'
import './comp.css'
import Pcards from  './cards/pcards'
import {motion} from 'framer-motion'


function page2() {
  return (
    <motion.div  
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      delay: 0.5,
    }}
      >
    <motion.h1 animate={{x:-10,scale:1}}  className='pcards-header'>My Projects</motion.h1>
    
    <Pcards/>
    </motion.div>
  )
}

export default page2