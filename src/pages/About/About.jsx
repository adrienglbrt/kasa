import HeroBanner from "../../components/HeroBanner"
import aboutHeroImg from "../../assets/about-hero-img.jpg"


function About() {
    const heroData = {
        title: "",
        cover: aboutHeroImg,
    }

    return (
        <main>
            <section className="section">
                <HeroBanner data={heroData} />
            </section>
        </main>
    )
}

export default About