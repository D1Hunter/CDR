import './authorization.css'
import Input from '../input/input';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { login } from '../../actions/user';
const Login = ()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    return (
        <div className="authorization">
            <div className="authorization_header">Authorization</div>
            <Input value={username} setValue={setUsername} type="text" placeholder="Введите логин"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
            <button className="authorization_btn" onClick={()=>dispatch(login(username,password))}>Enter</button>
        </div>        
    );
};

export default Login;