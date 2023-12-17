export const whoIsLogged = () => {
    return sessionStorage.getItem('auth')
}
