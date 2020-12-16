import { combineReducers } from 'redux'
import app from './app'
import toast from './toast'
import modal from './modal'
import order from './order'

export default combineReducers({
  app,
  toast,
  modal,
  order,
})