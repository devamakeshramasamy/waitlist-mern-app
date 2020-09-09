import React from 'react';
import Signup from './Components/signup'
import Admin from './Components/adminPage'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
        <div>
          <Route path="/" exact={true} render={
              ()=>{
                return <Signup/>
              }
          }/>
          <Route path="/admin" exact={true} render={
            ()=>{
              return <Admin/>
            }
          }/>
          
        </div>
    </Router>
  
  );
}

export default App;
