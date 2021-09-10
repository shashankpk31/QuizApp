import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <hr/>
            <h2>Score {props.marks} out of {props.toQ}</h2>
        </div>
    )
}
