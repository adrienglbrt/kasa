import './ListingMain.scss'
import ListingRating from '../ListingRating'
import Host from '../Host'
import Tags from '../Tags'


function ListingMain({ title, host, rating, location, tags }) {

    return (
        <div className='listing-main'>
            <div className='listing-main__first'>
                <h1 className='listing-main__title'>{title}</h1>
                <p className='listing-main__location'>{location}</p>
                <Tags data={tags} />
            </div>
            <div className='listing-main__second'>
                <Host data={host} />
                <ListingRating data={rating} />
            </div>
        </div>
    )
}


export default ListingMain