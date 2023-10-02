import './Tag.scss'

function Tag({ data }) {
    return (
        <div className="tag">
            <span className="tag__name">{data}</span>
        </div>
    )
}

export default Tag