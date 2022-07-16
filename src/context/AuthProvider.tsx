import { createContext, ReactNode, useReducer} from "react";
import authReducer from "../reducer/AuthReducer";
import {actionLogin} from "../reducer/typeAction"

interface AuthProps {
    children: ReactNode
}

export interface AuthData {
    username: string,
    isAuthnicated: boolean,
}

const initAuth = {
    username: "",
    isAuthnicated: false,
}

interface AuthForm {
    authInfo: AuthData
    loginUser: (username: string) => void
    logoutUser: () => void
}

export const AuthContext = createContext<AuthForm>({
    authInfo: initAuth,
    loginUser: () => {},
    logoutUser: () => {}
})

const AuthProvier = ({children}: AuthProps) => {
    const [state, dispatch] = useReducer(authReducer, initAuth)

    const loginUser = (username: string) => {
        dispatch({type: actionLogin.LOGIN_USER, payload: username})
    }

    const logoutUser = () => {
        dispatch({type: actionLogin.LOGOUT_USER})
    }

    return <AuthContext.Provider value={{
        authInfo: state,
        loginUser,
        logoutUser
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvier