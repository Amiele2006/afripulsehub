import image from './abtimg.jpg'
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
      <div className='sideimage'>
        <img src={image} className='images' alt='logo'/>
        <div className='textbox'>
          <h1 className={!dark ? 'story' : 'dstory'}>Our Mission</h1>
          <p className={!dark ? 'para1' : 'dpara1'}>
            ist paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          </p>
          <p className={!dark ? 'para2' : 'dpara2'}>
            2nd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          </p>
          <p className={!dark ? 'para3' : 'dpara3'}>
            3rd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
          </p>

          <h1 className={!dark ? 'hours' : 'dhours'}>Our Values</h1>
          <div className='sameline'><h2 className={!dark ? 'day1' : 'dday1'}>Val1:</h2><h2 className={!dark ? 'day11' : 'dday11'}>3rd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem </h2></div>
          <div className='sameline'><h2 className={!dark ? 'day1' : 'dday1'}>Val2:</h2><h2 className={!dark ? 'day2' : 'dday2'}>3rd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem </h2></div>
          <div className='sameline'><h2 className={!dark ? 'day1' : 'dday1'}>Val3:</h2><h2 className={!dark ? 'day3' : 'dday3'}>3rd paragraph ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem </h2></div>
          

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

    </div>
  )
}

export default About
