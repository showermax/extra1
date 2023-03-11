import React, { useState } from 'react';
import { Input } from './Components/Input';
import { Messages } from './Components/Messages';
// export type MessageStateType = string
export function InputLesson() {
    let [messages, setMessage] = useState ( [
        'Hello',
        'That is',
        'My first input entry'
    ]
    )
    const AddMessage=(mess: string) => {
        setMessage([mess,...messages])
    }
    return (
        <>
        <Input onClickAdd={AddMessage}/>
        <Messages newmessages={messages}/>
        </>
    )
}