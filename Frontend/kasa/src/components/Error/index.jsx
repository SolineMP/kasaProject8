import { Link } from 'react-router-dom'
import "./error.css"

function Error() {
    return (
        <div className='mainContent error'>
            <h1 className='error__code'>404</h1>
            <p className='error__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='error__link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error