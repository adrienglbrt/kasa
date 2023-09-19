import { useParams } from 'react-router-dom'

function Listing() {
    const { listingId } = useParams()

    return (
        <h1>Listing n°{listingId}</h1>
    )
}

export default Listing