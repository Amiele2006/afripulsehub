import '../Stylesheets/Faq.css'
import DataContext from '../Context/DataContext'
import { useContext/* , useState */ } from 'react'

const Faq = () => {

  const { dark } = useContext(DataContext)
/*   const [clicked, setclicked] = useState('')
  const [open, setopen] = useState(false)

  const clickedHere = (id) =>{
    setopen(true)
    setclicked(id)
  } */

  return (
    <div className='Faq'>
      <h1 className={!dark ? 'faqhead' : 'dfaqhead'}>Frequently Asked Questions</h1>
      <div className='questionwrapper'>
        <ul>
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='1'>question 1</p>
            <p className={!dark ? 'answer' : 'danswer'} id='1'>answer 1</p>
          </li>        
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='2'>question 2</p>
            <p className={!dark ? 'answer' : 'danswer'} id='2'>answer 2</p>
          </li>        
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='3'>question 3</p>
            <p className={!dark ? 'answer' : 'danswer'} id='3'>answer 3</p>
          </li>        
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='4'>question 4</p>
            <p className={!dark ? 'answer' : 'danswer'} id='4'>answer 4</p>
          </li>        
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='5'>question 5</p>
            <p className={!dark ? 'answer' : 'danswer'} id='5'>answer 5</p>
          </li>        
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='6'>question 6</p>
            <p className={!dark ? 'answer' : 'danswer'} id='6'>answer 6</p>
          </li>        
          <li>
            <p className={!dark ? 'question' : 'dquestion'} id='7'>question 7</p>
            <p className={!dark ? 'answer' : 'danswer'} id='7'>answer 7</p>
          </li>        
        </ul>
      </div>
    </div>
  )
}

export default Faq
