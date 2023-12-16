import '../Stylesheets/Register.css'
import { useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'

const Register = () => {
  const { dark, navigate, birthInput,genInput,lastNameInput, firstNameInput, setbirthInput, setgenInput, setfirstNameInput, setlastNameInput } = useContext(DataContext)


  const getGender =async () =>{
    setgenInput(document.getElementById('userGender').value)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const Continue = (e) =>{
  e.preventDefault()
  navigate('/register/page2')
 }



  return (
    <div className='Register'>
      <div className='regWrapper'>
      <form>
      <h1 className={!dark ? 'regtitle' : 'dregtitle'}>Create New User</h1>
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
    </form>
      <button type='submit' className='conta' onClick={(e)=>Continue(e)}>Continue</button>
    </div>
    </div>
  )
}

export default Register
