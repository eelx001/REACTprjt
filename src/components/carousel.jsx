import React from "react";
import { motion } from 'framer-motion';
import Rectangle from './rectangle.svg';


export default function Indicators() {
  return (
    <div className="background-container">
      <div       
     
      className="background" />
      <motion.h1

        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.8 }}
        animate={{
          x: -10,
          duration: 10,
          scale: 1,
          rotate: 360,
        }}
        className="MyName"
      >
        I forgot to put something here xD
      </motion.h1>
    </div>
  );
}
