import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {

    const { users, clearUsers, fetchUsers } = useContext(GithubContext)

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            alert('User not Entered')
        }
        else {
            fetchUsers(text)
            setText('')
        }
    }

    const cleanUsers = (e) => {
        clearUsers();
    }

    return (
        // <div className="grid grid-cols-1 xl:grid-cols-1 md:gid-cols-1 mb-8 gap-8">
        <>
            <div className='mx-auto mb-10'>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center align-top">
                        <input type="text" className="xl:w-1/4 sm:w-1/4 pr-10 bg-gray-200 input input-md text-black" placeholder="Search User" value={text} onChange={handleChange} />

                        <button type="submit" className="top-0 right-0 ml-3 w-24 btn btn-md hover:bg-gray-800 border-none">Go</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center'>
                {users.length > 0 && <button onClick={cleanUsers} className="btn bg-slate-200 text-slate-800 btn-md hover:bg-gray-300 hover:text-slate-900 mb-8 border-none">Clear</button>}
            </div>
        </>
        // </div>
    )
}

export default UserSearch




/*         <div className="form-control">
                <div className="relative">
                    <input type="text" className="w-full pr-40 bg-gray-200 input input-md text-black"  placeholder="Search User" value={text} onChange={handleChange}/>
                    <button type="submit" className="absolute top-0 right-0 rounded-l-none w-32 btn btn-md hover:bg-slate-900">Go</button>
                    {users.length>0 && <button onClick={cleanUsers} className="absolute ml-4 btn btn-ghost btn-md">Clear</button>}
                </div>
            </div> */