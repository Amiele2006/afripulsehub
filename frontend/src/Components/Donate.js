import '../Stylesheets/Donate.css'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../Context/DataContext'

const Donate = () => {

  const { navigate, dark } = useContext(DataContext)
  const [weight, setweight] = useState()
  const [bloodType, setbloodType] = useState()
  const [genoType, setgenoType] = useState()
  const [history, sethistory] = useState()
  const [date, setdate] = useState()
  
  const getBlood =async () =>{
    setbloodType(document.getElementById('userBlood').value)
  }
  const getGeno =async () =>{
    setgenoType(document.getElementById('userGeno').value)
  }
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const goDonate = (e) =>{
  e.preventDefault()
  navigate('/thankyou')
 }


  return (
    <div className='Donate'>
      <div className='donwrapper'>
        <h1 className={!dark ? 'dontitle' : 'ddontitle'}>Donate Blood</h1>
        <form>
          <div className='inputBoxweight'>
            <input
            type='text'
            placeholder='Weight in Kg'
            required
            value={weight}
            onChange={(e)=>{setweight(e.target.value)}}/>
          </div>
          <div className='inputBoxblood'>
            <select name='userBlood' id='userBlood' defaultValue={bloodType} onChange={getBlood} required>
              <option value='' selected>Select Your Bloodtype</option>
              <option value='A-'>A-</option>
              <option value='B-'>B-</option>
              <option value='AB-'>AB-</option>
              <option value='O-'>O-</option>
              <option value='A+'>A+</option>
              <option value='B+'>B+</option>
              <option value='AB+'>AB+</option>
              <option value='O+'>O+</option>
            </select>
          </div> 
          <div className='inputBoxgeno'>
            <select name='userGeno' id='userGeno' defaultValue={genoType} onChange={getGeno} required>
              <option value='' selected>Select Your Genotype</option>
              <option value='AA'>AA</option>
              <option value='AS'>AS</option>
              <option value='SS'>SS</option>
              <option value='AC'>AC</option>
              <option value='CC'>CC</option>
              <option value='SC'>SC</option>
            </select>
          </div> 
          <div className='inputBoxhistory'>
            <textarea
            type='text'
            placeholder='History of Diseases'
            value={history}
            onChange={(e)=>{sethistory(e.target.value)}}/>
          </div>
          <div className='inputBoxdate'>
            <h3 className='avai'>Date Available</h3>
            <input
            type='date'
            placeholder='Date Available'
            required
            value={date}
            onChange={(e)=>{setdate(e.target.value)}}/>
          </div>
        </form>
        <button type='submit' className='godonbtn' onClick={(e)=>goDonate(e)}>Confirm</button>
      </div>
    </div>
  )
}

export default Donate
