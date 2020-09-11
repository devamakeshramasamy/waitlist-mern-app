import React,{useState} from 'react';
import Signup from './Components/user/signup'
import Admin from './Components/Admin/adminPage'
import Dashbord from './Components/Admin/dashbord'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  const [Id,setId]=useState();
  return (
    <Router>
        <div>
          <Route path="/" exact={true} render={
              ()=>{
                return <Signup  onIdSubmite={setId} />
              }
          }/>
          <Route path="/admin" exact={true} render={
            ()=>{
              return <Admin/>
            }
          }/>
          <Route path="/dashbord" exact={true} render={
            ()=>{
              return <Dashbord/>
            }
          }/>
          
        </div>
    </Router>
  
  );
}

export default App;
