import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import jsonData from "../../data/logements.json"
import Slideshow from '../../components/Slideshow'
import ListingMain from '../../components/ListingMain'
import ListingDetails from '../../components/ListingDetails'

function Listing() {
    const { listingId } = useParams()
    const navigate = useNavigate();

    
    const findListingById = (id) => {
        return jsonData.find((listing) => listing.id === id)
    }

    const listingData = findListingById(listingId);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!listingData) {
            navigate('/404')
        } else {
            setLoading(false)
        }
    }, [listingData, navigate])

    if (loading) {
        return <div>Loading...</div>
    }

    // if (!listingData) {
    //     return <div>Listing not found</div>;
    // }

    const { title, pictures, description, host, rating, location, equipments, tags } = listingData

    return (
        <main>
            <section className='section'>
                <Slideshow data={pictures} />
            </section>
            <section className='section'>
                <ListingMain title={title} host={host} rating={rating} location={location} tags={tags} />
            </section>
            <section className='section'>
                <ListingDetails description={description} equipments={equipments} />
            </section>
        </main>
    )
}

export default Listing