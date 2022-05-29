import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'


function Notfoud() {
  return (
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-6xl font-bold mb-8'>Oops!</h1>
          <p className='text-4xl mb-8'>404 - Page Not Found!</p>
          <Link className='btn btn-primary btn-md' to='/'>
            <FaHome/>
            Back To Home
          </Link>
        </div>
      </div>
  )
}

export default Notfoud