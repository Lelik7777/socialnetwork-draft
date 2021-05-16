import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostInfo} from './MyPostInfo/MyPostInfo';
export type PostDateProps={
    countLike:number;
    message:string;
    active:boolean;
}
type MyPostsProps={
    date:Array<PostDateProps>;
    addPost:(m:string)=>void;
}
export function MyPosts(props:MyPostsProps) {

    let post = props.date.map(p => <Post countLike={p.countLike} message={p.message} active={p.active} />)
    return <div className={s.myPosts}>
        <MyPostInfo addPost={props.addPost}/>
        {post}

    </div>
}