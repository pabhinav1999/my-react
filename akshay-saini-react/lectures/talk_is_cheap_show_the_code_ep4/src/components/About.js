import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="aboutContainer" >
            <h1> This is about page</h1>
            <h1> Lets Introduce team members</h1>
            {/* <User name={'Abhinav'} location={'Hyderabad'} /> */}
            <UserClass name={'Vikas Khanna Class'} location={'Mumbai Class'}/>
        </div>
    )
}

export default About;