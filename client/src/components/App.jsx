import Navbar from "./navbar/Navbar";
import './app.css';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./authorization/Login";
import Curriculum from "./curriculum/Curriculum";
import AddCurriculum from "./curriculum/AddCurriculum/addCurriculum";
import AddSubject from "./subjectList/subject/addSubject/addSubject"
import Main from "./Main/Main";
//import Menu from "./Menu/Menu"
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";
import { useEffect } from "react";
import ChangeSubject from "./subjectList/subject/changeSubject/changeSubject";
function App() {
  const isAuth = useSelector(state=>state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  },[dispatch])

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <div className='wrap'>
        {!isAuth ?
        <Switch>
           <Route path="/registration" component={Registration}/>
           <Route path="/login" component={Login}/>
        </Switch>
        :
          <Switch>
            <Route path="/getCurriculum" component={Curriculum}/>
            <Route path="/addCurriculum" component={AddCurriculum}/>
            <Route path="/addSubjects" component={AddSubject}/>
            <Route path="/changeSubjects" component={ChangeSubject}/>
            <Route path="/" component={Main}/>
            <Redirect to="/"/>
          </Switch>
        }
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
