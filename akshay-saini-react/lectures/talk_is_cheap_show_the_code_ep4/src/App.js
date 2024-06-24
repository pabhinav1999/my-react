import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
    return (
        <div className="app-container">
            <Header></Header>
            <Body></Body>
            <h1>footer</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app-content'));
root.render(<App></App>)
