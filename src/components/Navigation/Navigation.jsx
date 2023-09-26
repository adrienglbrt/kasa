import './Navigation.scss'
import NavigationEntry from "../NavigationEntry"
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navigation() {
    const { pathname } = useLocation()
    const [activeEntry, setActiveEntry] = useState(null)

    useEffect(() => {
        setActiveEntry(pathname);
      }, [pathname])  

    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <NavigationEntry to="/" label="Accueil" isActive={activeEntry === '/'} />
                <NavigationEntry to="/about" label="À propos" isActive={activeEntry === '/about'} />
            </ul>
        </nav>
    )
}

export default Navigation