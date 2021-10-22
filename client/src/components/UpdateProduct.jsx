import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const [product, setProduct] = useState ();
    const [loaded, setLoaded] = useState (false);
    const { id } = useParams();

    const getProductById = async () => {
        try{
            const detail = await axios.get(`http://localhost:8000/api/products/${id}`);
            console.log('get product', detail.data);
            setProduct(detail.data.product);
            setLoaded(true);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        getProductById();
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const history = useHistory();

    const updateTheProduct = async (e) => {
        e.preventDefault();
        console.log(product);
        try{
        const update = await axios.put(`http://localhost:8000/api/products/${id}`, product)
        console.log('Se actualizó el producto', update);
        Swal.fire({
            icon: 'success',
            title: 'Producto actualizado con éxito',
            showConfirmButton: false,
            timer: 2000
        })

        setTimeout(() => {
            history.push('/products');
        }, 1500);

        }catch(error){
            console.log(error);
        }
        

    };
    const handleInputChange = ({ target }) => {

        setProduct({
            ...product,
            [ target.name ]: target.value
        });
        console.log(product);

    }
    
    return (
    <div className="card">
        <h1 className="color-letters">Edita el Producto</h1>
        {loaded ? 
    <form onSubmit={updateTheProduct}>
    <p>
        <label className="color-letters">Título:</label><br />
        <input type="text" 
        name="title" 
        value={product.title}
        onChange={handleInputChange}
            />
    </p>
    <p>
        <label className="color-letters">Precio:</label><br />
        <input type="number" 
        name="price"
        value={product.price}
        onChange={handleInputChange}
            />
    </p>
    <p>
        <label className="color-letters">Descripción:</label><br />
        <input type="text" 
        name="description"
        value={product.description}
        onChange={handleInputChange} />
    </p>
    <button type="submit">Editar</button>
</form> 
    :null}
            
    </div>
    
    )
    
        }

export default UpdateProduct;
