import React, { useState } from 'react';

export function Messages() {
    let [message, setMessage] = useState ( [
        {message:'Hello'},
        {message:'That is'},
        {message:'My first input entry'}
    ]
    )
    return (
        <>
        {message.map((el,i)=><div key={i}>{el.message}</div>) }
        </>
    )
}