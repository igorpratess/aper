const INITIAL_STATE = {
    // accessToken: localStorage.getItem('accesToken'),
    // refreshToken: localStorage.getItem('refreshToken'),
    isAuthenticated: /*localStorage.getItem('accessToken') === null ?*/ false /*: true*/ ,
    // user: {}
}

export default function token(state = INITIAL_STATE, action) {
    if (action.type === 'AUTHENTICATED') {
        state = {
            ...state,
            // accessToken: action.accessToken,
            // refreshToken: action.refreshToken,
            isAuthenticated: true,
        }
    }

    // if (action.type === 'TOGGLE_USER') {
    //     state = {
    //         ...state,
    //         user: action.user
    //     }
    // }

    return state;
}