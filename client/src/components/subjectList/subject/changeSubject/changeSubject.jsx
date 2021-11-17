import { useState } from 'react';
import {changeSubject} from'../../../../actions/subject';
import "./changeSubject.css";
const ChangeSubject=()=>{
    const [subject,setName]=useState("");
    const [semestr,setSemestr]=useState("");
    const [formcontrol,setFormControl]=useState("");
    const [credits,setCredits]=useState("");
    const ChangeSubject=(subject,semestr,formcontrol,credits)=>{
        changeSubject(subject,semestr,formcontrol,credits);
        setName("");
        setSemestr("");
        setFormControl("");
        setCredits("");
    }

    return(
        <div className="changeSubject">
            <input value={subject} onChange={e=>setName(e.target.value)} className="add_button" type="text" placeholder="Введите название предмета"/>
            <input value={semestr}onChange={e=>setSemestr(e.target.value)} className="add_button" type="text" placeholder="Введите семестр"/>
            <input value={formcontrol} onChange={e=>setFormControl(e.target.value)} className="add_button" type="text" placeholder="Введите форму контроля"/>
            <input value={credits} onChange={e=>setCredits(e.target.value)} className="add_button" type="text" placeholder="Введите количество кредитов"/>
            <button onClick={()=>ChangeSubject(subject,semestr,formcontrol,credits)}>Enter</button>
        </div>
    );
};
export default ChangeSubject;