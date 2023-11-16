import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div>
            <img src={logo} alt="logo du site Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </div>
    )
}

export default Header