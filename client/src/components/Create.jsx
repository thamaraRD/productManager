import React from "react";
import styles from './Create.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';


const Create = () =>{
    const SignupSchema = Yup.object().shape({
        Título: Yup.string()
        .min(2, 'La palabra no puede tener menos de 2 caracteres')
        .required('Debe ingresar una palabra'),
        Precio: Yup.number()
        .required('Debe tener un precio'),
        Descripción: Yup.string()
        .required('Debe describir el artículo'),
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
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: `${error.response.data.error}`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
    
    return(
        <>
        <h1>Product Manager</h1>
        <div className={styles.card}>
        <Formik
    initialValues={{
        Título: '',
        Precio: '',
        Descripción: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={createProduct}
    >
    {({ errors, touched }) => (
        <Form>
            <label htmlFor="Título">Título</label>
        <Field name="Título" />
        {<errors className="Título"></errors> && touched.Título ? (
            <div className={styles.errors}>{errors.Título}</div>
        ) : null}
        <label htmlFor="Precio">Precio</label>
        <Field name="Precio" type="number" />
        {errors.Precio && touched.Precio ? (
            <div className={styles.errors}>{errors.Precio}</div>
        ) : null}
        <label htmlFor="Descripción">Descripción</label>
        <Field name="Descripción" />
        {errors.Descripción && touched.Descripción ? (
            <div className={styles.errors}>{errors.Descripción}</div>
        ) : null}
        <button type="submit">Create</button>
        </Form>
    )}
    </Formik>
        </div>
        </>
    )
}
export default Create;