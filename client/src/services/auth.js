import api from '@/services/api'

export default {
  register (credentials) {
    api().post('register', credentials)
  }
}
