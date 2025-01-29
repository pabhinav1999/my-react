import User from "./User";
import React from "react";
import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <div className="aboutContainer" >
//             <h1> This is about page</h1>
//             <h1> Lets Introduce team members</h1>
//             {/* <User name={'Abhinav'} location={'Hyderabad'} /> */}
//             <UserClass name={'Vikas Khanna Class'} location={'Mumbai Class'}/>
//         </div>
//     )
// }

 class About extends React.Component {

    constructor(props) {
        console.log('constructor of parent called')
        super(props)
    }

    componentDidMount() {
        console.log('component mount of parent is called')
    }
    render() {
    console.log('render of parent is called')
    return(
        <div className="aboutContainer" >
        <h1> This is about page</h1>
        <h1> Lets Introduce team members</h1>
        <UserClass name={'Abhinav'} location={'Mumbai'}/>
    </div>
    )

    }
}

export default About;