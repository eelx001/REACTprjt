'use client';

import { Card } from 'flowbite-react';
import './comp.css'
import {  TextInput } from 'flowbite-react';
import {motion} from 'framer-motion'


export default function DefaultCard() {
  return (
    <div className='divcomm'>
          <motion.h1 animate={{rotate:360,scale:1}}  className='pcomm-header'>Leave a comment 👋🏻</motion.h1>
          <div className='writecomm'>
          <TextInput
          className='incomm'
          id="large"
          sizing="lg"
          type="text"
          placeholder="Your Name"
        />
        <TextInput
          className='incomm'
          id="large"
          sizing="lg"
          type="text"
          placeholder="Comment.."
        />
       <button type="button" className="button-50 button009" >Send!</button>
        </div>


    <Card
      className="max-w-sm comments"
      
    >
      <h5 className="text-2xl font-bold tracking-tight text-white-900 dark:text-white">
        <p>
          GUEST🤵
        </p>
      </h5>
      <p className="font-normal text-white-700 dark:text-white-400">
        <p>
          {`Cool i like ;)`}
        </p>
      </p>
    </Card>
    <Card
      className="max-w-sm comments"
      
    >
      <h5 className="text-2xl font-bold tracking-tight text-white-900 dark:text-white">
        <p>
          GUEST🤵
        </p>
      </h5>
      <p className="font-normal text-white-700 dark:text-white-400">
        <p>
        Good Luck!!
        </p>
      </p>
    </Card>
    </div>
  )
}
