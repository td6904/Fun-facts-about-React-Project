import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevState => !prevState)

    }

    return (
        <div className="container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)