import React from 'react';
import s from './MyPostInfo.module.css';

type MyPostInfoType = {
    addPost: (m: string) => void;
}

export function MyPostInfo(props: MyPostInfoType) {
let newPostEl=React.createRef<HTMLTextAreaElement>();
let addPost=()=> {
    if (newPostEl.current) {
    props.addPost(newPostEl.current.value)
    }

}
    return <div className={s.myPostInfo}>
        <div>My Posts</div>
        <div>
            <textarea ref={newPostEl}></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>
}