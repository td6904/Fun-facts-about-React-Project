import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    return (
        <>
        <Navbar />
        <Main />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)