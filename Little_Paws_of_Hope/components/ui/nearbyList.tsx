import {View, Text, Pressable} from 'react-native';
import {Image} from "expo-image";
import ThemedText from "@/components/ui/ThemedText";


interface Props{
  id: string;
  photo: string;
  name: string;
  distance: string;
  smallPhoto?: boolean;

}

const NearbyList = ({ id, photo, name, distance, smallPhoto= false }: Props) => {

    const cardWidth = smallPhoto ? 90 : 110;
    const cardHeight = smallPhoto ? 90 : 110;



    return (
   <Pressable className='mx-2    active:opacity-90'
   style={{ width: cardWidth }}>
       <View className='rounded-full overflow-hidden'>
           <Image source={{ uri: photo }} style={{
               width:"100%",
               height: cardHeight,
           }} contentFit="cover" />

       </View>


       <View className="items-center mt-3">
           <ThemedText className="font-poppins-medium text-lg">
               {name}
           </ThemedText>

           <ThemedText className="text-gray-500 text-sm">
               {distance}
           </ThemedText>
       </View>



   </Pressable>
  );
};

export default NearbyList;