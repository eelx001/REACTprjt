import React from 'react'
import './comp.css'
import Pcards from  './cards/pcards'
import {motion} from 'framer-motion'


function page2() {
  return (
    <>
    <motion.h1 animate={{x:-10,scale:1}}  className='pcards-header'>My Projects</motion.h1>
    <br/>
    <Pcards/>
    </>
  )
}

export default page2