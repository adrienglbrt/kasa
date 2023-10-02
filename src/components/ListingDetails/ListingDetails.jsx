import "./ListingDetails.scss";
import Collapse from '../../components/Collapse';

function ListingDetails({ equipments, description }) {
    const descriptionData = {
        title: 'Description',
        content: description
    }
    const equipmentsData = {
        title: 'Équipements',
        content: (
            <ul>
                {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
        )
    }

    return (
        <div className="listing-details">
            <Collapse data={descriptionData} />
            <Collapse data={equipmentsData} />
        </div>
    )
}

export default ListingDetails