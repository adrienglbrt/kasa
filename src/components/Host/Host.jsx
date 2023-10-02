import './Host.scss'

function Host({ data }) {
    const { name, picture } = data

    return (
        <div className='host'>
            <p className='host__name'>{name}</p>
            <img src={picture} className='host__picture' alt={`${name}`} />
        </div>
    )
}

export default Host