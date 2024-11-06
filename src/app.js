import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"

/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1></h1>
 * <h2></h2>
 * 
 * </div>
 * <div id="child2">
 * <h1></h1>
 * <h2></h2>
 * 
 * </div>
 * </div>
 * 
 * ReactElement(Object) =>HTML(Browser undertsand)
 * 
 * CONFIG DRIVEN UI(IMPORTANT)
 */

/**
 * 
 * Header
 * -logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurant Container
 *  -Restaurant Card
 *   -Img
 *   -Name of Res, Star Rating, cuisine, delivery tie
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

// const parent = React.createElement("div", { id: "parnet" }, [
//     React.createElement("h1", { id: "child" }, 
//         [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
//         React.createElement("h1", { id: "child2" }, 
//             [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])
// ])
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)

//const heading = React.createElement("h1",{id:"heading"},"Namaste React")
//JSX(transpiled before it reaches the JS Engine)
// const heading =<h1  className="head" tabIndex="5">Namaste React using jsx</h1>

// const Title =() => {
//   return  <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
// }


// React Component
 //class Based Component -> OLD WAY
 // function Based Component -> NEW WAY

//  const number = 100000
  //React Functional Component
  //  const HeadingComponent = () => {
  //   {number}
  //    return <h1 className="heading">Namaste React Functional Component</h1>
  //  }

   // Component Composition
//    const HeadingComponent2 = () => {
//    return <div id="container">
//     <Title/>
   
//      <h1 className="heading">Namaste React Functional Component</h1>
//      </div>
//   }



// const root = ReactDOM.createRoot(document.getElementById("root"))

// render component
// root.render(<HeadingComponent2/>)

//root.render(heading)

// Props are just normal argument of a function











const AppLayout = () => {
   return(
    <div className="app">
     <Header/>
    <Outlet />
    </div>
   )
}

const appRouter = createBrowserRouter([
  
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
          path:"/",
          element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
         }
      ],
      errorElement:<Error/>
   },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)