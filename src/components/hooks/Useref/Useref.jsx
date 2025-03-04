import React, { useRef } from 'react'


const Useref = () => {

    const name = useRef(null)
    const pwd = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name.current.value, pwd.current.value);

    }

    return (
        <>
            <div className="container mt-5">
                <form onClick={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" ref={name} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" ref={pwd} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Useref