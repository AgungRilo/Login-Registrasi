let defaultState = {
    isLogin: false,
    username:"",
    password:""
}

const authReducer = (state = defaultState, action) => {
    console.warn("state:", state);
    console.warn("action:", action);

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                
            }
            case "LOGOUT":
                return defaultState
            
            default:
                return state
        }
}

export default authReducer