import {PostDateProps} from '../Profile/My posts/MyPosts';
import {DialogsItemProps} from '../Dialogs/DialogsItem/DialogsItem';
import {MessageProps} from '../Dialogs/Message/Message';
import {rerenderReactTree} from '../../render';
import {PostProps} from '../Profile/My posts/Post/Post';

export type DialogsPageProps={
    dialogsDate:Array<DialogsItemProps>
    talksDate:Array<MessageProps>
}

export type StateProps={
    dialogsPage: DialogsPageProps;
    postDate:Array<PostDateProps>;
}

  let state:StateProps={
    'dialogsPage':{
        'dialogsDate':[
            {'id': 1, 'name': 'Alex'},
            {'id': 2, 'name': 'Ann'},
            {'id': 3, 'name': 'Nick'},
            {'id': 4, 'name': 'Bob'},
        ],
        'talksDate':[
            {'id': 1, 'talk': `Hello`},
            {'id': 1, 'talk': `How are you`},
            {'id': 1, 'talk': `Do your learn React?`},
            {'id': 1, 'talk': `Wow`},
        ]
    },
    'postDate': [
        {countLike: 5, message: 'Hi, it`s my first post', active: false},
        {countLike: 45, message: 'I`m going to go to sea', active: true},
        {countLike: 56, message: 'It`s a cool weather ', active: false},
    ]
};
export function addPost(message:string){
    debugger
    let newPost:PostProps={countLike:0,message:message,active:false}
    state.postDate.push(newPost);
    rerenderReactTree(state);
}
  export default state;
