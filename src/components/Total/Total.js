import React, { useState,useEffect } from 'react'
const Total = ({data}) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        console.log("cambio de total")
        if (data){
            let count=0
            data.map((e) => {
                count +=  Number(e.attributes.price)
            })
            setTotal(count)
        }else{
            setTotal(0)
         }
    }, [data])
    return (
        <div className="text-uppercase mt-4 fw-bold">
            Total:$ {total}
        </div>
    )
}

export default Total
