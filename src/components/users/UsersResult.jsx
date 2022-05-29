import {useContext} from 'react'
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UsersResult() {

    const {users} = useContext(GithubContext)
  
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3'>
        {users.map((user)=>
        (<UserItem id={user.id} user={user}></UserItem>)
        )}
    </div>
  )
}

export default UsersResult