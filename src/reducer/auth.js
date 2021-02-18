let defaultState = {
    userLogin: {
        isLogin: false,
        username: "",
        hp: "",
        email: "",
        role: ""
    }
}

const authReducer = (state = defaultState, action) => {
    console.warn("state:", state);
    console.warn("action:", action);
    console.log("action ini",action.payload);

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                userLogin: {
                    isLogin: true,
                    username: action.payload.username,
                    hp: action.payload.hp,
                    email: action.payload.email,
                }
            }
        case "LOGOUT":
            return defaultState

        default:
            return state
    }
}

export default authReducer