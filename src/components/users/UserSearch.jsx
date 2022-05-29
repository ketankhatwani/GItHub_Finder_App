import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {

    const{users, clearUsers, fetchUsers} = useContext(GithubContext)

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text === '')
        {
            alert('User not Entered')
        }
        else{
            fetchUsers(text)
            setText('')
        }
    }

    const cleanUsers = (e) => {
        clearUsers();
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 md:gid-cols-1 mb-8 gap-8">
        <div className='mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <div className="relative">
                    <input type="text" className="w-full pr-40 bg-gray-200 input input-md text-black"  placeholder="Search User" value={text} onChange={handleChange}/>
                    <button type="submit" className="absolute top-0 right-0 rounded-l-none w-32 btn btn-md">Go</button>
                    {users.length>0 &&
            <button onClick={cleanUsers} className="absolute ml-4 btn btn-ghost btn-md">Clear</button>}
                </div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default UserSearch