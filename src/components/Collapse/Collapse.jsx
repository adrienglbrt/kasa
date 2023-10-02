import './Collapse.scss'
import { useState } from 'react'
import arrowIcon from '../../assets/arrow-icon.svg'

function Collapse({ data }) {
    const { title, content } = data
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`collapse ${isExpanded ? 'collapse--expanded' : ''}`}>
            <div className='collapse__default'  onClick={toggleCollapse}>
                <h2 className='collapse__title'>{title}</h2>
                <div className={`collapse__arrow ${isExpanded ? 'collapse__arrow--expanded' : ''}`} style={{ backgroundImage: `url(${arrowIcon})`}}></div>
            </div>
            {isExpanded && <div className='collapse__content'><p>{content}</p></div>}
        </div>
    )
}

export default Collapse