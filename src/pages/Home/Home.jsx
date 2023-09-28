import HeroBanner from "../../components/HeroBanner"
import ListingGrid from "../../components/ListingGrid"
import jsonData from "../../data/logements.json"
import homeHeroImg from "../../assets/home-hero-img.jpg"
import "./Home.scss"

function Home() {
    const heroData = {
        title: "Chez vous, partout et ailleurs",
        cover: homeHeroImg,
    }

    return (
        <main>
            <section className="section">
                <HeroBanner data={heroData} />
            </section>
            <section className="section">
                <ListingGrid data={jsonData} />
            </section>
        </main>
    )
}

export default Home


