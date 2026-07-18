import {View, Text, useWindowDimensions,} from 'react-native';
import { useRef} from "react";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import { usePets} from "@/hooks/usePets";
import { Skeleton } from 'boneyard-js/native';
import  PetsImage   from '@/components/ui/petsImage'
import { Pets } from '@/infrastructure/interfaces/pets.interface'


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
          <Text className='font-poppins-semibold text-[18px] mx-4 mb-3'>Mascotas destacadas</Text>
          <Text className='font-nunito-regular text-primary mr-4 pt-[3px]' >Ver todas</Text>
        </View>
        <Carousel data={pets}
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
                  height={350}
                  style={{
                      width:width,
                      height: 350,
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