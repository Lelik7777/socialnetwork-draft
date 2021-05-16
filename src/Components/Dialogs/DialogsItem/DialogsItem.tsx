import React from 'react';
import {NavLink} from 'react-router-dom';

export type DialogsItemProps = {
    name: string;
    id: number;
}

export function DialogsItem(props: DialogsItemProps) {
    return <div>
        <div>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    </div>
}
