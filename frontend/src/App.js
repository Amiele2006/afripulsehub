import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Dash from './Components/Dash';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import Users from './Components/Users'
import Footer from './Components/Footer';
import Forgot from './Components/Forgot';
import Lost from './Components/Lost';
import Register from './Components/Register';
import Contactinfo from './Components/Contactinfo';
import Userinfo from './Components/Userinfo';
import Login from './Components/Login';
import Thank from './Components/Thank';
import Filed from './Components/Filed';
import Donate from './Components/Donate';
import Request from './Components/Request';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <div> 
      <DataProvider>
        <Header title={'AfriPulse Hub'}/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path='/forgot' element={<Forgot/>}></Route>
          <Route exact path='/register/page1' element={<Register/>}></Route>
          <Route exact path='/register/page2' element={<Contactinfo/>}></Route>
          <Route exact path='/register/page3' element={<Userinfo/>}></Route>
          <Route exact path='/dashboard' element={<Dash/>}></Route>
          <Route exact path='/donate' element={<Donate/>}></Route>
          <Route exact path='/request' element={<Request/>}></Route>
          <Route exact path='/faq' element={<Faq/>}></Route>
          <Route exact path='/thankyou' element={<Thank/>}></Route>
          <Route exact path='/requested' element={<Filed/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/users' element={<Users/>}></Route>
          <Route exact path='/*' element={<Lost/>}></Route>
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
