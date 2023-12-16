import { Link } from 'react-router-dom';
import DataContext from '../Context/DataContext'
import { useContext } from 'react'
import ref from './Reicon.png'
import '../Stylesheets/Footer.css'

const Footer = () => {

  const { loggedIn, handleRefresh, dark } = useContext(DataContext)

if (!loggedIn){
    return (  
      <>
        <footer className={!dark ? 'Footer' : 'dFooter'}>
          <ul className='FootSpace3'>
              <a
              className={!dark ? "App-link" : "dApp-link"}
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Address Address Lorem Ipsum Address, kyiv, germany, africa
            </a>
          </ul>
          <ul className='FootSpace2'>
            <li className='gone'><Link to={'/contact'}>Instagram</Link></li>
            <li className='gone'><Link to={'/contact'}>Linkedin</Link></li>
            <li className='gone'><Link to={'/contact'}>Twitter</Link></li>
            <li className='gone'><Link to={'/contact'}>Facebook</Link></li>
            <li><Link to={'/contact'}>Whatsapp</Link></li>
            <li><Link to={'/contact'}>Phone Number</Link></li>
            <li><Link to={'/contact'}>Email</Link></li>
          </ul>
       </footer>
       <div className={!dark ? 'Footertext' : 'dFootertext'}>
        <h4 className={!dark ? 'FooterMotto' : 'dFooterMotto'}>Our aim is to simplify the blood donation process and to foster a culture of regular donations</h4>
        <h4 className={!dark ? 'FooterMotto1' : 'dFooterMotto1'}>We want to help save lives by providing blood for those who need it</h4>
        <h5 className={!dark ? 'FooterCopyright' : 'dFooterCopyright'}>&copy; 2023 - Powered By let me cook</h5>
       </div>
      </>
    )
  }
  if (loggedIn){
    return (
      <>
        <footer className={!dark ? 'Footer' : 'dFooter'}>
        <ul className='FootSpace3'>
              <a
              className={!dark ? "App-link" : "dApp-link"}
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Address Address Lorem Ipsum Address, belarus, france, australia
            </a>
          </ul>
        <ul className='FootSpace2'>
          <li className='gone'><Link to={'/contact'}>Instagram</Link></li>
          <li className='gone'><Link to={'/contact'}>Linkedin</Link></li>
          <li className='gone'><Link to={'/contact'}>Twitter</Link></li>
          <li className='gone'><Link to={'/contact'}>Facebook</Link></li>
          <li><Link to={'/contact'}>Whatsapp</Link></li>
          <li><Link to={'/contact'}>Phone Number</Link></li>
          <li><Link to={'/contact'}>Email</Link></li>
        </ul>
        <ol className='ref'>
          <li>
            <Link to={'/'} onClick={() => {handleRefresh()}}>
              <img src={ref} className="reflogo" alt="logo" />
            </Link>
          </li>
        </ol>
      </footer>
      <div className={!dark ? 'Footertext' : 'dFootertext'}>
        <h4 className={!dark ? 'FooterMotto' : 'dFooterMotto'}>Our aim is to simplify the blood donation process and to foster a culture of regular donations</h4>
        <h4 className={!dark ? 'FooterMotto1' : 'dFooterMotto1'}>We want to help save lives by providing blood for those who need it</h4>
        <h5 className={!dark ? 'FooterCopyright' : 'dFooterCopyright'}>&copy; 2023 - Powered By JMTL</h5>
      </div>
      </>
  )}

}

export default Footer
