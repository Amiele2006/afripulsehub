import '../Stylesheets/Lost.css'
import { useEffect } from 'react'

const Thank = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
     }, [])
    
  return (
      <div className="Lost">
        <div className="topline">
          <h1><span className="first">Thank You For Your Donation</span></h1>
        </div>
        <div>
          <h3 className="bottomline">Remember to get some rest and stay Hydrated</h3>
        </div>
      </div>
  )
}

export default Thank
