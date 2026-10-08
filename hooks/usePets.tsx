import {useQuery} from "@tanstack/react-query";
import { petsActions } from "@/core/actions/pets/pets.actions";
import { petsNearby } from "@/core/actions/pets/nearbyPets.actions";
import { ExplorePets } from "@/core/actions/pets/explorePets.actions";


export const usePets = () =>{
    const PetsQuery = useQuery({
        queryKey: ['pets'],
        queryFn: petsActions,
        staleTime: 1000 * 60 * 60 *24
    });

    const NearbyPetsQuery = useQuery({
        queryKey: ['nearby'],
        queryFn: petsNearby,
        staleTime: 1000 * 60 * 60 *24
    });

    const CategoryPetsQuery = useQuery({
        queryKey: ['animals'],
        queryFn: ExplorePets,
        staleTime: 1000 * 60 * 60 *24
    });

    return{
        PetsQuery,
        NearbyPetsQuery,
        CategoryPetsQuery
    }
}