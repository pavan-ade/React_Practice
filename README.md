# React Practice
## Lec 01
### About 
- it was first released in 2023 
- it was originally created by jordan walke
- Has well over 100k starss on GitHUb
- Is mainteined by facebook
- powers thousabnds of enterprise apps, including mobile Apps
- react is a javaScript library

## CND Links
- <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
- <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
- <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
- These above links help to easy way set-up the React with CDN
## ReactDOM 
- it act like a Bridge between the Your React Component and Browser DOM
- And allowing you to render your React elements onto a web-page by providing methods to Manipulate
- its the key component for connecting React's Virtual DOM to the real DOM, enabling smooth updates and performance optimizations.
- example 
   ReactDOM.render(element, selected element );

## Lec 02
## Why React 
   - it's composable
   -  React allows developers to create components that can be used in multiple places, saving time and effort
   - genarally in web-devlopement have more repeated/boilore plate code (its fine with but if we wanna change any change i have to manually in every single page and place)
   - but when we use the react it help here a lot we gonna write a same on a component we reuse at multiple place when we need change that one change can refected to all apages where you use that component.
   - Products built with React are easy to scale 
   -  Data in React only flows one way, from parent components to their children. This makes it easier to track how data changes and fix problems.
   - React is easy to test with little or no configuration. Developers can use tools like Jest and Enzyme to write tests quickly
   - React can improve SEO performance by reducing website load time and enabling search engine crawlers to properly index a page
   - React can be easily integrated with other frameworks and libraries. 
   - React has a large ecosystem of open-source libraries
   - React has developer tools, browser extensions, and JSX syntax to help developers improve efficiency and productivity.
   - React's virtual DOM can reduce rendering time by up to 50% compared to traditional methods. It also allows developers to update components without having to update the entire DOM
   -  React Native allows developers to create apps for both web and mobile.

   ## JSX (javaScript XML)
   - jsx is a syntax extesion for javaScript that's used to create HTML like markup in React, a JavaScript Library
   - jsx is a mix of HTML and JavaScript systax tha allow you write markup inside a JavaScript file 
   - its similar to html, but its stricter and can display dynamic information.
   - its use to create dynamic markup, reduce Code, improve readability and Conditionally show elements.
   ### How does Work ?
   - JSX is transpiled into nested JavaScript calls.
   - The frist part of a JSX tag determines the type of the React element 
   - Example const welCome = `<h1> Welcome to React </h1>`    
   - - ReactDOM.createRoot( document.getElementById('root') )
   - - root.render(myElement);
## Lec 03
   ## Project set-up
   - for create a React project we need a Node js (prefere which have LTS)
   - for Create a project we have one cmd :
   - step 1 : npm create vite@latest (we have multiple cmds but this is prefered one).
   - step 2 : ? Project name: » vite-project (write your own Project)
   - step 3 : ? Package name: >> vite-project (write your own package)
   - step 4 : 
              `? Select a framework: » - Use arrow-keys. Return to submit.
                  Vanilla
                  Vue
               >  React
                  Preact
                  Lit
                  Svelte
                  Solid
                  Qwik
                  Angular
                  Others  `
      select here React 
   - step 5 : 
            ? Select a variant: » - Use arrow-keys. Return to submit.
               >   TypeScript
                  TypeScript + SWC
                  JavaScript
                  JavaScript + SWC
                  React Router v7 
            select your onw type (prefere one js)
   - step 6 : upto step 5 React Project architecture will be build.
   - step 7 : to run the Project use these cmd
               cd vite-project
               npm install
               npm run dev

-Project set up is complated