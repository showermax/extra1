import React, { ChangeEvent, useState } from 'react';

type ButtonPropsType = {
    onClickAdd: () => void
    name: string
}
export function Button(props: ButtonPropsType) {
    const onClickButtonHandler = () => {
        props.onClickAdd()
    }
    return (
        <>
            <button onClick={onClickButtonHandler}> {props.name} </button>
        </>
    )
}