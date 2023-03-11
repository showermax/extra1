import React, { useState } from 'react';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import { Input0 } from './Components/Input0';
import { Messages } from './Components/Messages';

export function InputLesson() {
    let [mess, setMess] = useState('')

    let [messages, setMessage] = useState([
        'Hello',
        'That is',
        'My first input entry'
    ]
    )
    
    const AddMessage = () => {
        setMessage([mess, ...messages])
        setMess('')
    }
    
    return (
        <>
            <div>
                <Input0 setMessprops={setMess} messprops={mess} />
                <Button onClickAdd={AddMessage} name='Add' />
            </div>
            <Messages newmessages={messages} />
            <Input onClickAdd={AddMessage} />
            <Messages newmessages={messages} />
        </>
    )
}