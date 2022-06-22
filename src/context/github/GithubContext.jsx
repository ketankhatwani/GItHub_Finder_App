import { createContext, useState } from 'react'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const fetchUsers = async (text) => {
    const param = new URLSearchParams({
      q: text
    })

    const response = await fetch(`https://api.github.com/search/users?${param}`);
    const {items}= await response.json();
    setUsers(items);
  }


  //For a single user
  const fetchUser = async (login) => {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    setUser(data);
  }

  const clearUsers = () => {
    setUsers([]);
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        fetchUsers,
        clearUsers,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
