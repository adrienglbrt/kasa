import './Slideshow.scss'
import { useState } from 'react'

function Slideshow({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)
    }

    return (
        <div className='slideshow'>
            <button className='slideshow__arrow slideshow__arrow--prev' onClick={prevSlide}><span className='sr-only'>Previous</span></button>
            <img src={data[currentIndex]} className='slideshow__current-img' alt={`Slide ${currentIndex}`} />
            <span className='slideshow__index'>{currentIndex + 1}/{data.length}</span>
            <button className='slideshow__arrow slideshow__arrow--next' onClick={nextSlide}><span className='sr-only'>Next</span></button>
        </div>
    )
}

export default Slideshow