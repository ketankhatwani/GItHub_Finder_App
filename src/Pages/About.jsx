
function About() {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a rel="noreferrer" target="_blank" href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          <strong>React Front To Back</strong>
        </a>{' '}
        Udemy course by <strong>Brad Traversy.</strong>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </div>
  )
}

export default About