import * as data from '../constant/data';

export default (state = data.homeworkQuiz, action) => {
    switch (action.type) {
        case "REFRESH_HOMEWORK_LIST":
            return action.homeWorkQuiz;
        default:
            return state
    }
}