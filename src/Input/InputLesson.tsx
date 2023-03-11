import React, { useState } from 'react';
import { Input } from './Components/Input';
import { Messages } from './Components/Messages';

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