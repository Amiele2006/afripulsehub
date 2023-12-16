import React from 'react'
import '../Stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext'
import { useContext } from 'react'
import logo from './logo.png'

const Header = ({ title }) => {

  const { loggedIn, setaccessKey, setuser, setloggedIn, dark, setdark, navigate, setanalysis } = useContext(DataContext)

  const darkmode = async (e) => {
    e.preventDefault()
    await localStorage.setItem('darkMode', !dark)
    await setdark(JSON.parse(localStorage.getItem('darkMode')))
  }

  const handleLogout = async () => {
        await setaccessKey('') 
        await setuser('')
        
        console.log('logged out')
        
          setaccessKey('')
          setuser('')
          setloggedIn(false)
          setanalysis('General')
          navigate('/')
        
}


if (!loggedIn){
  return ( 
      <header className={!dark ? 'Header' : 'dHeader'}>
          <ul>
              <li>
                  <img src={logo} className="App-logo1" alt="logo" />
              </li>
          </ul>
          <h1 className='headspace4'>{title}</h1>
          <ul className='headspace'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/dashboard'}>Dashboard</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact us</Link></li>
              <li><Link to={'/faq'}>FAQ</Link></li>
          </ul>
          <ol className='headspace1'>
              <li><Link to={'/login'}>Login</Link></li>
          </ol>
          <ul>
              <li>
                  <button  className={!dark ? 'btn' : 'dbtn'} onClick={(e) => {darkmode(e)}}>
                      D
                  </button>
              </li>
          </ul>
      </header>
)}
  if (loggedIn){
  return (
      <header className={!dark ? 'Header' : 'dHeader'}>
          <ul>
              <li>
                  <img src={logo} className="App-logo1" alt="logo" />
              </li>
          </ul>
          <h1 className='headspace4'>{title}</h1>
          <ul className='headspacelog'>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/dashboard'}>Dashboard</Link></li>
              <li><Link to={'/about'}>About</Link></li> 
              <li><Link to={'/contact'}>Contact us</Link></li>
              <li><Link to={'/faq'}>FAQ</Link></li>
              {/* className='home' use this to dissappear elements in mobile views */}
              <li><Link to={'/users'}>Users</Link></li>
          </ul>
          <ul className='headspace2'>
              <li><Link to={'/'} onClick={() => {handleLogout()}}>Logout</Link></li>
          </ul>
          <ul>
              <li>
                  <button className={!dark ? 'btn' : 'dbtn'} onClick={(e) => {darkmode(e)}}> 
                      D
                  </button>
              </li>
          </ul>
      </header>
)}
}

export default Header
