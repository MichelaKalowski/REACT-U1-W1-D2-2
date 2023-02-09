import { Card, Button } from "react-bootstrap";

function WelcomePage() {
    return (
      <Card className="welcome" >
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2_HWl9zxB2Ol2g9Xblr2xyTadPj0x6j_25bbvEc0-SXwz8rOQCVw8fnvSNwxG67XW4Y&usqp=CAU" />
        <Card.Body>
          <Card.Title class="text-center text-dark">Passion For Reading</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button class="btn" >Learn More</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default WelcomePage;