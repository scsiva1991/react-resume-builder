import {combineReducers} from 'redux';
import resumeReducer from './resumeReducer';

const reducer = combineReducers({
    resume: resumeReducer
});

export default reducer;
