import {useQuery} from "@tanstack/react-query";
import { petsActions } from "@/core/actions/pets/pets.actions";


export const usePets = () =>{
    const PetsQuery = useQuery({
        queryKey: ['pets'],
        queryFn: petsActions,
        staleTime: 1000 * 60 * 60 *24
    });

    return{
        PetsQuery,
    }
}