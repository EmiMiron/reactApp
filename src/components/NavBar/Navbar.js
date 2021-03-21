import React, { useState, useEffect } from 'react'
import { Button } from './../Button/Button';
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const menu = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Posts",
            "path": "/posts"
        },
        {
            "name": "Services",
            "path": "/services"
        }
    ]

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if (window.innerWidth <= 900) {
            setButton(false);
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton)

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Emy <i className='fa fa-mug-hot' style={{ 'marginLeft': '10px' }}></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {menu.map((item, index) =>
                            <li className='nav-item' key={index}>
                                <Link to={item.path} className="nav-links" onClick={closeMobileMenu}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                        <li className='nav-item'>
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button styleBtn="btn--outline">Sign</Button>}
                </div>

            </nav>
        </React.Fragment>
    )
}

export default Navbar
