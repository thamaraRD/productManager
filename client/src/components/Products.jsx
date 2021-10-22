import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Space } from 'antd';

const Products = () => {

const deleteProduct = async (id) =>{
try{
    const productErased = await axios.delete(`http://localhost:8000/api/products/${id}`);
    getAllProducts();
    console.log(productErased);

}catch(error){
console.log(error);
}
}

const [productList, setProductList] = useState([]);

const columns = [
    {
    title: 'TÍTULO',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
        console.log(text, record);
        return(
    <Space size="middle">
            <a href={`/products/${record.key}`}>{record.name}</a>
        </Space>
        )
    }
        },
    
    {
    title: 'PRECIO',
    dataIndex: 'price',
    key: 'price',
    },
    {
        title: 'ACCIONES',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
        <button onClick={() => deleteProduct(record.key)}>Eliminar</button>
        <a href={`/update-product/${record.key}`}>Editar Producto</a>
        </Space>
        ),
    },
    ];

    const data = productList?.map(product =>({
        key: product._id,
        name: product.title,
        price: product.price,
    }));

const getAllProducts = async () => {
try{
const products = await axios.get('http://localhost:8000/api/products');
console.log(products);
setProductList(products.data.products)

}catch(error){
console.log(error);
}

}
useEffect(() => {
getAllProducts();
}, [])

    return(
        <div className="card1">
            <h1 className="color-letters">Lista de Productos</h1>
            <ul>
                {productList?.map(product =>(
                    <li key={product._id}>{product.title}</li>
                ))}
            </ul>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default Products;