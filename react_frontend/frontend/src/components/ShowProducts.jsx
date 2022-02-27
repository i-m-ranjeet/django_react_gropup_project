import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
function ShowProducts() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/').then((res) => {
            setData(res.data)
        })
    },[])

    return (
        <div className='container w-80 py-5' fluid style={{
            display:"flex", aligiItems:"center",justifyContent:"center",flexDirection:"row",flexWrap:"wrap"
        }}>

            {
                data.map(item => (
                    
                            <Card style={{ width: '18rem' }} className="m-4" border="secondary">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Title>
                                        {item.category}
                                    </Card.Title>
                                    <Card.Title>
                                        {item.price}
                                    </Card.Title>
                                    <Link className='btn text-info warning-btn p-0 px-2' to={`/detail/${item.id}`}><Button variant="warning" size="sm">Full Detail</Button></Link>
                                </Card.Body>
                            </Card>
                        
                ))
            }
        </div>
    )
}

export default ShowProducts