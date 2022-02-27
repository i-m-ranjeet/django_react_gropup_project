import axios from 'axios'
import React,{useEffect,useState} from 'react'
import  {Card,Button} from 'react-bootstrap'
import {Link, useNavigate,useParams} from 'react-router-dom'


function DetailProduct() {
  const navigate = useNavigate()
  const [product,setProduct] = useState([])
      const {id} = useParams()
      useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/${id}`).then(res=>{
          setProduct([res.data])
        })
      },[])
      const deleteProduct = ()=>{
        axios.delete(`http://127.0.0.1:8000/api/${id}`).then(res=>{
        navigate('/')
        })
      }
  return (
    <div className="container w-50 py-5">
        {
          product.map(item=>(
            <Card className="m-4 p-5" border="secondary">
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
                    <Link className='btn text-info warning-btn p-0 px-2' to={`/update/${item.id}`} ><Button variant="warning" size="sm">Update</Button></Link>
                    <Button variant="primary" className="bg-danger text-light" onClick={deleteProduct}>Delete</Button>
                </Card.Body>
            </Card>
          ))
        }

    </div>
  )
}

export default DetailProduct