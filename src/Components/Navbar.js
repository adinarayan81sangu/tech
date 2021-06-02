import React from 'react'
import Home from './Home';
import About from'./About';
import Contact from './Contact'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
const Navbar=()=>{
     return(
        <Router>
        <div id="container">
            <div id="menu-bar">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

<Link className="navbar-brand" to="/">My React APP</Link>


<ul className="navbar-nav">
<li className="nav-item">
  <Link className="nav-link" to="/home">Home</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/contact">Contact</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/about">About us</Link>
</li>
</ul>
</nav>
            </div>
            <div id="content">

       <Route path="/home" exact component={Home} ></Route>  
       <Route path="/contact" component={Contact}></Route>
       <Route path="/about" component={About}></Route>
            </div>
        </div>
</Router>
    )
     
}
export default Navbar;