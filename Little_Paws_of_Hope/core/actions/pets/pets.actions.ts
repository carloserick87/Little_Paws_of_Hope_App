import { petsApi } from "@/core/api/pets-api";
// import { PetsDB } from '@/infrastructure/interfaces/petsdb-response';
import { PetsMapper } from '@/infrastructure/mappers/pets.mapper';


export const petsActions = async()=>{
    try{

        const { data } = await petsApi.get('/dogs');

        const animals = data.map(PetsMapper.petsDBtoApp)
        return animals;

    } catch(error){
        console.log(error);
        throw 'Cannot load pets';
    }
}