import Endpoints from '@api/auth/Endpoints'
import API from '@api/client'

const createUser = async (credentials: {
  username: string
  email: string
  password: string
}) => {
  await API.post(Endpoints.createUser, credentials)
}

export default createUser
