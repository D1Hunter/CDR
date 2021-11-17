import { useSelector } from "react-redux";
const Main=()=>{
    const user=useSelector(state=>state.user.currentUser);
    return(
        <div>
            <h1>Добро пожаловать {user.username}</h1>
        </div>
    );
}
export default Main;