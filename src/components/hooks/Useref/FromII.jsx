import React, { useState } from 'react'

const FromII = () => {

    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, pwd);

    }
    return (
        <>
            <div className="container mt-5">
                <form onClick={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FromII