import React from 'react'

const PropDrilling = () => {
    return (
        <>
            <h1>Components A</h1>

            <ChildComponent data="React JS" />
        </>
    )
}

export default PropDrilling

const ChildComponent = ({ props }) => {
    return (
        <>
            <h2>Components B</h2>
            {/* console.log(props); */}
            <GrandChildComponent data={props} />
        </>
    )
}


const GrandChildComponent = ({ props }) => {
    return (
        <>
            <h2>Components C</h2>
            {/* console.log(props); */}
            <GrandgrandChildComponent data={props} />
        </>
    )
}

const GrandgrandChildComponent = ({ props }) => {
    return (
        <>
            <h2>I am ggc Hello i am react js</h2>
            {/* console.log(props); */}
        </>
    )
}