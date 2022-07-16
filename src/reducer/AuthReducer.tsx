import {actionLogin} from "./typeAction"
import {AuthData} from "../context/AuthProvider"
const {LOGIN_USER, LOGOUT_USER} = actionLogin

const authReducer = (state: AuthData, actions: {type: string, payload?: string}) => {
    switch(actions.type) {
        case LOGIN_USER: 
            return {
                username: actions.payload!,
                isAuthnicated: true
            }
        case LOGOUT_USER: 
            return {
               username: "",
               isAuthnicated: false
            }
        default:
            return {...state}
    }
}

export default authReducer