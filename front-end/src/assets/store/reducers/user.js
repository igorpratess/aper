const INITIAL_STATE = {
    accessToken: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') === null ? false : true,
    user: localStorage.getItem('idUser')
}

export default function token(state = INITIAL_STATE, action) {
    if (action.type === 'AUTHENTICATED') {
        state = {
            ...state,
            accessToken: action.accessToken,
            isAuthenticated: true,
        }
    }

    if (action.type === 'TOGGLE_USER') {
        state = {
            ...state,
            user: action.user
        }
    }

    return state;
}