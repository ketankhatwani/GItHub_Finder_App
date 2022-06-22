import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar py-3 mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
            <div className="flex-none  mx-2">
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to='/' className='text-lg font-bold align-middle'>GitHub Fider</Link>
            </div>
        </div>

        <div className="flex-none px-2 mx-2">
            <div className="flex justify-end">
                <Link to='/' className='btn btn-ghost rouded-btn font-bold'>Home</Link>
                <Link to='/about' className='btn btn-ghost rouded-btn font-bold'>About</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
