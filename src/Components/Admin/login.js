import React from 'react'
import Dashbord from './dashbord';
import Admin from './adminPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

export default function Login() {
    return (
        <BrowserRouter>
         <Switch>
             <Route path="/login" component={Login} />
             <ProtectedRoute exact={true} path="/" component={Dashboard} />
         </Switch>
     </BrowserRouter>
    )
}
