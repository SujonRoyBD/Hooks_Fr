import { useForm } from "react-hook-form"
const HooksFrom = ()=>{
    const { register, handleSubmit, formState:{errors} } = useForm()
  const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form className="w-1/3 mx-auto p-10 rounded-lg shadow-lg bg-white border" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-base font-bold text-black w-full flex justify-start">Name</label> <br/>
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="Enter your name..." {...register("name", {required:true})}/>
                    {errors?.name && <span>This field is required</span>}
                </div>
                <div>
                    <label className="text-base font-bold text-black w-full flex justify-start">Email</label> <br/>
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="Enter your email..." {...register("email", {required:true})}/>
                    {errors?.email && <span>This field is required</span>}
                </div>
                <div className="flex justify-center items-center mt-2">
                    <input className=" rounded-lg py-2 px-6 bg-orange-500 text-white text-lg font-bold" type="submit"/>
                </div>
            </form>
        </div>
    )
}
export default HooksFrom ;