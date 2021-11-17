import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getCurriculum} from '../../actions/subject';
import SubjectList from '../subjectList/subjectList';
import "./Curriculum.css";

const Curriculum=()=>{
    const [groupnumber,setGroupnumber]=useState("");
    const length=useSelector(state=>state.subjects.subjects.length)
    const dispatch = useDispatch();
    return(
        <div className="Curriculum">
            <input value={groupnumber} onChange={e=>setGroupnumber(e.target.value)} type="text" placeholder="Введите номер группы"/>
            <button onClick={()=>dispatch(getCurriculum(groupnumber))}>Enter</button>
            {length>0&& <SubjectList></SubjectList>}
        </div>
    )
}
export default Curriculum