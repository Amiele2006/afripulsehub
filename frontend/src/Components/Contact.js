import '../Stylesheets/Contact.css'
import email from './email.png'
import lov from './lov.png'
import soc from './soc.png'
import phone from './phone.png'
import { useEffect } from 'react'
import DataContext from '../Context/DataContext'
import { useContext} from 'react'


const Contact = () => {
  const { dark } = useContext(DataContext)

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className='Contact'>
        <h1 className={!dark ? 'right1' : 'dright1'}>iowdvsalkxmakxvlskzxlk</h1>
        <h2 className={!dark ? 'right2' : 'dright2'}>uoaujdxznl axk zmkl</h2>
        <h2 className={!dark ? 'right3' : 'dright3'}>Whaiosdmkcm azxcmzk:r</h2>
        <ul>
         <li>
          <img src={lov} className="ogo1" alt="logo" />
          <figcaption className='ImgTag'>
            <a
              className="loc"
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className={!dark ? 'holes' : 'dholes'}>
                <p className='line1'>oisvlmdvlvskdx</p>
                <p className='line3'>lisdkmv kmvslxxlvmas;ckc</p>
                <p className='line2'>judszxicmaxmzmz x</p>
              </div>
            </a>
          </figcaption>
        </li> 
        <li>
          <img src={phone} className="ogo2" alt="logo" />
          <figcaption className='ImgTag'>
            <div className={!dark ? 'phone1' : 'dphone1'}>
              <p>oidcfxk</p>
              <p>ipfmdc;kx</p>
            </div>
          </figcaption>
        </li>
        <li>
          <img src={soc} className="ogo3" alt="logo" />
          <figcaption className='ImgTag'>
            <p className={!dark ? 'soc1' : 'dsoc1'}>Whatsapp: fbdbfbfbdfdf</p>
            <p className={!dark ? 'soc3' : 'dsoc3'}>Facebook: pklsvdm lksd</p>
            <p className={!dark ? 'soc2' : 'dsoc2'}>linkedin: jsdvslkcsd</p>
          </figcaption>
        </li>
        <li>
          <img src={email} className="ogo4" alt="logo" />
          <figcaption className='ImgTag'>
            <p className={!dark ? 'email' : 'demail'}>wemsdmcsancalscm</p>
          </figcaption>
        </li>
      </ul>
    </div>
  )
}

export default Contact
