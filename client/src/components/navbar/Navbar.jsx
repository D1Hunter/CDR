import './navbar.css'
import logo from '../../img/Logo.png';
import AdminMenu from '../Menu/AdminMenu/AdminMenu';
import UserMenu from '../Menu/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { logout } from '../../reducers/userReducer';

const Navbar=()=>{
    const isAuth = useSelector(state=>state.user.isAuth)
    const user=useSelector(state=>state.user.currentUser);
    const checkRole=()=>{
        let bflag=false;
        user.role.forEach(element => {
          if(element ==='Admin'){
            bflag=true;
          }
    });
    return bflag;
    }
    const dispatch= useDispatch();
    return(
        <div className="navbar">
            <div className="container">
                <img src={logo} alt="" className="navbar_logo" />
                <div className="navbar_header">CDS</div>
                {!isAuth && <div className="navbar_login"><NavLink to="/login">Login</NavLink></div>}
                {!isAuth && <div className="navbar_registration"><NavLink to="/registration">Registration</NavLink></div>}
                {isAuth && checkRole()&&<AdminMenu></AdminMenu>}
                {isAuth &&!checkRole()&&<UserMenu></UserMenu>}
                {isAuth&& <div className="navbar_logout" onClick={() => dispatch(logout())}>Выход</div>}
            </div>
        </div>
    );
}

export default Navbar;