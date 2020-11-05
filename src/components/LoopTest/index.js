import React from 'react'
import { useCount } from '../../context/Count'

const LoopTest = () => {

    const { count } = useCount();

    return (
        <div>
            Total: {count}         
            <ul>{[...Array(count)].map((e, i) => {
                return <li key={i}>{i}</li>
            })}</ul>
        </div>
    )
}

export default LoopTest

