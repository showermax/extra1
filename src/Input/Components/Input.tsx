import { log } from 'console';
import React, { ChangeEvent, useState } from 'react';
import { Messages } from './Messages';
type PropsType = {
    onClickAdd: (mess: string)=> void
}
export function Input(props:PropsType) {
    let [mess, setValue] = useState('')
    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.onClickAdd(mess)
        setValue('')
    }
    return (
        <div>
            <input onChange = {onchangeInputHandler} value={mess} />
            <button onClick = {onClickButtonHandler}> Add </button>
        </div>
    )
}