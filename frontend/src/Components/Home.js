import '../Stylesheets/Home.css'
import DataContext from '../Context/DataContext'
import { useContext, useEffect } from 'react'
import img from './homeimg.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  const { dark, navigate } = useContext(DataContext)

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const move = (e) =>{
    e.preventDefault()
    navigate('/dashboard')
  }
  
  return (
    <div className='Home'>
      <div className='spliting'>
      <div className='leftside'>
        <p className={!dark ? 'gift' : 'dgift'}>GIFT A LIFE</p>
        <img src={img} alt='homeimg' className='homeimg'></img>
        <p className={!dark ? 'donate' : 'ddonate'}>DONATE BLOOD</p>
        <button className='donbtn' onClick={(e)=>{move(e)}}>Donate Today!</button>
      </div>
      <div className='rightside'>
        <div className={!dark ? 'analysis1' : 'danalysis1'}>
          <p className='infotitle'>Total Donations Recieved</p>
          <p className='infocontent'>Over 30 donations have been made and delivered to the corresponding recipients based on blood group, genotype...</p>
          <Link to={'/dashboard'} className='infolink'>Read More</Link>
        </div>
        <div className={!dark ? 'analysis2' : 'danalysis2'}>
          <p className='infotitle'>Recipients Pending</p>
          <p className='infocontent'>Through our platform many recipients have satisfied their haemoglobin needs. However about 27 recipients are still awaiting...</p>
          <Link to={'/dashboard'} className='infolink'>Read More</Link>          
        </div>
        <div className={!dark ? 'analysis3' : 'danalysis3'}>
          <p className='infotitle'>Countries Delivered To</p>
          <p className='infocontent'>As of April the 15th 10-15 countries have recieved the requested blood based on blood group, genotype...</p>
          <Link to={'/dashboard'} className='infolink'>Read More</Link>
        </div>
      </div>
      </div>
      <div className='spliting'>
      <div className='didyouknow'>
        <div className='instructions1'>
          <p className='instructtitle'>Steps For Blood Donation</p>
          <p className='instructcontent'>1. Create an account or login if you already have one</p>
          <p className='instructcontent'>2. Confirm from your doctor if you are cleared to donate blood</p>
          <p className='instructcontent'>3. Schedule a date</p>
          <p className='instructcontent'>4. Visit any of our branches to donate</p>
          <p className='instructcontent'>5. Rest and recuperate</p>
        </div>
        <div className='instructions2'>
          <p className='instructtitle'>Precautions before Blood Donation</p>
          <p className='instructcontent'>- Ensure to drink plenty of water before donation</p>
          <p className='instructcontent'>- Eat Low fat healthy meals</p>
          <p className='instructcontent'>- Eat iron rich foods</p>
          <p className='instructcontent'>- Abstain from alcohol</p>
          <p className='instructcontent'>- Abstain from getting body modifications like tattoos</p>
        </div>
        <div className='instructions3'>
          <p className='instructtitle'>What To Do After Blood Donation</p>
          <p className='instructcontent'>- Drink plenty of water to rehydrate</p>
          <p className='instructcontent'>- Sit/lay down if you feel dizzy or lightheaded</p>
          <p className='instructcontent'>- Eat iron rich foods to replenish iron. Iron supplements and/or iron rich foods are highly recomended</p>
          <p className='instructcontent'>- Avoid consuming alcoholic beverages</p>
          <p className='instructcontent'>- Avoid rigorous exercises for at least 24-48 hours</p>
        </div>
      </div>
      <div>
      <div className={!dark ? 'didnt1' : 'ddidnt1'}>
        <p className='othercontent'>People who are less than 18 years of age or weigh less than 50kg may not be allowed to donate blood due to WHO restrictions</p>
        <p>For more information on these and other restrictions, click <a className='wholink' href='https://www.who.int/campaigns/world-blood-donor-day/2018/who-can-give-blood#:~:text=Below%20are%20some%20basic%20eligibility,that%20appropriate%20consent%20is%20obtained.' target="_blank" rel="noopener noreferrer">Here</a></p>
      </div>
      <div className={!dark ? 'didnt2' : 'ddidnt2'}>
        <p className='didyouknow1'>Did you know</p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
        <p className='didyouknow2'>- For more information on these and other restrictions, click </p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
