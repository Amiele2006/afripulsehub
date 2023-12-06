import '../Stylesheets/Forgot.css'
import DataContext from '../Context/DataContext'
import { useContext, useState, useEffect } from 'react'
import eye from './eyeimg.png'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {

  const { newPwd, setnewPwd, confirmPwd, setconfirmPwd, dark } = useContext(DataContext)

  const [idInput, setidInput] = useState('')
  const [isLoading, setisLoading] = useState('')
  const navigate = useNavigate()
 /*  const [wrong, setwrong] = useState(false) */
  const [openPwd, setopenPwd] = useState(false)
  const [openConf, setopenConf] = useState(false)
  const [noId, setnoId] = useState(false)
  const [noPassword, setnoPassword] = useState(false)
  const [noConfirm, setnoConfirm] = useState(false)
  const [fetchError, setfetchError] = useState(false)

/*   const failed = () =>{
    alert('No existing user matches specified details')
    setwrong(true)
  } */

  const ider= () => {
    alert('email Required')
    setnoId(true)
    if (!newPwd) {
      setnoPassword(true)
    }
    if (!confirmPwd) {
      setnoConfirm(true)
    }
  }
  const passworder= () => {
    alert(`Password Required`)
    setnoPassword(true)
    if (!confirmPwd) {
      setnoConfirm(true)
    }
  }
  const confirmer= () => {
    alert(`Confirm the Password`)
    setnoConfirm(true)
  }

  const mismatch = () =>{
    alert(`New password must match confirmation password`)    
    setnoPassword(true)
    setnoConfirm(true)
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const handleForgot = async (e) => {
    e.preventDefault()
    setnoConfirm(false)
    setnoId(false)
    setnoPassword(false)
    if (!idInput) {
        ider()
    }
    if (idInput && !newPwd){
        passworder()
    }
    if (newPwd && newPwd !== confirmPwd && idInput) {
        if (!confirmPwd){
            confirmer()
        } else if (confirmPwd){
          mismatch()
        }
    }
    if (newPwd && newPwd === confirmPwd && idInput) {
        setisLoading(true)
        alert('Attempt to log in now')
        navigate(`/login`)
        setisLoading(false)
        setidInput('')
        setnewPwd('')
        setconfirmPwd('')
        setfetchError(false)
        }}
  
        const theEyepwd = async (e) =>{
          e.preventDefault()
          setopenPwd(!openPwd)
        }
        const theEyeconf = async (e) =>{
          e.preventDefault()
          setopenConf(!openConf)
        }

  return (
<div className='Forgotten'>
          <div className='forgotWrapper'>
            <form>
              <h1 className={!dark ? 'title' : 'dtitle'}>Forgotten Password</h1>
              {fetchError && <p className='error1'>{fetchError}</p>}
              {isLoading && <p className='changing'>Please Wait...</p>}
              {/* {wrong && <p className='failed'>Wrong details provided</p>} */}
              <div className={!noId ? 'EmailinputBox' : 'EmailinputBoxred'}>
                <input
                type='text'
                placeholder='User Email'
                required
                value={idInput}
                onChange={(e)=>{setidInput(e.target.value)}}/>
              </div>
              <div className={!noPassword ? 'pwdinputBox' : 'pwdinputBoxred'}>
                <input
                type={openPwd ? 'text' : 'password'}
                placeholder='New Password'
                required
                value={newPwd}
                onChange={(e)=>{setnewPwd(e.target.value)}}/>
              </div>
              <button 
              type='submit' 
              onClick={(e)=>{theEyepwd(e)}} 
              className='eyebtnpwd'
              title='Show Password'>
                <img src={eye} className='eyepwd' alt='eye'/>
              </button> 
              <div className={!noConfirm ? 'confinputBox1' : 'confinputBox1red'}>
                <input
                type={openConf ? 'text' : 'password'}
                placeholder='Confirm Password'
                required
                value={confirmPwd}
                onChange={(e)=>{setconfirmPwd(e.target.value)}}/>
              </div>
              <button 
              type='submit' 
              onClick={(e)=>{theEyeconf(e)}} 
              className='eyebtnconf'
              title='Show Password'>
                <img src={eye} className='eyeconf' alt='eye'/>
              </button> 
              <button type='submit' className='forgotbtn' onClick={(e)=>{handleForgot(e)}}> Reset </button>
              {noId && <p className='required'>All fields must be filled</p>}
              {!noId && noPassword && <p className='required'>All fields must be filled</p>}
              {!noId && !noPassword && noConfirm && <p className='required'>All fields must be filled</p>}
            </form>
          </div>
        </div>
  )
}

export default Forgot
