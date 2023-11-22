import logo from '../../assets/logoWhite.png'
import "./footer.css"

function Footer() {
    return (
        <div className='footerBar'>
            <img src={logo} alt="logo du site Ksa" className='footerBar__Img' />
            <p className='footerBar__Text'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer 