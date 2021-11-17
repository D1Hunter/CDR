import './registration.css'
import Input from '../input/input';
import { useState } from 'react';
import { registration } from '../../actions/user';
const Registration = ()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div className="registration">
            <div className="registration_header">Registration</div>
            <Input value={username} setValue={setUsername} type="text" placeholder="Введите логин"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
            <button className="registration_btn" onClick={()=>registration(username,password)}>Enter</button>
        </div>        
    );
};

export default Registration;