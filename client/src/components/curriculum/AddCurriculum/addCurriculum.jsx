import { useState } from 'react';
import {addCurriculum} from'../../../actions/subject';
import "./addCurriculum.css";
const AddCurriculum=()=>{
    const [groupnumber,setGroupnumber]=useState("");
    const [subject,setName]=useState("");

    return(
        <div className="addCurriculum">
            <input value={groupnumber} onChange={e=>setGroupnumber(e.target.value)} type="text" placeholder="Введите номер группы"/>
            <input value={subject} onChange={e=>setName(e.target.value)} className="add_button" type="text" placeholder="Введите название предмета"/>
            <button onClick={()=>addCurriculum(groupnumber,subject)}>Enter</button>
        </div>
    );
};
export default AddCurriculum;