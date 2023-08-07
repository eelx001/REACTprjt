import React from 'react'
import Typed from 'react-typed';


function typing() {

  return (

    <div className='tysm'>
       <div className='texto'>
      <Typed
      strings={["Hi! My name is Mehdi Joumad","Im a Full stack developer"," And I love this!"]}
      typeSpeed={60}
      startDelay={0}
      backSpeed={25}
      backDelay={3000}
      loop={true}
      cursorChar="|"
      contentType='html'
    />    
    </div>
    </div>
  )
}

export default typing