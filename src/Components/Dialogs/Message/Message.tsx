import React from 'react';

export type MessageProps = {
    id: number;
    talk: string;
}

export function Message(props: MessageProps) {
    return <div>
        {props.talk}

    </div>

}