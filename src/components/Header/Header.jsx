import './Header.scss'
import logoRed from '../../assets/logo-red.svg';
import Navigation from '../Navigation';


function Header() {
    return (
        <header className="header">
            <img src={logoRed} alt="" className="header__logo" />
            <Navigation />
        </header>
    )
}

export default Header