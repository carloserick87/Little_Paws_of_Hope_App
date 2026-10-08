import {View, Pressable, useWindowDimensions} from 'react-native';
import {Image} from "expo-image";
import ThemedText from "@/components/ui/ThemedText";


interface Props{
  id: string;
  photo: string;
  name: string;
  distance: string;
  smallPhoto?: boolean;
  width?: number;
}

const NearbyList = ({ id, photo, name, distance, smallPhoto= false, width }: Props) => {

    const windowWidth = useWindowDimensions().width;

    // Avatar circular fluido con topes: la altura sale del aspectRatio 1:1.
    const cardWidth =
        width ??
        (smallPhoto
            ? Math.min(Math.max(windowWidth * 0.23, 80), 100)
            : Math.min(Math.max(windowWidth * 0.28, 96), 120));



    return (
   <Pressable className='mx-2    active:opacity-90'
   style={{ width: cardWidth }}>
       <View className='rounded-full overflow-hidden'>
           <Image source={{ uri: photo }} style={{
               width:"100%",
               aspectRatio: 1,
           }} contentFit="cover" />

       </View>


       <View className="items-center mt-2">
           <ThemedText numberOfLines={1} className="font-poppins-medium text-base">
               {name}
           </ThemedText>

           <ThemedText numberOfLines={1} className="text-gray-500 text-sm">
               {distance}
           </ThemedText>
       </View>



   </Pressable>
  );
};

export default NearbyList;