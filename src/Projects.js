import './App.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Projects() {
    return (
        <>
            <div className="projectsSite">
                <Accordion>
                    <Card bg="secondary">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="secondary" eventKey="0">
                                amiibo API consultor
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="bg1"><p>For my first project, I've chosen to work with an unofficial amiibo API to create a website
                                to help the users find their favourite figures looking for the series of the game in which they appear.
                                Once the figures appear, the user can add them to their favourites and remove them as they want.
                                For this project, I've used <b>HTML5</b> and <b>CSS3</b>.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="secondary">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="secondary" eventKey="1">
                                myDictionary
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="bg2"><p>For the second project, I've decided to join my english skills with my new developer skills.
                                I've created a dictionary app which allows users to put in a mongo database any word they want and then
                                look at all the words they have in its page. But also, the users can study these words with flashcards.
                                For this project, I've used <b>HTML5</b>, <b>CSS3</b> and <b>MongoDB</b>.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="secondary">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="secondary" eventKey="2">
                                myDictionary - React
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="bg3">Before doing the third project, we learnt how to use React and I thought that it would be great to have
                                my previous app but with this new framework. So, apart from porting the app to it, I've introduced new possibilities
                                such as studying english to spanish flashcards (in the previous version only spanish to english were available) and
                                the possibility of looking for new words in the unofficial Google Dictionary API and listen how they are correctly
                                pronounced. Also, I've introduced a typing game to help users improve their english typing skills. For this project,
                                I've used the <b>MERN</b> stack. (MongoDB, Express, React and node.js)
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="secondary">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="secondary" eventKey="3">
                                LiteAPP - for acceXible
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="bg4">For the final project, I've worked with two other students and partners to create an app for the company
                                acceXible. This app consists of a two-part test: a multiple choice exam and a chatbot. After performing both parts of
                                the test, the app will suggest the visit to a mental health professional if the results are high enough to do so. The
                                chatbot is done from scratch reading the responses of the user from a series of keywrods in a database.
                                For this project, we've used the <b>MERN</b> stack as well as React-Bootstrap for the design.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="secondary">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="secondary" eventKey="4">
                                The Breakout of Isaac - Python
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="bg5">For my first project on Python, and in order to learn the most basic commands after reading and
                            learning about Natural Language Processing (NLP), I've decided to create a cute mini-game with PyGame using sprites from one of my
                            favourite games ever: The Binding of Isaac. For this project, I've used <b>Python</b> and <b>PyGame</b> via Visual Studio Code and
                            gitBash console.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>
    );
}

export default Projects;