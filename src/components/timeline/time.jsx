'use client';
import React from 'react';
import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi'
import {FaReact, FaNodeJs} from 'react-icons/fa'
import {SiCss3 ,SiHtml5,SiJavascript,SiPhp,SiPython,SiMysql,
        SiMongodb,SiMariadb,SiPostgresql,SiGithub,SiVisualstudiocode,
        SiPostman,SiFastapi} from 'react-icons/si'
import {motion} from 'framer-motion'
import './time.css'
import { Rating } from 'flowbite-react';
import Security from './security';

export default function Time() {

  return (
    <motion.div 
    
    >
    <Timeline className='timeline-container'>
        
        <h1 className='formation'>Training</h1>

        
        <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className='time-time'>
            2022/2023
          </Timeline.Time>
          <Timeline.Title className='time-title'>
          Technician diploma specialized in development
          </Timeline.Title>
          <Timeline.Body>
            <p className='time-paragraph'>
            
            </p>
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className='time-time'>
            2022/2023
          </Timeline.Time>
          <Timeline.Title className='time-title'>
          Technician diploma specialized in development
          </Timeline.Title>
          <Timeline.Body>
            <p className='time-paragraph'>
           
            </p>
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className='time-time'>
            2020/2021
          </Timeline.Time>
          <Timeline.Title className='time-title'>
          Bachelor of Life and Earth Sciences
          </Timeline.Title>
          <Timeline.Body>
            <p className='time-paragraph'>
          
             </p>
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      
    </Timeline>
    <Timeline className='timeline-container'>
        
        <h1 className='exper'>Experiences</h1>

        
        <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className='time-time'>
            2023/2024
          </Timeline.Time>
          <Timeline.Title className='time-title'>
            Application UI code in Tailwind CSS
          </Timeline.Title>
          <Timeline.Body>
            <p className='time-paragraph'>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </p>
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className='time-time'>
            2022/2023
          </Timeline.Time>
          <Timeline.Title className='time-title'>
            Application UI
          </Timeline.Title>
          <Timeline.Body>
            <p className='time-paragraph'>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </p>
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className='time-time'>
            2020/2021
          </Timeline.Time>
          <Timeline.Title className='time-title'>
          diploma specialized in development
          </Timeline.Title>
          <Timeline.Body>
            <p className='time-paragraph'>
            informatique. ITSUP Casablanca
             </p>
          </Timeline.Body>
          
        </Timeline.Content>
      </Timeline.Item>
      
    </Timeline>
  
  
    <div className='timeline-container'>
        
        <h1 className='exper'>Skills
        <Rating className='damnstars'>
        <Rating.Star/>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        </Rating>
        </h1>
      <div className="skill-cont" >
<motion.div class="skills" >
  
  <motion.div class="each html"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.6,
  rotate: 15, }}


  >
    <div class="box">
      <div class="content" >
      <div className='icones-skill'>
        <h2>HTML</h2>
        <p></p>
        <div >
        <SiHtml5  className='icone-skill-html'/>
        </div>
        </div>
      </div>
    </div>
  </motion.div>
  <motion.div class="each css"

   whileHover={{ scale:0.8}}
   whileTap={{ scale: 0.7,
   rotate: -15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>CSS</h2>
        <p></p>
        
        <SiCss3 className='icone-skill-css'/>
        </div>
      </div>
    </div>
  </motion.div>
  
  <motion.div class="each js"
  
   whileHover={{ scale:0.8}}
   whileTap={{ scale: 0.7,
   rotate: -15, }}
   >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>JavaScript</h2>
        <p></p>
        
        <SiJavascript className='icone-skill-js'/>
        </div>
      </div>
    </div>
  </motion.div>
  <div class="each ng"
  
  
  >
    <div class="box"
    
    >
    <div class="content">
      <motion.div className='icones-skill'
      whileHover={{ scale:0.8}}
      whileTap={{ scale: 0.7,
      rotate: 15, }}
      >
        <h2>ReactJs</h2>
        <p></p>
        
        <FaReact className='icone-skill-react'/>
        </motion.div>
      </div>
    </div>
  </div>

</motion.div>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}


<div className="skill-cont">
<div class="skills">
  
  <motion.div class="each html"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: -15, }}
  >
    <div class="box">
      <div class="content">
      <div className='icones-skill'>
        <h2>NodeJs</h2>
        <p></p>
        
        <FaNodeJs className='icone-skill-nodejs'/>
        </div>
      </div>
    </div>
  </motion.div>
  <motion.div class="each css"
   whileHover={{ scale:0.8}}
   whileTap={{ scale: 0.7,
   rotate: 15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>Python</h2>
        <p></p>
        
        <SiPython className='icone-skill-python'/>
        </div>
      </div>
    </div>
  </motion.div>
  
  <motion.div class="each js"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: 15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>PHP</h2>
        <p></p>
        
        <SiPhp className='icone-skill-php'/>
        </div>
      </div>
    </div>
  </motion.div>
  <motion.div class="each ng"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: 15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>REST-API</h2>
        <p></p>
        
        <SiFastapi className='icone-skill-tail'/>
        </div>
      </div>
    </div>
  </motion.div>
    </div>
    </div>
    </div>
    </div>


     
    <div className='timeline-container'>
        
        <h1 className='exper'>Databases & Tools:</h1>
      <div className="skill-cont">
<div class="skills">
  
  <motion.div class="each html"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: 15, }}
  >
    <div class="box">
      <div class="content">
      <div className='icones-skill'>
        <h2>MySql</h2>
        <p></p>
        
        <SiMysql className='icone-skill-mysql'/>
        </div>
      </div>
    </div>
  </motion.div>
  <motion.div class="each css"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: -15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>MongoDB</h2>
        <p></p>
        
        <SiMongodb className='icone-skill-mongo'/>
        </div>
      </div>
    </div>
  </motion.div>
  
  <motion.div class="each js"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: -15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>MariaDB</h2>
        <p></p>
        
        <SiMariadb className='icone-skill-maria'/>
        </div>
      </div>
    </div>
  </motion.div>
  <motion.div class="each ng"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: 15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>PostgreSql</h2>
        <p></p>
        
        <SiPostgresql className='icone-skill-postgres'/>
        </div>
      </div>
    </div>
  </motion.div>

</div>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}


<div className="skill-cont">
<div class="skills">
  
  <motion.div class="each html"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: -15, }}
  >
    <div class="box">
      <div class="content">
      <div className='icones-skill'>
        <h2>Github/Git</h2>
        <p></p>
        
        <SiGithub className='icone-skill-github'/>
        </div>
      </div>
    </div>
  </motion.div>
  <motion.div class="each css"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: 15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>VsCode</h2>
        <p></p>
        
        <SiVisualstudiocode className='icone-skill-vscode'/>
        </div>
      </div>
    </div>
  </motion.div>
  
  <motion.div class="each js"
  whileHover={{ scale:0.8}}
  whileTap={{ scale: 0.7,
  rotate: -15, }}
  >
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>Postman</h2>
        <p></p>
        
        <SiPostman className='icone-skill-postman'/>
        </div>
      </div>
    </div>
  </motion.div>
  {/* <div class="each js">
    <div class="box">
    <div class="content">
      <div className='icones-skill'>
        <h2>Postman</h2>
        <p></p>
        
        <SiPostman className='icone-skill-postman'/>
        </div>
      </div>
    </div>
  </div> */}
  
    </div>
    </div>
    </div>
    </div>
    
<Security/>
  
    </motion.div>
  )
}


