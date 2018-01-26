import HTTP_CODE from '../constant/http-code'
import * as request from '../constant/fetch-request'


export const refreshProgramList = program => ({
    type: 'REFRESH_PROGRAM_LIST',
    program
});

export const getProgram = () => {
    return dispatch => {
        (async () => {
            const res = await request.get(`/api/programs`);
            if (res.status === HTTP_CODE.OK) {
                dispatch(refreshProgramList(res.body))
            }
        })()
    }
};