import { View, Text } from 'react-native';

const NearbyPets = () => {
  return (
      <View className='flex-row justify-between mt-3'>
          <Text className='font-poppins-semibold text-[17px] mx-4 mb-[2px]'>Cerca de ti</Text>
          <Text className='font-nunito-regular text-primary text-[12px] mr-5 pt-2' >Ver todas</Text>
      </View>
  );
};

export default NearbyPets;