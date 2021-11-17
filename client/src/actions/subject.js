import axios from 'axios';
import { setCurriculum } from '../reducers/subjectReducer';

/*export function getSubjects(){
    return async dispatch => {
        try{
            const response=await axios.get(`http://localhost:5000/api/auth/subjects`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            console.log(response.data)
            dispatch(setSubjects(response.data));
        }catch(e){
            alert(e.response.data.message)
        }
    }
}*/
export const changeSubject=async (subject,semestr,formcontrol,credits)=>{
    try{
        const response = await axios.patch("http://localhost:5000/api/auth/changesubject",{
            subject,
            semestr,
            formcontrol,
            credits
        },{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        alert(response.data.message)
    }
    catch(e){
        alert(e.response.data.message);
    }
}

export function getCurriculum(groupnumber){
    return async dispatch => {
        try{
            const response=await axios.get(`http://localhost:5000/api/auth/getcurriculum?groupnumber=${groupnumber}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            console.log(response.data);
            dispatch(setCurriculum(response.data));
        }catch(e){
            alert(e.response.data.message)
        }
    }
}

export const addCurriculum=async(groupnumber,subject)=>{
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/addcurriculum`,{groupnumber,subject},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        )
        alert(response.data.message)
    }catch(e){
        alert(e.response.data.message);
    }
}

export const addSubjects=async (subject,semestr,formcontrol,credits)=>{
    try{
        const response =await axios.post("http://localhost:5000/api/auth/addsubjects",{
            subject,
            semestr,
            formcontrol,
            credits
        },{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        alert(response.data.message)
    }
    catch(e){
        alert(e.response.data.message);
    }
}