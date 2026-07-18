import axios from 'axios';


export const petsApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_PETS_DB_URL,
    params:{
        apikey: process.env.EXPO_PUBLIC_PETS_DB_KEY
    }
})
