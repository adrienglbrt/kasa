import ListingThumb from "../../components/ListingThumb/ListingThumb"
import "./ListingGrid.scss";



function ListingGrid({ data }) {

    return (
        <div className="listing-grid">
            {data.map((item, index) => (
                <ListingThumb key={index} data={item} />
            ))}
        </div>
    )
}

export default ListingGrid