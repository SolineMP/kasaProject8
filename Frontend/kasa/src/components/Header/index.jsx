import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
    return (
        <div className='navBar'>
            <img src={logo} alt="logo du site Kasa" />
            <nav>
                <Link className='navBar__link' to="/">Accueil</Link>
                <Link className='navBar__link' to="/about">À propos</Link>
            </nav>
        </div>
    )
}

export default Header