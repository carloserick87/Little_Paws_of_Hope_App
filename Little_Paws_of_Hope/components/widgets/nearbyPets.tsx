import {View, Text, FlatList} from 'react-native';
import { Nearby} from '@/infrastructure/interfaces/nearby.interface';
import NearbyList from '../ui/nearbyList';


interface Props {
    pets: Nearby[];
}

const NearbyPets = ({ pets }: Props) => {
  return (
      <View>
          <View className='flex-row justify-between mt-5'>
          <Text className='font-poppins-semibold text-[17px] text-light-text dark:text-dark-text mx-4 mb-[2px]'>Cerca de ti</Text>
          <Text className='font-nunito-regular text-light-primary dark:text-dark-primary text-[12px] mr-5 pt-2' >Ver todas</Text>
      </View>
          <FlatList
              horizontal
              data={pets}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => (
                  <NearbyList {...item} smallPhoto />
              )} />
      </View>



  );
};

export default NearbyPets;