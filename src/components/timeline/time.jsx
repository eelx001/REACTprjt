'use client';
import React from 'react';
import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi'
import {motion} from 'framer-motion'
import './time.css'
import { Rating } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'




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
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        </Rating>
        </h1>
      <div className="skill-cont">
          
      <div class="skills">
  <div class="each html">
    <div class="box">
      <div class="content">
        <h2>HTML</h2>
        <p></p>
        <FontAwesomeIcon icon={faCalendarDays} />
      </div>
    </div>
  </div>
  <div class="each css">
    <div class="box">
      <div class="content">
        <h2>CSS</h2>
        <p></p>
        <FontAwesomeIcon />
      </div>
    </div>
  </div>
  
  <div class="each js">
    <div class="box">
      <div class="content">
        <i class="fa-brands fa-js"></i>
        <h2>JAVASCRIPT</h2>
        <p></p>
      </div>
    </div>
  </div>
  <div class="each ng">
    <div class="box">
      <div class="content">
        <i class="fa-brands fa-angular"></i>
        <h2>ANGULAR</h2>
        <p></p>
      </div>
    </div>
  </div>
</div>




<div class="skills">
  <div class="each html">
    <div class="box">
      <div class="content">
        <h2>HTML</h2>
        <p></p>
        <i class="fa-brands fa-html5"></i>
      </div>
    </div>
  </div>
  <div class="each css">
    <div class="box">
      <div class="content">
        <h2>CSS</h2>
        <p></p> 
        <FontAwesomeIcon />
      </div>
    </div>
  </div>
  
  <div class="each js">
    <div class="box">
      <div class="content">
        <i class="fa-brands fa-js"></i>
        <h2>JAVASCRIPT</h2>
        <p></p> 
      </div>
    </div>
  </div>
  <div class="each ng">
    <div class="box">
      <div class="content">
        <i class="fa-brands fa-angular"></i>
        <h2>ANGULAR</h2>
        <p></p> 
      </div>
    </div>
  </div>
</div>
          </div>
        
      
    </div>
    </motion.div>
  )
}


