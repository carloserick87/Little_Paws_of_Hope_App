import { Pets } from '../interfaces/pets.interface';
import { PetsDB } from '../interfaces/petsdb-response';

export class PetsMapper{

    static petsDBtoApp = (pets: PetsDB): Pets =>{

        return{
           id:pets.id,
           name:pets.name,
           age:pets.age,
           breed:pets.breed,
           gender:pets.gender,
           image_url:pets.image_url,
           category:pets.category
        };
    };
}