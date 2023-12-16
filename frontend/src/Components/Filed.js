import '../Stylesheets/Lost.css'
import { useEffect } from 'react'

const Filed = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
     }, [])
    
  return (
      <div className="Lost">
        <div className="topline">
          <h1><span className="first">Your request has been submitted</span></h1>
        </div>
        <div>
          <h3 className="bottomline">You should be contacted within 5 business days</h3>
          <h3 className="bottomline">You can reach out to any of our staff if any problems arise</h3>
        </div>
      </div>
  )
}

export default Filed
