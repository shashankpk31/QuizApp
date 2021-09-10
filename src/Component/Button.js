import React, { useState } from 'react'

export default function Button(props) {
    const [btncol, setbtncol] = useState('')
    const logic = (event) => {
        props.valuebtn(event.target.innerText)
       
        event.preventDefault();
    }
    const onHoverIn = (event) => {
        setbtncol("#6c757d")
        event.target.style.backgroundColor = btncol;
        event.preventDefault();
    }

    const onHoverout = (event) => {
        setbtncol("#ffc107")
        event.target.style.backgroundColor = btncol;
        event.preventDefault();
    }

    return (
        <button className=" m-2 btn btn-secondary" onMouseEnter={onHoverIn} onMouseLeave={onHoverout} onClick={logic}  >
            {props.val}
        </button>
    )
}
