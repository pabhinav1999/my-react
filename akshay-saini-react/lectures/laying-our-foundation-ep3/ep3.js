import React from "react";
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1',{},'Element rendered through create react');
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

root.render(heading);


const headingJSX = <h1>Element rendered through jsx syntax</h1>
console.log(headingJSX);


const rootjsx = ReactDOM.createRoot(document.getElementById('rootjsx'));
rootjsx.render(headingJSX)

console.log(heading === headingJSX) // returns false beacuse they are created differently


const headingJSXMultLines = (<div id="root1">
    <h2>This is multi line react</h2>
</div>)

setTimeout(()=>{
    rootjsx.render(headingJSXMultLines)
},3000)

//creating components
const Component1 = () => {
    return (<><h1>This is a component 1 </h1><Component2 /></>)
}

const Component2 = () =>  <h2>This is a component 2</h2>

const comprend = ReactDOM.createRoot(document.getElementById('componentrender'));
comprend.render(
    (
        <div id="example">
            <Component1 />
        </div>
    )
)

// rendering js inside jsx
const number = 10000
const desc = <p>This is a package which can be incorporated in the below compnent</p>
const MixJSX = function () {
    return (
        <div id='container'>
         {number}
         {desc}
         {Component1 ()}
        </div>
    )
}

 comprend.render( <MixJSX></MixJSX>);
 comprend.render( <MixJSX />);

