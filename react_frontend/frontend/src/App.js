import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProducts from './components/AddProducts';
import UpdateProduct from './components/UpdateProduct';
import DetailProduct from './components/DetailProduct';
import {Link, Routes, Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';


function App() {
  return (
    <>
      <nav className='nav-bar  bg-secondary p-2 nav w-100' style={{position:"fixed",top:"0",left:"0",zIndex:"9"}}>
        <Link className='sm-btn text-info warning-btn p-0 px-2' to="/"><Button variant="warning" size="sm">Home</Button></Link>
        <Link className='btn text-info warning-btn p-0 px-2' to="add"><Button variant="warning" size="sm">Add Product</Button></Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<ShowProducts />} />
        <Route exact path="add" element={<AddProducts />} />
        <Route exact path="update/:id" element={<UpdateProduct />} />
        <Route exact path="detail/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
