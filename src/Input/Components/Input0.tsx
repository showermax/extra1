import React, { ChangeEvent, useState } from 'react';


type Input0PropsType = {
    setMessprops: (mess: string) => void
    messprops: string
}

export function Input0(props: Input0PropsType) {
    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessprops(event.currentTarget.value)
    }
    return (
        <>
            <input onChange={onchangeInputHandler} value={props.messprops} />
        </>
    )
}