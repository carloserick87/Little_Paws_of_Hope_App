import { Nearby } from '../interfaces/nearby.interface';
import { ListDB } from '../interfaces/nearby-response';

export class ListMapper{

    static petsDBtoApp = (list: ListDB): Nearby =>{

        return{
            id:list.id,
            photo:list.photo,
            name:list.name,
            distance:list.distance
        };
    };
}