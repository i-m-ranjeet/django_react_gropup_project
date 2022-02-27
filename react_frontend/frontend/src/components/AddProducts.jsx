import React,{useState} from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AddProducts() {
    const [image,setFile] = useState()
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()
    const [category,setCategory] = useState()

    const navigate = useNavigate()

    const addProduct=(e)=>{
        e.preventDefault()
        let formfields = new FormData()
        formfields.append('name',name)
        formfields.append('price',price)
        formfields.append('description',description)
        formfields.append('category',category)
        formfields.append('name',name)
        if(image !== null){
            formfields.append('image',image)
        }

        console.log(formfields)
        console.log("formfields")
        axios.post(`http://127.0.0.1:8000/api/`,formfields).then(res=>{
            navigate('/')
        })
    }
    return (
        <div className="container w-50 my-4 py-5 border-primary">
            <div className="container  text-center"><h1>Add New Product</h1></div>
            <form onSubmit={addProduct} >
            <div className="mb-3" >
                    <label htmlFor='image'>Choose an Image</label>
                    <input class="w-100" required onChange={(e)=>setFile(e.target.files[0])} id="image" name="image" type="file"  />
                </div>
                <div className="mb-3" >
                    <label htmlFor='name'>Enter Product Title</label>
                    <input class="w-100" required onChange={(e)=>setName(e.target.value)} id="name" name="name" type="text" placeholder="Enter title" />
                </div>
                <div className="mb-3" >
                    <label htmlFor='price'>Enter Product Price</label>
                    <input class="w-100" required onChange={(e)=>setPrice(e.target.value)} id="price" name="price" type="number" placeholder="Enter Price" />
                    
                </div>
                <div className="mb-3" >
                    <label htmlFor='description'>Product Description</label>
                    <input class="w-100" onChange={(e)=>setDescription(e.target.value)} id="description" name="description" type="text" placeholder="Enter Description" />
                    
                </div>
                <div className="mb-3" >
                    <label htmlFor='category'>Product Category </label>
                    <input class="w-100" required onChange={(e)=>setCategory(e.target.value)} id="category" name="category" type="text" placeholder="Enter Category" />
                    
                </div>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>

        </div>
    )
}

export default AddProducts