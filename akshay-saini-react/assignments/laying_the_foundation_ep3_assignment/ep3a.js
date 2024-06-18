import React from "react";
import ReactDOM from 'react-dom/client';

/* Theory Assignment */

/* Q1. What is JSX ?
A:  JSX is a syntax used in react. It tries to merge javascript together with html.
It is not html inside JS */

/* Q2. What are the superpowers of JSX ?
A: JSX has fetures of Declarative Syntax, easily integrable iwth javascript, provides protection form injection attacks,
   provide conditional rendering, support for loops and excellent community */

/* Q3. What is the role of type attribute in script tag. What are the different options that can be used on type ?
A: The type attribute between script tag defines the content that needs to be executed. It gives the info of MIME type of script
   MIME means Multipurpose Mail Extension.
   The default type is text/javascript , other options are module, application/json , nomodule, etc. */

/* Q4. What is the difference between { TitleComponent } vs { <TitleComponent /> } vs { <TitleComponent></TitleComponent>}?
A: To be answered later
   {TitleComponent}: Refers to the component itself, used for passing the component as a prop or for higher-order components.
   {<TitleComponent/>}: Instantiates and renders the component without children.
   {<TitleComponent></TitleComponent>}: Instantiates and renders the component with children, providing the flexibility to include content inside the component.*/
  
/* Coding  Assignment */

const Header = () => {
    return (<div className="header">
        <h2 className="brand"> React</h2>
         <div className="searchBox">
            <input type="text"></input>
            <button>Search</button>
         </div>
        <img className="userImg" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile pic" />
    </div>)
}

const headerRoot = ReactDOM.createRoot(document.getElementById('topHeader'));
headerRoot.render(<Header></Header>)

const nestedElement = React.createElement( 'div', { className : 'title'}, [
    React.createElement( 'h1',{},'This is h1'),
    React.createElement( 'h2',{},'This is h2'),
    React.createElement( 'h3',{},'This is h3'),
])
const rootNestedElement = ReactDOM.createRoot(document.getElementById('q1nestedEle')) 
rootNestedElement.render(nestedElement);

const nestedJSXElement = (<>
    <h1 className="class1">This is h1 through JSX</h1>
    <h2>This is h2 through JSX</h2>
    <h3>This is h3 through JSX</h3>
    </>
)

setTimeout(()=>{
 rootNestedElement.render(nestedJSXElement)
}, 1000)

const NestedComponent = () => {
    return(<>
        <h1>This is h1 through functional component</h1>
        <h2>This is h2 through functional component</h2>
        <h3>This is h3 through functional component</h3>
        </>
    )
}


setTimeout(()=>{
    rootNestedElement.render(<NestedComponent></NestedComponent>)
   }, 5000)

const CompositeComp = () =>{
    return (
        <>
            <h2> Adding another component</h2>
            { <NestedComponent></NestedComponent> }
        </>
    )
}

setTimeout(()=>{
   rootNestedElement.render(<CompositeComp></CompositeComp>)
}, 10000)