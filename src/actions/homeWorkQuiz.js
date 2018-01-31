import HTTP_CODE from '../constant/http-code'
import * as request from '../constant/fetch-request'


export const refreshHomeWorkQuizList = homeworkQuiz => ({
    type: 'REFRESH_HOMEWORK_LIST',
    homeworkQuiz
});

export const getHomeWorkQuiz = () => {
    return dispatch => {
        (async () => {
            const res = await request.get(`/api/homeWorks`);
            if (res.status === HTTP_CODE.OK) {
                dispatch(refreshHomeWorkQuizList(res.body))
            }
        })()
    }
};