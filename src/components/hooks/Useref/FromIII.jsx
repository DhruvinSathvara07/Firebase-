import React, { useState } from 'react'

const FromIII = () => {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        pwd: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data.fname, data.lname, data.email, data.pwd);
    }

    return (
        <>
            <div className="container mt-5">
                <form onClick={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">fname</label>
                        <input type="text" value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">lname</label>
                        <input type="text" value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={data.pwd} onChange={(e) => setData({ ...data, pwd: e.target.value })} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FromIII