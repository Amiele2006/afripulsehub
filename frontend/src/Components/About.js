import '../Stylesheets/About.css'
import logo from './logo.png'
import { useEffect, useContext } from 'react'
import DataContext from '../Context/DataContext'

const About = () => {

  const { dark } = useContext(DataContext)
 
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='About'>
        <div className='textbox'>
          <h1 className={!dark ? 'story' : 'dstory'}>Our Mission</h1>
          <p className={!dark ? 'para1' : 'dpara1'}>
            AfriPulseHub aims to efficiently connect Donors with blood banks, recipients and hospitals while ensuring data
            safety between the donor and the recipient.
          </p>
          <p className={!dark ? 'para2' : 'dpara2'}>
          We want to ensure data safety between the donor and the recipient with timely and accessible blood supply. In a nutshell,
          we aim to streamline the blood donation process as well as to foster a culture of regular donation and contributionto saving
          lives in emergent situations.
          </p>

          <h1 className={!dark ? 'hours' : 'dhours'}>Our Values</h1>
          <div className='sameline'><h2 className={!dark ? 'day1' : 'dday1'}>Safety:</h2><h2 className={!dark ? 'day11' : 'dday11'}>Ensuring the safety of both the donors and the recipients through screenings an testing procedures</h2></div>
          <div className='sameline'><h2 className={!dark ? 'day1' : 'dday1'}>Accessibility:</h2><h2 className={!dark ? 'day2' : 'dday2'}>Making blood products available to those in need, irrespective of their background, race or values</h2></div>
          <div className='sameline'><h2 className={!dark ? 'day1' : 'dday1'}>Transparency:</h2><h2 className={!dark ? 'day3' : 'dday3'}>Being open and transparent about the processes, procedures and outcomes</h2></div>
          

          <h1 className={!dark ? 'clientelle' : 'dclientelle'}>Our sponsors</h1>
          <ul className='logolist'>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li> 
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
            <li>
              <img src={logo} className="clientellelogo" alt="logo" />
            </li>
        </ul>
        </div>
      </div>
  )
}

export default About
