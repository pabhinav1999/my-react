const heading3 = React.createElement('h3',{id:'heading3', randattr:'randomAttribute'},'This heading is created with Raect');

console.log(heading3);

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(heading3); //It always renders inside the root removing any other content

/*
  <div id="parent">
     <div id="child">
       <h1>This is a nested html structure created using React method</h1>
     </div>
   </div>
*/

const nestedHTML = React.createElement('div',{id: 'parent'}, 
   React.createElement('div',{ id: 'child'}, 
   React.createElement('h1',{},'This is a nested html structure created using React Method')));

const rootForNested = ReactDOM.createRoot(document.getElementById('root2'));
rootForNested.render(nestedHTML);

/*
  <div id="parent1">
     <div id="child1">
       <h1>This is a nested html structure created using React method sibling 1</h1>
     </div>
     <div id="child2">
       <h1>This is a nested html structure created using React method sibling 2</h1>
     </div>
   </div>
*/

const nestedHTMLSiblings = React.createElement('div',{id: 'parent1'}, 
  [ React.createElement('div',{ id: 'child1'}, 
  React.createElement('h1',{},'This is a nested html structure created using React Method sibling1')),
  React.createElement('div',{ id: 'child2'}, 
  React.createElement('h1',{},'This is a nested html structure created using React Method sibling2'))]);

const rootForNestedSiblings = ReactDOM.createRoot(document.getElementById('root3'));
rootForNestedSiblings.render(nestedHTMLSiblings);


