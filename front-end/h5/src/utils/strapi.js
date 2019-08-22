import axios from 'axios'
import { API_ORIGIN } from '../constants/api.js'

// TODO 通过 env 来配置后端 URL 等信息
const strapi = axios.create({
  baseURL: API_ORIGIN
})

export default strapi
