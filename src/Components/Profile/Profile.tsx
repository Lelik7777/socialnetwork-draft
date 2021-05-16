import React from 'react';
import {MyPosts, PostDateProps} from './My posts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfileProps={
    date:Array<PostDateProps>
    addPost:(m:string)=>void;
}

export function Profile(props:ProfileProps) {
    return <section>
        <ProfileInfo/>
        <MyPosts date={props.date} addPost={props.addPost}/>
    </section>
}