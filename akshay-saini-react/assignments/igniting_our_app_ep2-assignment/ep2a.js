/* Theory Assignment */

/* 1. What is NPM?
A:  Npm manages all the node modules which are mentioned in package.It installs and downloads all the transitive dependency
node modules too */

/* What is Parcel/Webpack ? Why do we need it ?
A: Parcel and Web pack are the bundling tools which are used in web development to manage dependencies , optimize code and 
  bundle various assets such as HTML,CSS and JS, images which are used for deployment */

/* What is parcel-cache ?
A: Parcel-cache stores the expensive build files which in turn reduces compiling time whenever re compilation occurs. */

/* What is npx ?
A: npx is a tool to execute  node js packages without having to install them globally and locally
   When you run a command with npx it usually checks whether the command exists in node_modules/.bin. If not found,it 
   downloads and runs the command , ensuring that you always use the latest version of package */

/* What is the difference between dependencies and dev dependencies 
A: Dependencies are the packages which are required to put app in production , where dev dependencies are used for optimising 
/ making easy the development  
 Eg. Parcel is a dev dependency field because it helps in reducing prodcution build size */

 /* What is tree shaking 
 A: Tree shaking is a term commonly used in js to remove any sort of dead code while bundling large multiple js files
   to single js file */

/* What is Hot module replacement 
A: HMR is a fetature in which the modules can be added/ removed while running the application i.e by not reloading the
  application again . 
  How it works?
  a) application asks hmr runtime to check if there are any updates
  b) hmr then asynchronously downloads all the changes and notifies to application 
  c) applications asks hmr to apply the changes synchronously */

/*List down any 5 super powers of Parcel and describe them in your own words
  A: Parcel does have power of bundling, code splitting , HMR, image optimisations, tree shaking , provides dev build
     provides local server to host, Taking less time to build by applying parcel-cache techniques,
     uses file watching algorithm in c++, diagnostics, minification of files , compressing, differential bundling to support
     old browsers, Consistent Hashing

     a)Consistent Hashing : 
     Consistent Hashing is a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table
     by assigning them a position on an abstract circle, or hash ring.
     This allows servers and objects to scale without affecting the overall system.

     b)File watching algorithm in C++:
     Parcel always keeps eyes on our file system.
     Automatic Rebuilding : When developing a web application, developers often make frequent changes to their source files (e.g., JavaScript, CSS, HTML).
     Parcel's file watching algorithm automatically detects these changes and  triggers the necessary rebuild processes without manual intervention.

     Fast Feedback loop: Due to automatic rebuilding capacity , developers can instantly see the results of their changes

     Efficient memory utilizations: Parcel's file watching algorithm is designed to be efficient in terms of resource utilization.
     This minimizes CPU and disk I/O overhead, making the development experience smoother, especially in large projects with many files.
   
     c) Differential bundling to support old browsers:
      It is a technique to support old browsers, Parcel helps us to build these different types of bundles for different browsers

    d) Code splitting:
     Code splitting is the practice of splitting the code a web application depends on — including 
     its own code and any third-party dependencies — into separate bundles that can be loaded independently of each other

    e) Image optimisations:
     Image compressions, lazy loading attributes to image related optimisations
 */

/*  What is .git-ignore ? what and what not should be added into it 
A: Git ignore is a file in repository which provides information about  certain files and folders that should not be included
   in git opearations. Any part of project which can be regenerated should be involved in git ignore */

/* What is the difference between package.json and package-lock.json?
A: package.json contains the rquired package versions which have tildes and carats to the versions, where package-lock.json provides exact information about which
   package has been downloaded. It provides information about transitive packages too */

/* Why I should not modify package-lock.json 
A: package-lock.json is actually a regenerated file from npm install , Modifying it manually can lead to inconsistencies of the
   packages which are trying to depend on these particular packages */

/* What is node_modules ? is it good idea to push them to git ?
A: Node_modules are all the pacakage related files , which are downloaded when we run npm install. No this is not a good idea
   to push to git as they are regenerated and have high size */
   
/* What is dist folder ?
A: Dist folder contains the bundled assets.It contains bundled js files, bundles html files and anyother bundled files*/

/* What are browserLists?
A: browser lists indicates what versions of browsers , should our app supports and it enables differential bundling for each 
  different browser */

  /* Coding Assignment */
  import React from 'react';
  import ReactDOM from 'react-dom/client'

  const ele = React.createElement('h1', {id: 'heading1'}, 'This is assignment 2');
  const root = ReactDOM. createRoot(document.getElementById('root'));
  root.render(ele);
