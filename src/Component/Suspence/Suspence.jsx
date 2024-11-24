import React from 'react'
const data = [
    {
        id: "e",
        name: "ww",
    },
    {
        id: "r",
        name: "rr",
    },
    {
        id: "eee",
        name: "rrrrr"
    },
]


const Suspence = () => {
    return (
        <div>
            {
                data.map((index) => {
                    return <div  key={index.id}>
                        <h3 className={`border-2`}>{index.id}</h3>
                        <h1 className={`border-r-2 border-l-2 ${index.id === "eee" && "border-b-2"}`}>  {index.name}  </h1>

                    </div>
                })
            }
        </div>
    )
}

export default Suspence

