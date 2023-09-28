import "./ListingThumb.scss";

function ListingThumb({ data }) {
    const { title, cover } = data

    return (
        <article className="listing-thumb">
            <h2 className="listing-thumb__title">{title}</h2>
            <img src={cover} alt="" className="listing-thumb__cover" />
        </article>
    )
}

export default ListingThumb