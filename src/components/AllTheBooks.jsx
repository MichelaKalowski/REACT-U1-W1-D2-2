import { Component } from "react";
import fantasy from "../Assets/fantasy.json";
import horror from "../Assets/horror.json";
import history from "../Assets/history.json";
import romance from "../Assets/romance.json";
import scifi from "../Assets/scifi.json";
import { Button, Card } from "react-bootstrap";

class AllTheBooks extends Component{

    render(){
        return(
            <>
            <div>
                {horror.map(book=> <Card key ={book.asin} style={{width:'18rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180"/>
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil harum natus blanditiis quae. Nihil aspernatur quasi aliquid, maiores vel, molestias inventore quam illum qui velit sequi pariatur, enim perspiciatis!
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                    </Card.Body>
                    </Card>)}

                
            </div>
            </>
        );
        }
        }
        export default AllTheBooks;