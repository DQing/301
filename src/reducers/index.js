import {combineReducers} from 'redux'
import program from './program';
import paper from './paper';
import homeWorkQuiz from './homeWorkQuiz';

export default combineReducers({
    program,
    paper,
    homeWorkQuiz
})