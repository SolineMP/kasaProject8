import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div className='navBar'>
            <img src={logo} alt="logo du site Kasa" className='navBar__logo'/>
            <nav>
                <Link className='navBar__link' to="/" style={{textDecoration: pathName === '/' ? 'underline' : 'none' }}>Accueil</Link>
                <Link className='navBar__link' to="/about" style={{textDecoration: pathName === '/about' ? 'underline' : 'none' }}>À propos</Link>
            </nav>
        </div>
    )
}

export default Header