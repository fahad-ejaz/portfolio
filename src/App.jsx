import React from "react";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";


const App = () => {
    return (<div className="main__div">
        <About />
        <Experience />
        <Portfolio />
    </div>
    )
};

export default App;
