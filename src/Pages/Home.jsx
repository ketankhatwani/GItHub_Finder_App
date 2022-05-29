import UsersResult from "../components/users/UsersResult"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>
    <div>
      <UserSearch/>
      <UsersResult></UsersResult>
    </div>
    </>
  )
}

export default Home