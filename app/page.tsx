import React from 'react'
import Hello from '../components/Hello'

const Home = () => {
  console.log('What type of a comonent am I?')
  return (
    <main>
      <div>Welcome to NextJS Course</div>
      <Hello />
    </main>
  )
}

export default Home