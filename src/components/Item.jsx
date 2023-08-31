import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => (

    <Card className='cardComplete' style={{ width: '18rem'}}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body className='cardBody'>
            <Card.Title>{item.product}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Button className='buttonCard' variant="primary">Ver mas</Button>
        </Card.Body>
    </Card>
);