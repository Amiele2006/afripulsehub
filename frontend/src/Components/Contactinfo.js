import '../Stylesheets/Register.css'
import { useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'

const Contactinfo = () => {
  
  const { dark, navigate, addressInput,emailregInput,phoneInput, setaddressInput, setemailregInput,  setphoneInput } = useContext(DataContext)


  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const Continue = (e) =>{
  e.preventDefault()
  navigate('/register/page3')
 }

  return (
    <div className='Register'>
      <div className='regconWrapper'>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>Contact info</h1>
      <form>
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
        value={emailregInput}
        onChange={(e)=>{setemailregInput(e.target.value)}}/>
      </div>
      <div className='inputBoxaddress'>
        <input
        type='text'
        placeholder='Address'
        required
        value={addressInput}
        onChange={(e)=>{setaddressInput(e.target.value)}}/>
      </div>
      <button type='submit' className='contb' onClick={(e)=>Continue(e)}>Continue</button> 
      </form>
      </div>
    </div>
  )
}

export default Contactinfo
