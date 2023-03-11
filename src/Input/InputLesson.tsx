import React, { useState } from 'react';

export function InputLesson() {
    let [message, setMessage] = useState ( [
        {message:'Hello'},
        {message:'That is'},
        {message:'My first inpyt entry'}
    ]
    )
    return (
        <>
        <Input />
        <Messages />
        
        </>
    )
}