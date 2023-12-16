import '../Stylesheets/Register.css'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import eye from './eyeimg.png'


const Userinfo = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const { setstatus, dark, passInput, setpassInput, confirmInput, setconfirmInput,navigate, usernameInput, setusernameInput ,birthInput,genInput,lastNameInput, firstNameInput,  addressInput,emailregInput,phoneInput,setbirthInput,setgenInput,setlastNameInput, setfirstNameInput,  setaddressInput,setemailregInput,setphoneInput} = useContext(DataContext)
  const [openPwd, setopenPwd] = useState(false)
  const [openConf, setopenConf] = useState(false)
  const [fetchError, setfetchError] = useState('')
  const [isLoading, setisLoading] = useState(false)

  const theEyepwd = async (e) =>{
    e.preventDefault()
    setopenPwd(!openPwd)
  }
  const theEyeconf = async (e) =>{
    e.preventDefault()
    setopenConf(!openConf)
  }

  const handleCreate = async (e) =>{ 
    e.preventDefault()
    setisLoading(true)
    setfetchError(null)
    setisLoading(false)
    navigate('/dashboard')
    setfetchError(fetchError)
    setisLoading(isLoading)
    setfetchError(false)
    setisLoading(false)
    setstatus('')
    console.log(`Firstname:${firstNameInput}`)
    console.log(`Lastname:${lastNameInput}`)
    console.log(`Gender:${genInput}`)
    console.log(`D.0.b:${birthInput}`)
    console.log(`Phone:${phoneInput}`)
    console.log(`email:${emailregInput}`)
    console.log(`Address:${addressInput}`)
    console.log(`username:${usernameInput}`)
    console.log(`Password:${passInput}`)
    setfirstNameInput('')
    setlastNameInput('')
    setgenInput('')
    setbirthInput('')
    setphoneInput('')
    setemailregInput('')
    setaddressInput('')
    setusernameInput('')
    setpassInput('')
    setconfirmInput('')
}

  return (
    <div className='Register'>
      <div className='reguserWrapper'>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>User information</h1>
      <form>
      <div className='inputBoxusername'>
        <input
        type='text'
        placeholder='Username'
        required
        value={usernameInput}
        onChange={(e)=>{setusernameInput(e.target.value)}}/>
      </div>
      <div className='inputBoxpassword'>
        <input
        type={openPwd ? 'text' : 'password'}
        placeholder='Password'
        required
        value={passInput}
        onChange={(e)=>{setpassInput(e.target.value)}}/>
      </div>
      <button 
        type='submit' 
        onClick={(e)=>{theEyepwd(e)}} 
        className='eyebtnpwdreg'
        title='Show Password'>
            <img src={eye} className='eyepwdreg' alt='eye'/>
      </button> 
      <div className='inputBoxconfirm'>
        <input
        type={openConf ? 'text' : 'password'}
        placeholder='Confirm password'
        required
        value={confirmInput}
        onChange={(e)=>{setconfirmInput(e.target.value)}}/>
      </div>
      <button 
              type='submit' 
              onClick={(e)=>{theEyeconf(e)}} 
              className='eyebtnconfreg'
              title='Show Password'>
                <img src={eye} className='eyeconfreg' alt='eye'/>
              </button> 
      <button type='submit' className='regbtn' onClick={(e)=>{handleCreate(e)}}>Add User</button> 
      <button type='button' className='regbash' onClick={()=>{navigate(`/`)}}>Discard</button> 
      </form>
      </div>
    </div>
  )
}

export default Userinfo