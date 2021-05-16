import React from 'react';
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return   <div className={s.profileInfo}>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMaEGR2Ay4I_RfKboEhvES7qxi7EvtpTiBw&usqp=CAU"
            alt="content"/>
        <div>avatar+describe</div>
        </div>
}