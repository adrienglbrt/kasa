import HeroBanner from "../../components/HeroBanner"
import aboutHeroImg from "../../assets/about-hero-img.jpg"
import Collapse from "../../components/Collapse/Collapse"

function About() {
    const heroData = {
        title: "",
        cover: aboutHeroImg,
    }

    const collapseData = [
        {
            title: 'Fiabilité',
            content: 'Nulla consequat lacinia finibus. Aenean vitae sapien est. Nullam consectetur, nisi vitae rhoncus euismod, enim sem lacinia tortor, quis laoreet massa nisi a nisl. Nulla sit amet ultrices purus, eu consectetur lacus. Fusce id finibus dolor. Quisque id bibendum nibh, bibendum interdum dolor. Maecenas eu libero ac risus rhoncus blandit. Aliquam erat volutpat. In vel feugiat massa.',
        },
        {
            title: 'Respect',
            content: 'Ut pellentesque mi id ultrices pulvinar. Nunc suscipit justo sed velit egestas, id dictum metus accumsan. Aenean et commodo ante. Nullam feugiat nunc quis pharetra posuere.',
        },
        {
            title: 'Service',
            content: 'Etiam sodales, orci vel condimentum varius, ex nibh malesuada urna, vitae euismod risus augue a mi. Maecenas consectetur maximus dolor vitae placerat.',
        },
        {
            title: 'Sécurité',
            content: 'Maecenas blandit et neque vitae egestas. Quisque id magna in libero maximus tincidunt quis feugiat ex. Vivamus aliquet eget magna ut cursus. Curabitur vestibulum quam eu arcu tristique, nec tincidunt risus pharetra. Donec nec est id augue ornare egestas. Sed fermentum nunc at massa tempor, vel pretium sem ornare. Nulla rhoncus feugiat est et dignissim. Cras ultrices aliquam purus in efficitur. Nunc pharetra pulvinar ex, id commodo sapien mattis non. Quisque mollis ipsum at lacus tempus, sit amet aliquam est mattis. Vestibulum sed nibh ligula. Pellentesque leo ipsum, tristique quis nunc vitae, aliquam sodales nunc. Nulla vitae ipsum ac lectus ullamcorper accumsan sed et felis. Sed eget lorem tellus.',
        },
    ]

    return (
        <main>
            <section className="section">
                <HeroBanner data={heroData} />
            </section>
            <section className="section">
                {collapseData.map((item, index) => (
                    <Collapse key={index} data={item} />
                ))}
            </section>
        </main>
    )
}

export default About