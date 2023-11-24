import logo from '../../assets/logoWhite.png'
import "./footer.css"
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    const pathName = location.pathname;

    return (
        <div className='footerBar' style={{position: pathName === '/' ? 'relative' : pathName === '/about' ? 'fixed' : 'fixed' }}>
            <img src={logo} alt="logo du site Ksa" className='footerBar__Img' />
            <p className='footerBar__Text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer 

