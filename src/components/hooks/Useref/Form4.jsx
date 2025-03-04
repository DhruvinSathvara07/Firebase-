import React from 'react'
import { useForm } from 'react-hook-form';


const Form4 = () => {
    const { register, handleSubmit } = useForm()

    const onsubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className="container mt-5">
                <form onClick={handleSubmit(onsubmit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" {...register("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" {...register("pwd")} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form4