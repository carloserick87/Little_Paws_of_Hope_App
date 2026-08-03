import {View, Text, useWindowDimensions,} from 'react-native';
import { useRef} from "react";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import { usePets} from "@/hooks/usePets";
import { Skeleton } from 'boneyard-js/native';
import  PetsImage   from '@/components/ui/petsImage'
import { Pets } from '@/infrastructure/interfaces/pets.interface'
import ThemedText from "@/components/ui/ThemedText";


interface Props{
    pets: Pets[]
}

const FeaturedPets = ({ pets }:Props) => {

 const { PetsQuery } = usePets();
 const ref = useRef<ICarouselInstance>(null);
 const width = useWindowDimensions().width;

  return (
      <Skeleton name="profile-card" loading={PetsQuery.isLoading || PetsQuery.isFetching}>

    <View>
        <View className='flex-row justify-between'>
          <ThemedText className='font-poppins-semibold text-[17px] mx-4 mb-[2px]'>Mascotas destacadas</ThemedText>
          <Text className='font-nunito-regular text-light-primary dark:text-dark-primary text-[12px] mr-5 pt-2' >Ver todas</Text>
        </View>
        <Carousel  data={pets}
                  ref={ref}
                  renderItem={({item})=> <PetsImage
                      id={item.id}
                      name={item.name}
                      age={item.age}
                      breed={item.breed}
                      gender={item.gender}
                      image_url={item.image_url}
                  />}
                  width={200}
                  height={300}
                  style={{
                      width:width,
                      height: 300,
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}
                  defaultIndex={1}
                      />
    </View>

      </Skeleton>
  );
};

export default FeaturedPets;