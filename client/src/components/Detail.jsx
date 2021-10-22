import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


const Detail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const getProductById = async () => {
        try{
            const detail = await axios.get(`http://localhost:8000/api/products/${id}`);
            console.log(product);
            setProduct(detail.data.product);
        }catch(error){
            console.log(error);
        }
    }

useEffect(() => {
console.log(id);
getProductById();
}, [id])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <h1 className="color-letters">{product?.title}</h1>
            <h2 className="color-letters">{product?.price}</h2>
            <p className="color-letters">{product?.description}</p>
            <hr />
            <Link to={`/update-product/${product?._id}`}>Editar Producto</Link>
        </div>
    )
}
export default Detail;