import { log } from 'console';
import React, { ChangeEvent, useState } from 'react';
import { Messages } from './Messages';
type PropsType = {
    onClickAdd: (mess1: string)=> void
}
export function Input(props:PropsType) {
    let [mess, setValue] = useState('')
    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return (
        <div>
            <input onChange={onchangeInputHandler} />
            <button onClick={()=>props.onClickAdd(mess)}> Add </button>
        </div>
    )
}