import './NavigationEntry.scss'
import { Link } from 'react-router-dom';


function NavigationEntry({ to, label, isActive }) {
    return (
      <li className={`navigation__list__item${isActive ? ' navigation__list__item--active' : ''}`}>
        <Link to={to}>{label}</Link>
      </li>
    );
  }  

export default NavigationEntry