import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem, DialogsItemProps} from './DialogsItem/DialogsItem';
import {Message, MessageProps} from './Message/Message';
import {DialogsPageProps} from '../Redax/State';

type DialogsProps = {
    date: DialogsPageProps;
}
export function Dialogs(props: DialogsProps) {

    let dialogs = props.date.dialogsDate.map(d => (<DialogsItem name={d.name} id={d.id}/>));
    let talks = props.date.talksDate.map(t => <Message id={t.id} talk={t.talk}/>);
    return <div className={s.dialogsMain}>
        <div className={s.listDialogs}>
            {dialogs}
        </div>
        <div className={s.messages}>
            {talks}
        </div>
    </div>
}



