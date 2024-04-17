
/* Theory questions */

/*What is Emmet?
  Emmet  is an plugin which  helps front end developers to  write html and css code efficiently and fastly */

/* Difference between a library and a framework:
   Library: A library consists of a set of predefined code (classes, functions, modules). 
   While using a library, we maintain control over the flow of the program. Libraries can be used as part of a page, and we selectively incorporate their functionalities into our code.

   Framework: A framework dictates the overall architecture of a project.
    When working within a framework, we must adhere to specific rules and guidelines to add features. The entire project is structured within the framework, 
    less control over individual files but offering a cohesive structure for development. */

/* What is CDN? Why do we use it ?
   CDN stands for Content delivery network.Cached Servers are placed all over the world for a particular library.
   Retrieveing information from server in a less time is one of the key feature of website performance.CDN takes required 
   information from cached servers which are located near to the ips */

/* Why is React known as React?
   React is known for its quick reaction on a web page interaction compared to other frameworks/ library */

/* What is cross origin in script tag?
   In our case we generally load cdn scripts and try to give them access to manipulate dom.
   Due to security reasons , some scripts may not allow themselves to expose to scripts loaded from different origin(like in 
   case of react cdn scripts). Hence we need to specify cross origin attribute in the script tag while loading react
   
   By setting crossorigin="anonymous", you're indicating to the browser that the script should be treated as coming from an anonymous source, without sending any user credentials.
   This is a common approach when loading scripts from CDNs.*/

  /*What is the difference between React and ReactDOM?
   React contains the core functionalities of react library whereas ReactDOM is related to browser which helps in injecting react
   functionalities to our browser through DOM,For mobile we use React and React Native as mobile needs React Native to setup 
   React */

   /* What is the difference between react.development.js and react.production.js via CDN?
     React.development.js provides additional help for developers like providing debugger messages, detailed error messages 
     whereas react.production.js has optimisation techniques to reduce file size  */

  /* What is async and defer?
    In the normal flow, when a script tag is encountered during HTML parsing, the browser typically halts parsing, fetches and executes the script,
    and then resumes parsing once the script execution is complete.
    When using the 'async' attribute on a script tag, fetching of the script occurs asynchronously while HTML parsing continues.
    Once the script is fetched, it is executed, potentially interrupting the parsing process, and then parsing resumes.
    On the other hand, when the 'defer' attribute is used on a script tag,
    fetching of the script also occurs asynchronously while HTML parsing continues. However, the script is not executed until after the HTML parsing is complete. 
    Once parsing finishes, the deferred scripts are executed in the order they were encountered.
    It's important to note that 'async' does not guarantee the order of script execution, 
    which can lead to potential issues with dependencies.
    In contrast, 'defer' ensures that scripts are executed in the order they appear in the document,
    making it a better choice when script order matters.*/

    /* Coding part */
    /* single element */
    const root = ReactDOM.createRoot(document.getElementById('reactEle'));
    const singleEle = React.createElement('h3',{class: 'single'}, 'Single HTML Element created using React');
    root.render(singleEle)

    /* nested Element */
    /*  <div id="child1">
            <h4></h4>
        </div>
        <div id="child2">
            <h4></h4>
        </div>
    */

   const root1  = ReactDOM.createRoot(document.getElementById('reactNestedEle'));
   const nestedEle = React.createElement('div',{id:'parent1'},[
    React.createElement('div',{id:'child1'}, React.createElement('h4',{},'Nested Child 1')),
    React.createElement('div',{id:'child2'}, React.createElement('h4',{},'Nested Child 2'))
   ])

   root1.render(nestedEle)






