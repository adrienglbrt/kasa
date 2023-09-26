import HeroBanner from "../../components/HeroBanner/HeroBanner"
import ListingThumb from "../../components/ListingThumb/ListingThumb"

function Home() {
    return (
        <main>
            <section>
                <HeroBanner />
            </section>
            <section>
                <div>
                    <ListingThumb />
                    <ListingThumb />
                    <ListingThumb />
                    <ListingThumb />
                    <ListingThumb />
                    <ListingThumb />
                </div>
            </section>
        </main>
    )
}

export default Home