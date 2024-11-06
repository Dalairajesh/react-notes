import React from "react"


class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count :0,
            count2:2,
            userInfo:{
                name:"Dummy",
                location:"Default",
               
            }
        }
        console.log(this.props.name+"Child Constructor")
    }

    async componentDidMount() {
        //componentDidMount use for API CALL
        // API Call
        console.log("Child Component Did Mount")

        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()

        this.setState({
            userInfo:json,
        })

        console.log(json)

    }

    render() {
        //const {name, location} = this.props
        const {count, count2} = this.state
        const {name, location, avatar_url} = this.state.userInfo

        console.log("Child Render")
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLE  DIRECTLY
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>Count Increase</button>
                <h1>Count2: {count2}</h1>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact:@rajesh</h4>
            </div>
        )
    }
}



export default UserClass;