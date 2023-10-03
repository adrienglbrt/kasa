import { Link } from 'react-router-dom';
import './Error404.scss'



function Error404() {
    return (
        <div className='error-404'>
            <h1 className='error-404__title'>404</h1>
            <p className='error-404__description'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='error-404__link'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404