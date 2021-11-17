import { useSelector } from 'react-redux';
import './subjectList.css'
import Subject from './subject/subject';
const SubjectList=()=>{
    const isAuth = useSelector(state=>state.user.isAuth)
    const Subjects=useSelector(state=>state.subjects.subjects).map(subject=><Subject subject={subject}/>)
    if(!isAuth){
        Subjects.clear();
    }
    return (
        <div className="subjectList">
            <div className="subjectList_header">
                <div>Предмет</div>
                <div>Семестр</div>
                <div>Форма контроля</div>
                <div>Кредиты</div>
            </div>
            {Subjects}
        </div>
    );
};
export default SubjectList;