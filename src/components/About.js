import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React </h2>
            <User name={"Govinda Yadav(function)"}/>
            <UserClass name={"Govinda Yadav(Class)"}/>
        </div>
    )
}
export default About;