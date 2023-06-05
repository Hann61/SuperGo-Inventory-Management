import profile from "../images/cat.jpeg";
import potato from "../images/potatoes.jpeg";
import tomato from "../images/tomato.jpeg";
import bread from "../images/bread.jpeg";
import rice from "../images/rice.jpeg";


function About() {

    return (
        <div className="container">
            <div className="intro">
                <img className="profile-picture" src={profile} alt="Profile"></img>
                <h1>Hello! My name is Han Li</h1>
                <p>I am a 4th year BCS student~ </p>
            </div>
            <hr />
            <h2 className="heading">What is SuperGo?</h2>
            <div className="about-grid">
                <div className="about-section">
                    <p>
                        SuperGo Inventory Management is a webpage for SuperGo staff to manage the grocery Inventory.
                        Therefore, staff can add, remove and delete the grocery inventory.
                    </p>
                </div>
            </div>
            <hr />
            <h2 className="heading">Sample Items</h2>
            <div className="highlights-grid">
                <img className="highlights-image" src={potato} alt="potato"></img>
                <img className="highlights-image" src={tomato} alt="tomato"></img>
                <img className="highlights-image" src={bread} alt="bread"></img>
                <img className="highlights-image" src={rice} alt="rice"></img>
            </div>
        </div>
    );
}

export default About;
