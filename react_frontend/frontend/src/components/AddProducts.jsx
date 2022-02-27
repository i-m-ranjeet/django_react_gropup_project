import React,{useState} from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
function AddProducts() {
    const {id} = useParams()
    const [image,setFile] = useState()
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()
    const [category,setCategory] = useState()
    const addProduct=(e)=>{
        e.preventDefault()
        let formfields = new FormData()
        formfields.append('name',name)
        formfields.append('price',price)
        formfields.append('description',description)
        formfields.append('actegory',category)
        formfields.append('name',name)
        if(image !== null){
            formfields.append('image',image)
        }
        console.log(formfields)
        console.log("formfields")
        axios.post(`http://127.0.0.1:8000/api/`,formfields).then(res=>{
            console.log(res.data)
        })
    }
    return (
        <div className="container w-50">

            <Form onSubmit={addProduct} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Choose an Image</Form.Label>
                    <Form.Control onChange={(e)=>setFile(e.target.files[0])} name="image" type="file"  /><img src={image} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Product Title</Form.Label>
                    <Form.Control onChange={(e)=>setName(e.target.value)} name="name" type="text" placeholder="Enter title" />{name}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Product Price</Form.Label>
                    <Form.Control onChange={(e)=>setPrice(e.target.value)} name="price" type="number" placeholder="Enter Price" />{price}
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control onChange={(e)=>setDescription} name="description" type="text" placeholder="Enter Description" />{description}
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Category </Form.Label>
                    <Form.Control onChange={(e)=>setCategory(e.target.value)} name="category" type="text" placeholder="Enter Category" />{category}
                    
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddProducts