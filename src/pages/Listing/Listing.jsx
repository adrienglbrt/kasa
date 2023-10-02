import { useParams } from 'react-router-dom'
import jsonData from "../../data/logements.json"
import Slideshow from '../../components/Slideshow'
import Host from '../../components/Host/Host'

function Listing() {
    const { listingId } = useParams()
    
    const findListingById = (id) => {
        return jsonData.find((listing) => listing.id === id)
    }

    const listingData = findListingById(listingId);

    if (!listingData) {
        return null
    }

    const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = listingData


    return (
        <main>
            <section className='section'>
                <Slideshow data={pictures} />
            </section>
            <section className='section'>
                <Host data={host} />
            </section>
            <section className='section'>
                
            </section>
        </main>
    )
}

export default Listing