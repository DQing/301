const initState = ['test1', 'test2', 'test3'];

export default (state = initState, action) => {
    switch (action.type) {
        case "REFRESH_PROGRAM_LIST":
            return action.program;
        default:
            return state
    }
}