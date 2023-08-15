'use client';
import { Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi'
import './time.css'



export default function Time() {
  return (
    <>
    
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
    </>
  )
}


