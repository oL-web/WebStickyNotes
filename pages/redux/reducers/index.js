import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";
import accentReducer from "./accentReducer";
import noteReducer from "./noteReducer";

export default combineReducers({
    dialog:dialogReducer,
    accent:accentReducer,
    notes:noteReducer
});