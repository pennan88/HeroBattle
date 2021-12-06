import http from "../SuperHeroAPI"


const getCharacter = (name: string) => {
    return http.get(`/search/${name}`)
}


export default {
    getCharacter
}