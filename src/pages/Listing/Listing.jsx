import { useParams } from 'react-router-dom'

function Listing() {
    const { listingId } = useParams()

    return (
        <main>
            <h1>Listing n°{listingId}</h1>
        </main>
    )
}

export default Listing