// What is ReactJs ?

// ReactJs is a js library used for building user interfaces.
// Developed by Facebook
// It is used for building reusable UI components.
// It enables the creation of reusable UI components and efficient rendering.
// ReactJs follows SPA (Single Page Applications)


// Before React 19

// npx method
// npx create-react-app appname

// After react19 version
// npm create vite@latest appname
// npm create vite@latest .
// npm install
// npm run dev

// index.html    <---  main.jsx   <--- App.jsx 

// Note points :

// html - class - attribute
// js - class - object
// css - class - selector
// reactJs - class - component
// reactJs - className - attribute




// What is JSX :

// JSX stands for Javascript XML.
// It allows you to write HTML-like syntax directly inside Javascript code.

// How JSX differs from normal HTML :
// JSX is case sensitive.

// JSX looks similar to HTML but has some key differences :
    // use className instead class, because class is reserved keyword in the Javascript.
    // All tags must be properly closed (eg.  <img />, <br />,   )
    // Only one parent can be returned from a component. (Wrap everything inside a single div or <> </>)
    // We can embed js expressions using curly braces like {expression}

// Components :
// Components are reusable pieces of code that can be used to build a user interface.
// Components can be created in two different approaches

    // Functional Components
    
    //    FC are nothing but js funtions which optionally accepts states and props as an input and returns jsx as an output.


    // Class Components

    //    CC are nothing but js classes which optionally accepts states and props as an input and returns jsx


// Props :
// Props stands for properties.
// Props are immutable and are passed from parent to child components.
// Props are used to pass data from parent to child components.

// Props are nothing but user defined attributes



// Tags  - single, paried

// Single - Either opening / closing
// Paired - Both opening and closing
// Self closing - Both opening and closing with a slash at last (after tagName)