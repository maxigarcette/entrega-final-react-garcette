import { useContext, useState } from "react";
import { CartContext } from '../contexts/CartContext';
import { getFirestore, addDoc, collection} from 'firebase/firestore';
import { Table, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';


export const Cart = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const { clear, items, removeItem} = useContext(CartContext)

    const total = () =>
        items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        )
    
    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items,
            total: total(),
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            console.log(id)
            if (id) {
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
                clear()
                alert("Successful order number" + id)
            }
        })
    }

    return (
        items.length === 0 ? <div className="emptyCart"><h2>Cart's Empty</h2><Link to='/'><button>Go shopping</button></Link></div>
        :
        <Container>
            <h1 className="cartTitle">Cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.product}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => removeItem(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}     
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>${total().toFixed(2)}</td>
                    </tr> 
                </tfoot>
            </Table>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        onChange={handleChange}  
                        value={formValues.name} 
                        type="text" 
                        name="name" 
                        placeholder="Full name"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        onChange={handleChange}  
                        value={formValues.phone} 
                        type="text"
                        name="phone" 
                        placeholder="Phone number"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onChange={handleChange}  
                        value={formValues.email} 
                        type="email"
                        name="email" 
                        placeholder="Enter email address" 
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
            <button onClick={sendOrder}>Submit</button>
        </Container>
    )
}

