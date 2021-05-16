import React from 'react';
import {Header} from './Components/Header/Header';
import {Nav} from './Components/Nav/Nav';
import s from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Profile} from './Components/Profile/Profile';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Settings';
import {PostDateProps} from './Components/Profile/My posts/MyPosts';
import {DialogsPageProps} from './Components/Redax/State';

type AppProps={
    dateProfile:Array<PostDateProps>;
    dateDialogs:DialogsPageProps;
    addPost:(m:string)=>void;
}

function App( props:AppProps) {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Nav/>
                <div className={s.appWrapperContent}>
                    <Route path='/profile' render={()=><Profile date={props.dateProfile} addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs date={props.dateDialogs}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
