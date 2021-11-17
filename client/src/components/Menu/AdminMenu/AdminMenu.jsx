import './AdminMenu.css';
import '../Link/Link.css';
import { NavLink } from 'react-router-dom';
const AdminMenu=()=>{
    return(
        <div className="Menu">
            <NavLink className="Link" to="/getCurriculum">GetCurriculum</NavLink>
            <NavLink className="Link" to="/addCurriculum">AddCurriculum</NavLink>
            <NavLink className="Link" to="/addSubjects">AddSubjects</NavLink>
            <NavLink className="Link" to="/changeSubjects">ChangeSubjects</NavLink>
        </div>
    );
}

export default AdminMenu;