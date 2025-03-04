import React, { useEffect, useState } from 'react'

const Miniprogramme = () => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        setInterval(() => {
            const Updatedata = new Date();
            setTime(Updatedata.toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <>
            <h1>Time : {time}</h1>
        </>
    )
}

export default Miniprogramme