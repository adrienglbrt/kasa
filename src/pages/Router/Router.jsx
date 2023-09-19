import { Route, Routes } from "react-router-dom";
import Home from '../Home'
import About from '../About'
import Listing from '../Listing'
import NotFound from '../NotFound'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listing/:listingId" element={<Listing />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router