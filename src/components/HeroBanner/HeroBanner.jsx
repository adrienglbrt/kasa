import "./HeroBanner.scss"

function HeroBanner( {data} ) {
    const { title, cover } = data

    return (
        <div className="hero-banner">
            <h1 className="hero-banner__title">{title}</h1>
            <img className="hero-banner__cover" alt="" src={cover} />
        </div>
    )
}

export default HeroBanner