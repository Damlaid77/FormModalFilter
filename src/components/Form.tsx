import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup' // !!!
import { yupResolver } from '@hookform/resolvers/yup' // !!!

export const Form = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required('Need fullName'), // required - обязательные поле
        // внутри сообщение в случае ошибки
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Don`t match')// ?
        .required(),
    })
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data);
        
    }
  return (
    <form 
        style={{display:'flex', flexDirection:'column', width: '300px'}}
        onSubmit={handleSubmit(onSubmit)}
    >
        <input type="text" placeholder='Full Name' {...register('fullName')}/>
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder='Email' {...register('email')}/>
        <p>{errors.email?.message}</p>
        <input type="text" placeholder='Age' {...register('age')}/>
        <p>{errors.age?.message}</p>
        <input type="password" placeholder='Password' {...register('password')}/>
        <p>{errors.password?.message}</p>
        <input type="password" placeholder='Confirm Password' {...register('confirmPassword')}/>
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit"/>
    </form>
  )
}
