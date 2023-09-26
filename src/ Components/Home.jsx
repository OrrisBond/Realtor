import React from 'react'
import PropCards from './PropCards/PropCards'
import Hero from './Hero/Hero'


function Home() {
  return (
    <div>
      <Hero/>
      <PropCards/>
      <PropCards />
      <PropCards />
    </div>
  )
}

export default Home