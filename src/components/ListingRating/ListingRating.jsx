import './ListingRating.scss'
import emptyStar from '../../assets/star-empty-icon.svg'
import filledStar from '../../assets/star-filled-icon.svg'


function ListingRating({ data }) {
    const maxStars = 5
    const filledStars = Math.min(Math.max(data, 1), maxStars)
    const emptyStars = maxStars - filledStars

    const stars = []
    for (let i = 0; i < filledStars; i++) {
        stars.push(
            <img src={filledStar} className='listing-rating__star listing-rating__star--filled' alt='filled rating star' key={i+1}/>
        )
    }
    if (emptyStars !== 0) {
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <img src={emptyStar} className='listing-rating__star listing-rating__star--empty' alt='empty rating star' key={maxStars - (i -1)} />
            )
        }
    }

    return (
        <div className='listing-rating'>
            {stars}
        </div>
    )
}

export default ListingRating