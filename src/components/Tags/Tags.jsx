import './Tags.scss'
import Tag from '../Tag'

function Tags({ data }) {
    return (
        <div className='tags'>
            {data.map((item, index) => (
                <Tag key={index} data={item} />
            ))}
        </div>
    )
}

export default Tags