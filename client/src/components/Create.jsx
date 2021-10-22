import React from "react";
import styles from './Create.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const Create = () =>{
    const SignupSchema = Yup.object().shape({
        title: Yup.string()
        .min(2, 'La palabra no puede tener menos de 2 caracteres')
        .required('Debe ingresar una palabra'),
        price: Yup.number()
        .min(2, 'El precio debe tener al menos 2 dígitos')
        .required('Debe tener un precio'),
        description: Yup.string()
        .min(2, 'Debe describir más el artículo')
        .required('Debe describir el artículo')
    });

    const createProduct = async (values) => {
        try{
            const response = await axios.post('http://localhost:8000/api/products', values)
            console.log(response.data);
            Swal.fire({
                title: 'Guardado con exíto',
                text: 'Tu producto se ha guardado con exíto',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        }
        catch(error){
            console.log(error.response.data.error.message);
            Swal.fire({
                title: 'Error!',
                text: error.response.data.error.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    
    return(
        <>
        <h1 className="color-letters">Product Manager</h1>
        <div className={styles.card}>
        <Formik
    initialValues={{
        title: '',
        price: '',
        description: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={createProduct}
    >
    {({ errors, touched }) => (
        <Form>
            <label className="color-letters" htmlFor="title">Título:</label>
        <Field name="title" />
        {<errors className="title"></errors> && touched.title ? (
            <div className={styles.errors}>{errors.title}</div>
        ) : null}
        <label className="color-letters" htmlFor="price">Precio:</label>
        <Field name="price" type="number" />
        {errors.price && touched.price ? (
            <div className={styles.errors}>{errors.price}</div>
        ) : null}
        <label className="color-letters" htmlFor="description">Descripción:</label>
        <Field name="description" />
        {errors.description && touched.description ? (
            <div className={styles.errors}>{errors.description}</div>
        ) : null}
        <button type="submit">Crear</button>
        </Form>
    )}
    </Formik>
        </div>
        </>
    )
}
export default Create;