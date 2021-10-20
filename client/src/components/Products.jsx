import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Space } from 'antd';

const Products = () => {

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
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //       <Space size="middle">
    //         <a>Invite {record.name}</a>
    //         <a>Delete</a>
    //       </Space>
    //     ),
    //   },
    ];

    const data = productList?.map(product =>({
        key: product._id,
        name: product.Título,
        price: product.Precio,
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
                    <li key={product._id}>{product.Título}</li>
                ))}
            </ul>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default Products;