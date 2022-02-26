import React,{useState} from 'react'
import  {Card,Button} from 'react-bootstrap'
import {Link } from 'react-router-dom'
function ShowProducts() {
    const [data,setData] = useState([])
    return (
        <div className='container '>

            {
                data.map(item=>(
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                       {item.description}
                    </Card.Text>
                    <Card.Title>
                       {item.category}
                    </Card.Title>
                    <Card.Title>
                       {item.price}
                    </Card.Title>
                    <Link className='btn text-info warning-btn p-0 px-2' to="/detail"><Button variant="warning" size="sm">Full Detail</Button></Link>
                </Card.Body>
            </Card>
                ))
            }
        </div>
    )
}

export default ShowProducts