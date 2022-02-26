import React from 'react'
import  {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function DetailProduct() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link className='btn text-info warning-btn p-0 px-2' to="/update"><Button variant="warning" size="sm">Update</Button></Link>
                    <Button variant="primary" className="bg-danger text-light">Delete</Button>
                </Card.Body>
            </Card>

    </div>
  )
}

export default DetailProduct