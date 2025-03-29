import type { LoginIn } from '@/types/type'
import { AxiosInstance } from './config'

export class authRepository {
  static async login(data: LoginIn) {
    try {
      const response = await AxiosInstance.post('/auth/login', data)
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }

  static async get_user_from_token(token: string) {
    try {
      const response = await AxiosInstance.post(`/auth/get-user-from-token?token=${token}`)
      return response
    } catch (error) {
      console.error('An error occurred:', error)
      throw error
    }
  }
}
