import '../Stylesheets/Login.css'
import { Link } from 'react-router-dom'
import eye from './eyeimg.png'
import DataContext from '../Context/DataContext'
import { useContext, useState, useEffect } from 'react'

const Login = () => {

  const { userInput, setuserInput, pwdInput, setpwdInput, setloggedIn, setaccessKey, setuser, dark, navigate} = useContext(DataContext)
  const [loggingIn, setloggingIn] = useState(false)
  const [open, setopen] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [wrong, setwrong] = useState(false)
  const [noUsername, setnoUsername] = useState(false)
  const [noPassword, setnoPassword] = useState(false)

/*   const failed = () =>{
    alert('Wrong Login Details Provided')
    setwrong(true)
  }

  const usernamer= () => {
    alert('Username Required')
    setnoUsername(true)
    if (!pwdInput) {
      setnoPassword(true)
    }
  }
  const passworder= () => {
    alert(`Password Required`)
    setnoPassword(true)
  } */

  const theEye = async (e) =>{
    e.preventDefault()
    setopen(!open)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const handleLogin = async (e) => { 
  e.preventDefault()
  setopen(false)
  setnoPassword(false)
  setnoUsername(false)
  setwrong(false)

  console.log('logged in')
  setloggedIn(true)
  setloggingIn(false)
  setfetchError(false)
  setaccessKey(false)
  setuser(false)
  setpwdInput('')
  setuserInput('')
  navigate('/')
 }

  return (
    <div className='Login'>
      <div className='Wrapper'>
        <form>
          <h1 className={!dark ? 'big' : 'dbig'}>Login</h1>
          {fetchError && <p className='error'>{fetchError}</p>}
          {wrong && <p className='failed'>Wrong details provided</p>}
          {loggingIn && <p className='loading'>Loading...</p>}
          {noUsername && <p className='requirement'>Username and Password Required</p>}
          {!noUsername && noPassword && <p className='requirement'>Username and Password Required</p>}
          <div className={!noUsername ? 'UserinputBox' : 'UserinputBoxred'}>
            <input
            type='text'
            placeholder='Username'
            required
            value={userInput}
            onChange={(e)=>{setuserInput(e.target.value)}}/>
          </div>
          <div className={!noPassword ? 'passinputBox' : 'passinputBoxred'}>
            <input
            type={open ? 'text' : 'password'}
            placeholder='Password'
            required
            value={pwdInput}
            onChange={(e)=>{setpwdInput(e.target.value)}}/>
          </div>
            <button 
              type='submit' 
              onClick={(e)=>{theEye(e)}} 
              className='eyebtn1'
              title='Show Password'>
                <img src={eye} className='eye1' alt='eye'/>
              </button> 
          <div className='space'>
            <button type='submit' className='button' onClick={(e)=>{handleLogin(e)}}>Login</button> 
          </div>
        </form>
        <div className={!dark ? 'signup' : 'dsignup'}>
              <h3 className={!dark ? 'spaceout' : 'dspaceout'}>
                Dont have an account? 
              </h3>
              <Link to={'/register/page1'}>
                <h3 className={!dark ? 'spaceoutlink' : 'dspaceoutlink'}>Sign Up</h3>
              </Link>
              
        </div>
        <div>
              <Link to={'/forgot'}>
                <h2 className={!dark ? 'forgot' : 'dforgot'}>Forgotten Your Password?</h2>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
 