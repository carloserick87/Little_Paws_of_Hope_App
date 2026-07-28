import { View, Text } from 'react-native';

const NearbyPets = () => {
  return (
      <View className='flex-row justify-between mt-3'>
          <Text className='font-poppins-semibold text-[17px] text-light-text dark:text-dark-text mx-4 mb-[2px]'>Cerca de ti</Text>
          <Text className='font-nunito-regular text-light-primary dark:text-dark-primary text-[12px] mr-5 pt-2' >Ver todas</Text>
      </View>
  );
};

export default NearbyPets;