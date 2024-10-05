
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
 */

const parent = React.createElement("div", { id: "parnet" }, [
    React.createElement("h1", { id: "child" }, 
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
        React.createElement("h1", { id: "child2" }, 
            [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])
])
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
