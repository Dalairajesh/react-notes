import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props)
        console.log("Constructor")
    }
    render () {
        console.log("Parent Render")
      return (
        <div>
            <h1>About Class Component</h1>
            <h2>This is Namaste React Web  Series</h2>
            <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"}/>
            <UserClass name={"Elon Musk"} location={"US"}/>
        </div>
      )
    }
}

/**
 * 
 * -Parent Constructor
 * -Parnet Render
 *   -Akshay COnstructor
 *   - Akshay Render
 *   
 * 
 *   - Elon COnstructor
 *   - Elon Render
 *   - Elon ComponentDidMount
 *   - Akshay ComponetDidMount
 * - Parent ComponentDidMount
 */
export default About;