import APIBase from './APIBase'

class User extends APIBase {
  about(username) {
    return super.execute(`/user/${username}/about`)
  }
}

export default User
