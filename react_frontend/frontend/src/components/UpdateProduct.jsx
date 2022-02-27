import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function UpdateProduct() {
    const { id } = useParams()
    const [image, setFile] = useState()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState()

    const navigate = useNavigate()

    const update = (e) => {
        e.preventDefault()
        let formfields = new FormData()
        formfields.append('name', name)
        formfields.append('price', price)
        formfields.append('description', description)
        formfields.append('category', category)
        formfields.append('name', name)
        if (image !== null) {
            formfields.append('image', image)
        }

        console.log(formfields)
        console.log("formfields")
        axios.put(`http://127.0.0.1:8000/api/${id}/`, formfields).then(res => {
            navigate(`/detail/${id}`)
        })

    }
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${id}/`).then(res => {
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setCategory(res.data.category)
        })
    }, [])
    return (
        <div className="container w-50 my-4 py-5" border="dark">
            <div className="container  text-center"><h1>Update Product</h1></div>

            <form onSubmit={update} >
                <div className="mb-3" >
                    <label htmlFor='image'>Choose an Image</label>
                    <input class="w-100" required onChange={(e) => setFile(e.target.files[0])} id="image" name="image" type="file" />
                </div>
                <div className="mb-3" >
                    <label htmlFor='name'>Enter Product Title</label>
                    <input class="w-100" required onChange={(e) => setName(e.target.value)} value={name} id="name" name="name" type="text" placeholder="Enter title" />
                </div>
                <div className="mb-3" >
                    <label htmlFor='price'>Enter Product Price</label>
                    <input class="w-100" required onChange={(e) => setPrice(e.target.value)} value={price} id="price" name="price" type="number" placeholder="Enter Price" />

                </div>
                <div className="mb-3" >
                    <label htmlFor='description'>Product Description</label>
                    <input class="w-100" required onChange={(e) => setDescription(e.target.value)} value={description} id="description" name="description" type="text" placeholder="Enter Description" />

                </div>
                <div className="mb-3" >
                    <label htmlFor='category'>Product Category </label>
                    <input class="w-100" required onChange={(e) => setCategory(e.target.value)} value={category} id="category" name="category" type="text" placeholder="Enter Category" />

                </div>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </form>
        </div>
    )
}

export default UpdateProduct