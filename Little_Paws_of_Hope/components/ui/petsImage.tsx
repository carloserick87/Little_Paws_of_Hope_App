import { Pressable, Text, View } from "react-native";
import { Image } from 'expo-image'



interface Props{
    id: string;
    name: string;
    age:string;
    breed: string;
    gender: string;
    image_url: string;
    smallImage?: boolean;
}

const PetsImage = ({id, name, age, breed, gender, image_url, smallImage= false }:Props) => {
  return (

   <Pressable className='active:opacity-90 px-2 w-full '>


       <Image
        className='rounded-2xl  mt-2'
        source={{ uri: image_url }}
        style={{
            width: smallImage ? 85 : 150,
            height: smallImage ? 130 : 250,
        }}
        contentFit="cover"
       />
       <View className="p-4">

           <View className="flex-row justify-between items-center">
               <Text className='font-poppins-medium text-2xl'>{name}</Text>
               {/*<Heart />*/}
           </View>

           <Text className='font-nunito-regular'>{age} • {gender}</Text>

           <View className="flex-row items-center">
               {/*<MapPin />*/}
               <Text className='font-nunito-regular'>{breed}</Text>
           </View>

       </View>

   </Pressable>
  );
};

export default PetsImage;