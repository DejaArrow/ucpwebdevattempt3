import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import { Link } from 'react-router-dom';
import './Navbar.css' 
import Logo from './NewLogoOutlookWhite.png';



class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems" >
                <h1> <Link to='/'><img src={Logo} className="navbar-logo" /> </Link>  </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                      <Button >Sign In</Button>
                </ul>
              
            </nav>
        )
    }
}

export default Navbar