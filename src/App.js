import AdminDashBoard from './components/AdminDashBoard';
import Book from './components/Book';
import Login from './components/Login';
import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
import { useState,useEffect } from 'react';
import {useCookies} from 'react-cookie'
import axios from 'axios';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import AdminNav from './components/AdminNav';
import OfferBanner from './components/OfferBanner';

function App() {
  const [cookies,removeCookie]=useCookies([])
  const [userName,setUserName]=useState()
  const [route,setRoute]=useState(false)
  useEffect(()=>{
    console.log("hello",cookies)
    const verifyCookie = async () => {
    
      if (cookies.token) {
        try {
          const response = await axios.post(
            "http://localhost:4000",
            {},
            { withCredentials: true }
          );
          if(response.data.status){
            
            sessionStorage.setItem("userName",response.data.user)
            setUserName(response.data.user)
            
          }
        } catch (error) {
          console.error("Error making POST app.js request:", error.message);
        }
      }
      
    };

    verifyCookie();

  },[])
  function LogOut(){
    removeCookie("token")
    sessionStorage.setItem("userName","")
    setRoute(false)
    setUserName(undefined)
    
  }
  useEffect(()=>{
    if(userName!=undefined){
      
      setRoute(true);
    }
    
  },[userName])
  
  if(route==false){
        return (
        <>
        <Router>
            <NavBar/>
            <OfferBanner/>
            <Routes>
              <Route path='/' exact element={<Book/>}></Route>
              <Route path='/Form' element={<UserForm/>}></Route>
              <Route path="/AdminLogin" element={<Login setRoute={setRoute} />}/>           
           </Routes>
          </Router>
          </>
        );
  }
  else{
    return(
      <>
        <Router>
            <AdminNav LogOut={LogOut}/>
            <Routes>
              <Route path='/' exact element={<AdminDashBoard/>}></Route>    
            </Routes>
          </Router>
      </>
    )
  }
}

export default App;
