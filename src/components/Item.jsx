import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({item}) => (

    <Card className='cardComplete' style={{ width: '18rem'}}>
        <Link to={`/item/${item.id}`}><Card.Img variant="top" src={item.img} /></Link>
        <Card.Body className='cardBody'>
            <Card.Title>{item.product}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
            <Card.Text>
                Stock disponible: {item.stock}
            </Card.Text>
            <Card.Text>
                ${item.price}
            </Card.Text>
            <Link to={`/item/${item.id}`}><Button className='buttonCard' variant="primary">Ver mas</Button></Link>
        </Card.Body>
    </Card>
);