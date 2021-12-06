import axios from "axios";
import dotenv from "dotenv"

dotenv.config()
const {REACT_APP_ACCESS_TOKEN} = process.env



const SuperHeroAPI = axios.create({
    baseURL: `https://superheroapi.com/api.php/${REACT_APP_ACCESS_TOKEN}`
})

export default SuperHeroAPI
