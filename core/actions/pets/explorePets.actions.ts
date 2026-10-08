import { petsApi } from "@/core/api/pets-api";
import { ListMapper } from '@/infrastructure/mappers/animals.mapper';
import { CategoryDB } from '@/infrastructure/interfaces/category-response';


export const  ExplorePets = async()=>{
    try{

        const { data } = await petsApi.get<CategoryDB[]>('/animals');

        const animals = data.map(ListMapper.petsDBtoApp)
        return animals;

    } catch(error){
        console.log(error);
        throw 'Cannot load pets';
    }
}