export let setGlobalUser = (logBool, token) => {
    sessionStorage.setItem('user', JSON.stringify({isLoggedIn: logBool, token: token}))
}

export let removeGlobalUser = () => {
    sessionStorage.removeItem('token')
}