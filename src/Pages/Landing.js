import { Container, Row, Col, Button} from "react-bootstrap"
import { useState} from 'react';
import { getAuth, onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom";

import LandingPageImg from '../assets/LandingPageImg.jpeg';
import Image from 'react-bootstrap/Image';
import Navbar from '../Components/Navbar';

const Landing = () => {
    const [show, setShow] = useState(false);
    const auth = getAuth();
    const [user, setuser] = useState(null)

    onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser);
    });

    let navi = useNavigate();
    const SaveNotes = () => {
        if(user) {
            console.log("Clicked");
            navi("/Home");
        } else {
            setShow(!show);
        }
    }

    return(
        <div>
            <Navbar />
            <Container>
                <Row className ="Land-row">
                    <Col className = "Land-col">
                        <Button variant="outline-dark" onClick={SaveNotes}>SAVE YOUR NOTES  </Button>
                    </Col>
                    <Col className = "Land-col-nxt">
                        <div>
                            <Image src={LandingPageImg} width="600" height="600"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Landing;