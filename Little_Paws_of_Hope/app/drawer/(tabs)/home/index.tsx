import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePets } from '@/hooks/usePets';
import Hero from '@/components/widgets/hero';
import FeaturedPets from "@/components/widgets/featuredPets";
import NearbyPets from "@/components/widgets/nearbyPets";

const HomeScreen = () => {

    const { PetsQuery, NearbyPetsQuery } = usePets();

    const safeArea = useSafeAreaInsets();
  return (

      <View className='mt-2' style={{ paddingTop: safeArea.top}}>
        <Hero />
        <FeaturedPets pets={ PetsQuery.data ?? []}/>
        <NearbyPets pets={ NearbyPetsQuery.data ?? []} />
      </View>



  );
};

export default HomeScreen;