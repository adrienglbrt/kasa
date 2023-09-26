import './Footer.scss'
import logoWhite from '../../assets/logo-white.svg';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoWhite} alt="" className='footer__logo'/>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer