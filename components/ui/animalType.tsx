import { View,Text, useWindowDimensions, Pressable } from 'react-native';
import { Image } from "expo-image";
import ThemedText from "@/components/ui/ThemedText";

interface Props{
    category:string;
    animal_count:number;
    icon:string;
    smallIcon?: boolean;
    width?: number;
}

const Category = ({ category, smallIcon= false, width, icon, animal_count }: Props) => {

    const windowWidth = useWindowDimensions().width;

    const cardIcon =
        width ??
        (smallIcon
            ? Math.min(Math.max(windowWidth * 0.23, 80), 50)
            : Math.min(Math.max(windowWidth * 0.28, 96), 80));

  return (
      <Pressable className='mx-2 active:opacity-90 bg-gray-50 rounded-2xl' style={{ width: cardIcon }}>
          <View className='w-full rounded-full overflow-hidden bg-gray-50' style={{ aspectRatio: 1 }}>
            <Image
                source={{ uri: icon }}
                style={{ width: "70%", height: "70%", alignSelf: "center", marginTop: "15%" }}
                contentFit="cover"
            />
          </View>

          <View className='mt-1 items-center'>
              <ThemedText className='font-poppins-medium text-sm' numberOfLines={1}>{category}</ThemedText>
              <Text className='font-nunito-regular text-xs text-gray-500'>{animal_count}</Text>
          </View>
      </Pressable>
  );
};

export default Category;
