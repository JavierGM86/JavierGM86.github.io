import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import linkedIn from './linkedin.png';
import gothub from './gothub.png';

function Links() {
    return (
        <Jumbotron className="linksJumbo">
        <Container className="linksContainer">
          <h1>Contact me and let's have a chat!</h1>
          <br></br>
          <Container className="linksLogos">
          <a href="https://www.linkedin.com/in/javier-garcia-martinez-javiscript/" target="_blank"><Image src={linkedIn} roundedCircle /></a>
          <a href="https://github.com/JavierGM86" target="_blank"><Image src={gothub} roundedCircle /></a>
        </Container>
        
        </Container>
      </Jumbotron>
    );
}

export default Links;