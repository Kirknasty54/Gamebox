import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GameCards = () => {
  return (
 <Card className = 'ms-3' style={{ marginBottom: '12px' , width: '18rem' }}>
      <Card.Img variant="top" src='../src\image.svg'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default GameCards