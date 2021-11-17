//const SET_SUBJETS="SET_SUBJECTS";
const SET_CURRICULUM="SET_CURRICULUM";
const LOGOUT = "LOGOUT"

const defaultState={
    subjects:[]
}

export default function subjectReducer(state=defaultState,action){
    switch(action.type){
        /*case SET_SUBJETS:
            return {
                ...state,
                subjects:action.payload
            }*/
        case SET_CURRICULUM:
            return{
                ...state,
                subjects:action.payload
            }
        case LOGOUT:
            return{
                ...state,
                subjects: {}
                }
        default:
            return state;
    }
}

//export const setSubjects=(subjects)=>({type:SET_SUBJETS,payload:subjects});
export const setCurriculum=(subjects)=>({type:SET_CURRICULUM,payload:subjects});
export const slogout = () => ({type: LOGOUT})