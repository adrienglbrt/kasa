import { useState } from "react";
import "./ListingThumb.scss";

function ListingThumb({ data }) {
    const { title, cover } = data
    const [isHovered, setIsHovered] = useState(false)

    return (
        <article className="listing-thumb">
            <h2 className="listing-thumb__title"><a
                                                    href="#"
                                                    className="listing-thumb__link"
                                                    onMouseEnter={() => setIsHovered(true)}
                                                    onMouseLeave={() => setIsHovered(false)}
                                                    >
                                                        {title}
                                                </a>
            </h2>
            <img src={cover} alt="" className={`listing-thumb__cover ${isHovered ? 'listing-thumb__cover--hover' : ''}`}/>
        </article>
    )
}

export default ListingThumb