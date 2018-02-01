const initState = [{_id: "1", title: "test"}];

export default (state = initState, action) => {
    switch (action.type) {
        case "REFRESH_PROGRAM_LIST":
            return action.program;
        default:
            return state
    }
}