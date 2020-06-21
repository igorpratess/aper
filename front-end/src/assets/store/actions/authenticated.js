function authenticated() {
    return {
        type: 'AUTHENTICATED',
        isAuthenticated: true
    };
}

function setUser(user) {
    return {
        type: 'TOGGLE_USER',
        user: user
    };
}

module.exports = { authenticated, setUser }