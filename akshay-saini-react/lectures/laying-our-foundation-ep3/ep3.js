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