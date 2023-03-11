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
    const onClickHandler=(mess: string) => {
        let newarr=[mess,...messages]
        setMessage(newarr)
    }
    return (
        <>
        <Input onClickAdd={onClickHandler}/>
        <Messages newmessages={messages}/>
        </>
    )
}