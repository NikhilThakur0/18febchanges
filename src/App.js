
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sign_up from './components/Sign_up/Form';
import Navbar from './components/Navbar/Navbar';
import {Route,Routes} from'react-router-dom'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import LoginClient from './components/LoginClient/LoginClient';
import Create from './components/dashboard/Create';

import Read from './components/dashboard/Read';
import Update from './components/dashboard/Update'
import UserInfo from './components/dashboard/UserInfo/UserInfo';


function App() {
  let footerStyle = {
    minHeight: "75.2vh",
    margin: "50px auto",
  };
  return (
    <>
      {/* <Create></Create>
      <GetInvestments></GetInvestments>
      <Read></Read>
      <Update></Update> */}


        
{/* <UserInfo></UserInfo> */}



       {/* <Navbar></Navbar> 
      <div style={footerStyle}>  */}
      <Routes>
      {/* <Route exact path="/" element={<Home/>}>  </Route>
      <Route exact path="/services" element={<Services/>}>  </Route>
      <Route exact path="/about" element={<About/>}>  </Route>
        <Route exact path="/login" element={<Login/>}>  </Route>
        <Route exact path="/loginc" element={<LoginClient/>}>  </Route>
        <Route  exact path="/SignUp" element={<Sign_up/>}></Route> */}

<Route exact path="/" element={<Create/>}>  </Route>
<Route exact path="/read" element={<Read/>}>  </Route>
<Route exact path="/update" element={<Update/>}>  </Route>



        
      </Routes> 
      {/* </div> 
       <Footer></Footer>  */}

    
        
    </>
    
  );
}

export default App;
