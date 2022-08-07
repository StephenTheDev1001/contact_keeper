import { useReducer } from "react"
import AuthContext from "./authContext"
import axios from 'axios'
import authReducer from './authReducer'
import setAuthToken from "../../utils/setAuthToken"
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    try {
      const res = await axios.get('/api/auth')

      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (err) {
      dispatch({ type: AUTH_ERROR })
    }
  }

  // Register User
  const register = async (formData) => {

    try {
      const res = await axios.post('/api/users', formData)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
      localStorage.setItem('token', res.data.token);
      loadUser()
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      })
    }
  }
  // Login User
  const login = async (formData) => {

    try {
      const res = await axios.post('/api/auth', formData)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
      localStorage.setItem('token', res.data.token);
      loadUser()
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      })
    }
  }
  // logout
  const logout = () => console.log('logout');
  // clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState