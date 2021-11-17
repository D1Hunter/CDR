import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import subjectReducer from "./subjectReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user:userReducer,
    subjects:subjectReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))