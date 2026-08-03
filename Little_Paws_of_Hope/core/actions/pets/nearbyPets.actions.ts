import { petsApi } from "@/core/api/pets-api";
import { ListMapper } from '@/infrastructure/mappers/list.mapper';


export const  petsNearby = async()=>{
    try{

        const { data } = await petsApi.get('/nearby');

        const animals = data.map(ListMapper.petsDBtoApp)
        return animals;

    } catch(error){
        console.log(error);
        throw 'Cannot load pets';
    }
}