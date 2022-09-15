export const loginReducer = (state = { logged: false }, action) => {

    switch (action.type) {
        case 'caseLogin':
            return { ...state, logged: true }
        default:
            return state
    }
}