import React, { useState } from 'react';
type MessagesPropsType = {
    newmessages: Array<string>
}
export function Messages(props: MessagesPropsType) {
    console.log(props.newmessages)
    return (
        <>
        {props.newmessages.map((el,i)=><div key={i}>{el}</div>) }
        </>
    )
}