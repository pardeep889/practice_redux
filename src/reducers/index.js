import { combineReducers } from "redux";
import artists from './artists';

const rootReducer = combineReducers({
    artists:artists
})

export default rootReducer;