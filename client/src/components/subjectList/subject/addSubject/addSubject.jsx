import "./addSubject.css";
import { useState } from 'react';
import {addSubjects} from'../../../../actions/subject';
const AddSubject=()=>{
    const [subject,setName]=useState("");
    const [semestr,setSemestr]=useState("");
    const [formcontrol,setFormControl]=useState("");
    const [credits,setCredits]=useState("");
    const AddSubjects=(subject,semestr,formcontrol,credits)=>{
        addSubjects(subject,semestr,formcontrol,credits);
        setName("");
        setSemestr("");
        setFormControl("");
        setCredits("");
    }

    return(
        <div className="addSubject">
            <input value={subject} onChange={e=>setName(e.target.value)} className="add_button" type="text" placeholder="Введите название предмета"/>
            <input value={semestr}onChange={e=>setSemestr(e.target.value)} className="add_button" type="text" placeholder="Введите семестр"/>
            <input value={formcontrol} onChange={e=>setFormControl(e.target.value)} className="add_button" type="text" placeholder="Введите форму контроля"/>
            <input value={credits} onChange={e=>setCredits(e.target.value)} className="add_button" type="text" placeholder="Введите количество кредитов"/>
            <button onClick={()=>AddSubjects(subject,semestr,formcontrol,credits)}>Enter</button>
        </div>
    );
};
export default AddSubject;