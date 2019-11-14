import React from 'react';
import { Link } from 'react-router-dom';
import { Card , CardDeck} from 'react-bootstrap';


function ProducstsList(props) {
   

    return (
        <CardDeck style={{ margin: '15px' }}>
            {console.log(props)}
            {props.products.map(product => (
                <Link  key={product.id} to={"/detail/"+props.type+"/"+product.id}>
                    <Card bg="dark" text="white"  style={{ width: '16rem', margin: '15px' }}>
                        <Card.Img variant="top" src={product.image}/>
                        <Card.Body>
                            <Card.Title> {product.name} </Card.Title>
                            <Card.Text>
                                {product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            ))}
        </CardDeck>
    );
}

export default ProducstsList;