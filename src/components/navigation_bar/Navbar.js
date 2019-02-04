import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav>
                    <div>
                        {/* The Nav Icon/Logo */}
                        <a id="logo" href="#"> Rucni</a>

                        {/* The Nav Links */}
                        <ul>
                            <li><a href="#"><b>About</b></a></li>
                            <li> <a href="#"><b>Blog</b></a> </li>
                            <li> <a href="#"><b>Services</b></a> </li>
                            <li> <a href="#"><b>Login</b></a> </li>
                        </ul>
                    </div>
            </nav>
            </div>
        );
    }
};

export default Navbar;