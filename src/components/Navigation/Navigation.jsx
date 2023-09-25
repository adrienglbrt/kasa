import './Navigation.scss'
import NavigationEntry from "../NavigationEntry"

function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <NavigationEntry />
                <NavigationEntry />
            </ul>
        </nav>
    )
}

export default Navigation