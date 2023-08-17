import { Col, Container, Image, Row } from 'react-bootstrap'
import img from "./../assets/todo.svg"
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
         <div>
        <Container>
            <Row>
                <div className="homepage-row vh-100 text-center d-flex justify-content-center align-items-center">
                <Col xs="6">
                    <div className="image">
                <Image src={img} fluid alt="to-do image" loading="lazy" />
                </div>
                </Col>
                <Col xs="6">
                <h1 className='text-light'>Create a to-do list </h1>
                <Link to="/to-do"> <button className='btn btn-light'>Create</button></Link>
                </Col>
                </div>
            </Row>
        </Container>
    </div> );
}
 
export default Homepage;
