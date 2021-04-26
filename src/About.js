import './App.css';
import Foto from "./foto.jpg";

function About() {
    return (
        <>
            <div className="aboutPage">
                <img className="imagenCabecera" src={Foto} width="400" />
                <div className="aboutMe">
                    <h2>Who am I?</h2>
                    <p>My name is Javier and I'm an English studies graduate as well as
                        a Javascript Fullstack Developer.
                    </p>
                    <h2>What am I currently interested in?</h2>
                    <p>I'm currently looking for my first job opportunity in the Developer
                        world! Also, I'm studying Python because I'm very interested in
                        Natural Language Processing!
                    </p>
                    <h2>What can I offer?</h2>
                    <p>I can offer a well-trained worker who is always looking for new things
                        to learn and not afraid of asking for help. I can adapt to job
                        places easily, a good partner and lots of laughs.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;