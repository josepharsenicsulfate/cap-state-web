// import { createContext } from 'react'

// export const UserContext = createContext(null)
export let isLoggedIn, token = sessionStorage.getItem('token')

export let setGlobalUser = (logBool) => {
    isLoggedIn = logBool
}

export let removeGlobalUser = () => {
    isLoggedIn = false
    token = null
}