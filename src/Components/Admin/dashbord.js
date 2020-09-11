import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.components"
import Delete from "./components/delete-components";
import Edit from "./components/edit-components";
import List from "./components/list-components";
import Update from "./components/update-components";

function App() {
  return (
    <Router>
      <div className="container-md">
        <Navbar />
        <br/>
        <Route path="/dashbord" exact component={List} />
        <Route path="/update" component={Update} />
        <Route path="/Edit" component={Edit} />
        <Route path="/delete" component={Delete} />
      </div>
    </Router>
  );
}

export default App;