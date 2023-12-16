import { useState, createContext, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [dark, setdark] = useState('')
    const [userInput, setuserInput] = useState('')
    const [pwdInput, setpwdInput] = useState('')
    const [user, setuser] = useState('')
    const [loggedIn, setloggedIn] = useState(false)
    const navigate = useNavigate()
    const [accessKey, setaccessKey] = useState('')
    const [emailInput, setemailInput] = useState('')
    const [newPwd, setnewPwd] = useState('')
    const [confirmPwd, setconfirmPwd] = useState('')
    const [status, setstatus] = useState('')
    const [firstNameInput, setfirstNameInput] = useState('')
    const [lastNameInput, setlastNameInput] = useState('')
    const [genInput, setgenInput] = useState('')
    const [birthInput, setbirthInput] = useState('')
    const [phoneInput, setphoneInput] = useState('')
    const [emailregInput, setemailregInput] = useState('')
    const [addressInput, setaddressInput] = useState('')  
    const [passInput, setpassInput] = useState('')
    const [confirmInput, setconfirmInput] = useState('')
    const [usernameInput, setusernameInput] = useState('')
    const [ analysis, setanalysis ] = useState('General')

    useEffect(()=>{
      setdark(JSON.parse(localStorage.getItem('AfriPulseDarkMode')) || false) 
      !JSON.parse(localStorage.getItem('AfriPulseDarkMode')) ? localStorage.setItem('AfriPulseDarkMode', false) : console.log('')
    }, [])

    const handleRefresh = () => {
      console.log('refresh')
      navigate('/')
    }

    return (
        <DataContext.Provider value={{setaccessKey, accessKey, userInput, setuserInput, pwdInput, setpwdInput, emailInput, setemailInput, newPwd, setnewPwd, confirmPwd, setconfirmPwd, loggedIn, setloggedIn, setuser, user, status, setstatus, dark, setdark, navigate, handleRefresh, birthInput, setbirthInput,genInput, setgenInput,firstNameInput, setfirstNameInput, lastNameInput, setlastNameInput, addressInput, setaddressInput,emailregInput, setemailregInput, phoneInput, setphoneInput, passInput, setpassInput, confirmInput, setconfirmInput, usernameInput, setusernameInput, analysis, setanalysis}}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
