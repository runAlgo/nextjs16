import Hello from '../../components/Hello'

const Home = async () => {
  await new Promise(res => setTimeout(res, 3000)); 
  console.log('What type of a comonent am I?')
  return (
    <main>
      <div>Welcome to NextJS Course</div>
      <Hello />
    </main>
  )
}

export default Home