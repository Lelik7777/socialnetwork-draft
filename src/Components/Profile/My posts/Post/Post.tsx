import React from 'react';
import s from './Post.module.css';

export type PostProps = {
    active: boolean;
    message: string;
    countLike: number;

}

export function Post(props: PostProps) {
    {
        return !props.active ?
            <div className={s.item}>
                <img src="https://www.blexar.com/avatar.png" alt="logo"/>
                <span>{props.message}</span>
                <div><span>like {props.countLike}</span></div>
            </div>
            :
            <div className={s.active}>
                <img src="https://www.blexar.com/avatar.png" alt="logo"/>
                <span>{props.message}</span>
                <div><span>like {props.countLike}</span></div>
            </div>
    }

}