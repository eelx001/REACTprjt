import React from 'react'
import { Card } from 'flowbite-react';
import {HiArrowCircleRight }from 'react-icons/hi'
import {BsGithub }from 'react-icons/bs'
import {motion} from 'framer-motion'
import Earth from './images/earth.PNG'
import Port from './images/port.PNG'
import Err from './images/err.png'
import Spo from './images/spoti.PNG'
import Ipch from './images/ip.PNG'

function pcards() {
  return (
    <>
  <div className="cards-container">
  <motion.div>
  <Card 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Earth}
    className='cards'
  >
    <h6 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white">
      <p>
      Earthquake
      </p>
    </h6>
    
    <p className="font-normal text-gray-700 dark:text-gray-400">
      
    <a href="https://aesthetic-nasturtium-7da26d.netlify.app/" target='_'><button type="button" className="button-50" ><HiArrowCircleRight/>&nbsp;Check it!</button></a>
    <a href="https://github.com/eelx001/earthquake-morocco" target='_' className='bsgit'><BsGithub/></a>
    </p>
  </Card>
  
  </motion.div>
  <motion.div>
  <Card 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Port}
    className='cards'
  >
    <h6 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white">
      <p>
      My Portfolio  
      </p>
    </h6>
    
    <p className="font-normal text-gray-700 dark:text-gray-400">
      
    <a href=""><button type="button" className="button-50" ><HiArrowCircleRight/>&nbsp;Check it!</button></a>
    <a href="https://github.com/eelx001/REACTprjt" target='_' className='bsgit'><BsGithub/></a>
    
    </p>
  </Card>
  
  </motion.div>
  <motion.div>
  <Card 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Err}
    className='cards'
  >
    <h6 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white">
      <p>
      Maroc IParts
      </p>
    </h6>
    
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <a target='_'><button type="button" className="button-50" ><HiArrowCircleRight/>&nbsp;Check it!</button></a>
    <a href="https://github.com/eelx001/Maroc-Industry-Parts" target='_' className='bsgit'><BsGithub/></a>
    </p>
  </Card>
  
  </motion.div>
  <motion.div>
  <Card 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Spo}
    className='cards'
  >
    <h6 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white">
      <p>
      SpotiUp
      </p>
    </h6>
    
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <a href="https://jade-phoenix-aad10c.netlify.app/" target='_'><button type="button" className="button-50" ><HiArrowCircleRight/>&nbsp;Check it!</button></a>
    <a href="https://github.com/eelx001/Spotify" target='_' className='bsgit'><BsGithub/></a>
    </p>
  </Card>
  
  </motion.div>
  <motion.div>
  <Card 
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={Ipch}
    className='cards'
  >
    <h6 className="text-3xl font-bold tracking-tight text-black-900 dark:text-white">
      <p>
      IP checker 
      </p>
    </h6>
    
    <p className="font-normal text-gray-700 dark:text-gray-400">
    <a href="https://dazzling-bavarois-f33cc5.netlify.app/" target='_'><button type="button" className="button-50" ><HiArrowCircleRight/>&nbsp;Check it!</button></a>
    <a href="https://github.com/eelx001/IP-checker" target='_' className='bsgit'><BsGithub/></a>
    </p>
  </Card>
  
  </motion.div>
</div>

    </>
  )
}

export default pcards
