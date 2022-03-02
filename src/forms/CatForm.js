import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

const FormSchema =Yup.object(
   { 
       "name":Yup.string().required("Required")
    }
)


// {id:1, name:"Pants"}
export default function CatForm({ category={id:1, name:"Pants"} }) {
    const initialValues ={
        name:category?.name ?? ''
    };

    const handleSubmit =(values, resetForm)=>{
        if (!category){
            console.log('Creating Cat')
        }else{
            console.log('Editing Cat')
        }
        console.log(values)
        resetForm(initialValues);
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="name"
            name="name"
            type="text"
            sx={{mb:2, mt:2}}
            label="Name"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}        
        />
        <Button type="submit" sx={{width:"100%"}}>Submit</Button>
    </form>
  )
}
