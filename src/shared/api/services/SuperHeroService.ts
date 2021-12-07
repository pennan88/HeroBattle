import http from "../SuperHeroAPI"


const getCharacterbyId = (id: number) => {
    return http.get(`/${id}`)
}
const getCharacterbyName = (name: string) => {
    return http.get(`/search/${name}`)
}


export default {
    getCharacterbyId,
    getCharacterbyName
}