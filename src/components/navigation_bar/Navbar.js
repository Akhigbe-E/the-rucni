import React, { Component } from 'react';
import './Navbar.css';
import { Link} from 'react-router-dom'

class Navbar extends Component{

    render(){
        return(
            <div id="nav-style">

                    <div id="nav-ul">
                        {/* The Nav Icon/Logo */}
                        <Link to="/" id="nav-header"> Rucni</Link>

                        {/* The Nav Links */}
                        {/* <ul>
                            <li><a href="#"><b>About</b></a></li>
                            <li> <a href="#"><b>Blog</b></a> </li>
                            <li> <a href="#"><b>Services</b></a> </li>
                            <li> <a href="#"><b>Login</b></a> </li>
                        </ul> */}
                    </div>

            </div>
        );
    }
};

export default Navbar;