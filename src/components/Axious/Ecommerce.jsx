import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Ecommerce = () => {
    const [storedata, setstoredata] = useState([])
    const fetchingData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products")
        setstoredata(result.data)
        // console.log(result.data);


    }
    useEffect(() => {
        fetchingData();
    }, [])

    return (
        <>
            {
                storedata && storedata.map((item) => {
                    console.log(item);
                    return (
                        // <div className="col-lg-4">
                        <div className='d-flex'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <button className='btn btn-dark'>Add to cart</button>
                                </div>
                                {/* </div> */}
                                {/* <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div> */}
                            </div>
                        </div>
                    )
                })
            }


        </>
    )
}

export default Ecommerce