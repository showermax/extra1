import React, { useState } from 'react';
type MessagesPropsType = {
    newmessages: Array<string>
}
export function Messages(props: MessagesPropsType) {
    return (
        <>
            {props.newmessages.map((el, i) => <div key={i}>{el}</div>)}
        </>
    )
}