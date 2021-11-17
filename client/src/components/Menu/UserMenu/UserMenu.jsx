import { NavLink } from 'react-router-dom';
import '../Link/Link.css'
const UserMenu=()=>{
    return(
        <div className="Menu">
            <NavLink className="Link" to="/getCurriculum">GetCurriculum</NavLink>
        </div>
    );
}

export default UserMenu;