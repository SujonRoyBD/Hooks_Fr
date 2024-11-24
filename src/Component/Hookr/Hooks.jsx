import React from 'react'
import { useForm } from "react-hook-form"
const hooks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className='flex items-center justify-center mt-7'>

            <form className='border-2 shadow-lg w-[350px] bg-white' onSubmit={handleSubmit(onSubmit)}>
                <label className='font-bold px-4  ' htmlFor="name">name :</label> <br />
                <input className='border-2 ml-4 text-base ' {...register("name", {required:true})}/> <br />
                {errors?.name && <span className='ml-9'>This field is required</span>} <br />
                <label className='font-bold px-4  ' htmlFor="Email">Email :</label> <br />
                <input className='border-2 ml-4 text-base ' {...register("Email", {required:true})}/> <br />
                {errors?.name && <span className='ml-9'>This field is required</span>} <br />
                <input className='border-2 px-3 bg-red-500 rounded-md flex justify-center items-center' type="submit" />
            </form>


        </div>
    )
}

export default hooks

