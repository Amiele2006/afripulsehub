import '../Stylesheets/Register.css'
import { useState, useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import eye from './eyeimg.png'

const Register = () => {
  const { setstatus, dark } = useContext(DataContext)
  const [firstNameInput, setfirstNameInput] = useState('')
  const [lastNameInput, setlastNameInput] = useState('')
  const [genInput, setgenInput] = useState('')
  const [phoneInput, setphoneInput] = useState('')
  const [emailInput, setemailInput] = useState('')
  const [passInput, setpassInput] = useState('')
  const [confirmInput, setconfirmInput] = useState('')
  const [birthInput, setbirthInput] = useState('')
  const [fetchError, setfetchError] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [openPwd, setopenPwd] = useState(false)
  const [openConf, setopenConf] = useState(false)

  const theEyepwd = async (e) =>{
    e.preventDefault()
    setopenPwd(!openPwd)
  }
  const theEyeconf = async (e) =>{
    e.preventDefault()
    setopenConf(!openConf)
  }
  const navigate = useNavigate()

  const getGender =async () =>{
    setgenInput(document.getElementById('userGender').value)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const handleCreate = async (e) =>{ 
      e.preventDefault()
      setisLoading(true)
      setfetchError(null)
      setisLoading(false)
      navigate('/dashboard')
      setfetchError(false)
      setisLoading(false)
      setstatus('')
  }

  return (
    <div className='Register'>
      <div className='regWrapper'>
      <form>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>Create New User</h1>
      {isLoading && <p className='Pad1'>Creating User...</p>}
      {!isLoading && fetchError && <p className='error3'>{fetchError}</p>}
      <div className='inputBoxfirst'>
        <input
        type='text'
        placeholder='Firstname'
        required
        value={firstNameInput}
        onChange={(e)=>{setfirstNameInput(e.target.value)}}/>
      </div>
      <div className='inputBoxlast'>
        <input
        type='text'
        placeholder='Lastname'
        required
        value={lastNameInput}
        onChange={(e)=>{setlastNameInput(e.target.value)}}/>
      </div>
      <div className='inputBoxgen'>
        <select name='userGender' id='userGender' defaultValue={genInput} onChange={getGender}>
          <option value='' selected>Select a Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
      <div className='inputBoxdob'>
        <input
        type='date'
        placeholder='D.O.B'
        required
        value={birthInput}
        onChange={(e)=>{setbirthInput(e.target.value)}}/>
      </div>
      <div className='inputBoxphone'>
        <input
        type='text'
        placeholder='Phone Number'
        required
        value={phoneInput}
        onChange={(e)=>{setphoneInput(e.target.value)}}/>
      </div>
      <div className='inputBoxemail'>
        <input
        type='text'
        placeholder='Email'
        required
        value={emailInput}
        onChange={(e)=>{setemailInput(e.target.value)}}/>
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

export default Register
