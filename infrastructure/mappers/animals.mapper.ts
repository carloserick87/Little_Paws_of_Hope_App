import { Category } from '../interfaces/category.interface';
import { CategoryDB } from '../interfaces/category-response';

export class ListMapper{

    static petsDBtoApp = (list: CategoryDB): Category =>{

        return{
            id:list.id,
            icon:list.icon,
            category:list.category,
            animal_count:list.animal_count
        };
    };
}