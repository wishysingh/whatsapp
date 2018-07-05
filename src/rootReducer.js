import { contactReducer } from "./reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    searchingContact: contactReducer
});

export default rootReducer;