import React from 'react'
import {Form,Button} from 'react-bootstrap'
function AddProducts() {
    const addProduct=(e)=>{
        e.preventDefault()
        
    }
    return (
        <div className="container w-50">

            <Form onSubmit={addProduct} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Choose an Image</Form.Label>
                    <Form.Control type="file"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Product Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Product Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Category </Form.Label>
                    <Form.Control type="text" placeholder="Enter Category" />
                    
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddProducts