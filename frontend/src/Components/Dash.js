import '../Stylesheets/Dash.css'
import { useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'
import ablood from './ablood.png'
import bblood from './bblood.png'
import abblood from './abblood.png'
import oblood from './oblood.png'

const Dash = () => {

  const { dark, loggedIn, analysis, setanalysis, navigate } = useContext(DataContext)

  const getAnalysis =async () =>{
    setanalysis(document.getElementById('userAnalysis').value)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const goDonate = (e) =>{
  e.preventDefault()
  navigate('/donate')
 }
 const goRequest = (e) =>{
  e.preventDefault()
  navigate('/request')
 }

  return (
    <div className='Dash'>
      <form className={!loggedIn ? 'nothere' : 'here'}>
        <div className={!dark ? 'chooseanalysis' : 'dchooseanalysis'}>
          <select name='userAnalysis' id='userAnalysis' onChange={getAnalysis}>
            <option value='General'>General</option>
            <option value='Personal'>Personal</option>
          </select>
        </div>
      </form>
      {analysis === 'General' ? 
      <div className='page'>
        <div>
          <div className='dashleft'>
            <div className='positivewrapper'>
              <div className='personalwrapper1'>
                <div className='words'>
                  <p className='norp'>Stored +ve</p>
                  <p className='norp'>(in pints)</p>
                </div>
              </div>
              <div className='personalwrapper2'>
                <img src={ablood} className='blood1' alt='blood'/>
                <figcaption className='cap1'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={bblood} className='blood2' alt='blood'/>
                <figcaption className='cap2'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={abblood} className='blood3' alt='blood'/>
                <figcaption className='cap3'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={oblood} className='blood4' alt='blood'/>
                <figcaption className='cap4'>000,000</figcaption>
              </div>
            </div>
            <div className='negativewrapper'>
              <div className='personalwrapper1'>
                <div className='words'>
                  <p className='norp'>Stored -ve</p>
                  <p className='norp'>(in pints)</p>
                </div>
              </div>
              <div className='personalwrapper2'>
                <img src={ablood} className='blood1' alt='blood'/>
                <figcaption className='cap1'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={bblood} className='blood2' alt='blood'/>
                <figcaption className='cap2'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={abblood} className='blood3' alt='blood'/>
                <figcaption className='cap3'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={oblood} className='blood4' alt='blood'/>
                <figcaption className='cap4'>000,000</figcaption>
              </div>
            </div>
            <div className='totalwrapper1'>
              <p className='totaltitle'>Total Blood Donated in Pints</p>
              <div className='straight'>
                <p className='wordingsa'>A: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>B: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>AB: </p>
                <p className='wordingsab'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>O: </p>
                <p className='wordingsb'>000,000</p>
              </div>
            </div>
            <div className='totalwrapper2'>
              <p className='totaltitle'>Total Blood Recieved in Pints</p>
              <div className='straight'>
                <p className='wordingsa'>A: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>B: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>AB: </p>
                <p className='wordingsab'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>O: </p>
                <p className='wordingsb'>000,000</p>
              </div>
            </div>
            <div className='totalwrapper3'>
              <p className='totaltitle'>Cities With Pending Requests</p>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
            </div>
            <div className='totalwrapper4'>
              <p className='totaltitle'>Cities With Available Donors</p>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
            </div>
            <div className='totalwrapper5'>
              <p className='totaltitle'>Total Number Of Donors</p>
              <div>
                <p className='numbering'>0</p>
              </div>
            </div>
            <div className='totalwrapper6'>
              <p className='totaltitle'>Total Blood Donated</p>
              <div>
                <p className='numbering'>0</p>
              </div>
            </div>
            <div className='totalwrapper7'>
              <p className='totaltitle'>Total Blood Requested</p>
              <div>
                <p className='numbering'>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className='page'>
        <div>
          <div className='dashleft'>
            <div className='positivewrapper'>
              <div className='personalwrapper1'>
                <div className='words'>
                  <p className='norp'>Stored +ve</p>
                  <p className='norp'>(in pints)</p>
                </div>
              </div>
              <div className='personalwrapper2'>
                <img src={ablood} className='blood1' alt='blood'/>
                <figcaption className='cap1'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={bblood} className='blood2' alt='blood'/>
                <figcaption className='cap2'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={abblood} className='blood3' alt='blood'/>
                <figcaption className='cap3'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={oblood} className='blood4' alt='blood'/>
                <figcaption className='cap4'>000,000</figcaption>
              </div>
            </div>
            <div className='negativewrapper'>
              <div className='personalwrapper1'>
                <div className='words'>
                  <p className='norp'>Stored -ve</p>
                  <p className='norp'>(in pints)</p>
                </div>
              </div>
              <div className='personalwrapper2'>
                <img src={ablood} className='blood1' alt='blood'/>
                <figcaption className='cap1'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={bblood} className='blood2' alt='blood'/>
                <figcaption className='cap2'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={abblood} className='blood3' alt='blood'/>
                <figcaption className='cap3'>000,000</figcaption>
              </div>
              <div className='personalwrapper2'>
                <img src={oblood} className='blood4' alt='blood'/>
                <figcaption className='cap4'>000,000</figcaption>
              </div>
            </div>
            <div className='totalwrapper1'>
              <p className='totaltitle'>Total Blood Donated in Pints</p>
              <div className='straight'>
                <p className='wordingsa'>A: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>B: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>AB: </p>
                <p className='wordingsab'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>O: </p>
                <p className='wordingsb'>000,000</p>
              </div>
            </div>
            <div className='totalwrapper2'>
              <p className='totaltitle'>Total Blood Recieved in Pints</p>
              <div className='straight'>
                <p className='wordingsa'>A: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>B: </p>
                <p className='wordingsb'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>AB: </p>
                <p className='wordingsab'>000,000</p>
              </div>
              <div className='straight'>
                <p className='wordingsa'>O: </p>
                <p className='wordingsb'>000,000</p>
              </div>
            </div>
            <div className='totalwrapper3'>
              <p className='totaltitle'>Cities With Pending Requests</p>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
            </div>
            <div className='totalwrapper4'>
              <p className='totaltitle'>Cities With Available Donors</p>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
              <div>
                <p className='wordingstates2'>City</p>
              </div>
              <div>
                <p className='wordingstates1'>City</p>
              </div>
            </div>
            <div className='totalwrapper5'>
              <p className='totaltitle'>Total Number Of Donors</p>
              <div>
                <p className='numbering'>0</p>
              </div>
            </div>
            <div className='totalwrapper6'>
              <p className='totaltitle'>Total Blood Donated</p>
              <div>
                <p className='numbering'>0</p>
              </div>
            </div>
            <div className='totalwrapper7'>
              <p className='totaltitle'>Total Blood Requested</p>
              <div>
                <p className='numbering'>0</p>
              </div>
            </div>
          </div>
        <button type='submit' className='godon' onClick={(e)=>goDonate(e)}>Donate</button>
        <button type='submit' className='goreq' onClick={(e)=>goRequest(e)}>Request</button>
        </div>
      </div>}
    </div>
  )
}

export default Dash
