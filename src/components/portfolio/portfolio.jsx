import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";



const data = [
    {
        id: 1,
        image: IMG1,
        title: "Path Finding Algorithm Visualizer",
        github: "https://fahad-ejaz.github.io/path-visualizer",
        dimo: "hello world",
    },
    {
        id: 2,
        image: IMG2,
        title: "Sorting Algorithm Visualizer",
        github: "https://fahad-ejaz.github.io/sorting/",
        dimo: "hello world",
    },
    {
        id: 3,
        image: IMG3,
        title: "Instagram Clone",
        github: "https://fahad-ejaz.github.io/instagram/",
        dimo: "hello world",
    },
    {
        id: 4,
        image: IMG4,
        title: "Ecommerce Website",
        github: "https://fahad-ejaz.github.io/Clothes",
        dimo: "hello world",
    },
    {
        id: 5,
        image: IMG5,
        title: "Color Palette",
        github: "https://fahad-ejaz.github.io/color-picker",
        dimo: "hello world",
    },
];
const portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Projects</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, github, title }) => {
                    return (
                        <article className="portfolio__item">
                            <div className="image__container">
                                <img
                                    src={image}
                                    alt=""
                                    className="portfolio__item-image"
                                    
                                />
                            </div>
                            <h3>{title}</h3>
                            <a href={github} className="btn" target="_blank">
                                Demo
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default portfolio;
