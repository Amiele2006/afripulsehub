import '../Stylesheets/Request.css'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../Context/DataContext'

const Request = () => {

  const { navigate, dark } = useContext(DataContext)
  const [weight, setweight] = useState()
  const [bloodType, setbloodType] = useState()
  const [genoType, setgenoType] = useState()
  const [substance, setsubstance] = useState()
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

 const goRequest = (e) =>{
  e.preventDefault()
  navigate('/requested')
 }

  return (
    <div className='Request'>
<div className='reqwrapper'>
        <h1 className={!dark ? 'reqtitle' : 'dreqtitle'}>Request Blood</h1>
        <form>
          <div className='inputBoxweightreq'>
            <input
            type='text'
            placeholder='Weight in Kg'
            required
            value={weight}
            onChange={(e)=>{setweight(e.target.value)}}/>
          </div>
          <div className='inputBoxbloodreq'>
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
          <div className='inputBoxgenoreq'>
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
          <div className='inputBoxsubstance'>
            <textarea
            type='text'
            placeholder='History of Substance abuse? List them'
            value={substance}
            onChange={(e)=>{setsubstance(e.target.value)}}/>
          </div>
          <h3 className='avai'>Date Required</h3>
          <div className='inputBoxdatereq'>
            <input
            type='date'
            placeholder='Date required'
            required
            value={date}
            onChange={(e)=>{setdate(e.target.value)}}/>
          </div>
        </form>
        <button type='submit' className='goreqbtn' onClick={(e)=>goRequest(e)}>Confirm</button>
      </div>
    </div>
  )
}

export default Request
