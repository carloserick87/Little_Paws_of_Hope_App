import { View, ImageBackground, Text } from 'react-native';
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import ThemedText from "@/components/ui/ThemedText";

const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
      <ImageBackground
          source={require("../../assets/images/Header.png")}
          style={{ flex: 1 }}
          resizeMode="none"
      >

          <DrawerContentScrollView {...props}
              scrollEnabled={false}
              contentContainerStyle={{ flex: 1 }}
          >
              <View className='flex justify-center items-center mx-3 p-2 mb-2 h-[120px]'>
                  <View className='flex justify-center bg-amber-600 rounded-full h-24 w-24'>

                  </View>
                  <ThemedText className='font-poppins-semibold text-xl'>Camila López</ThemedText>
                  <Text className='font-nunito-regular text-sm text-gray-400'>camila@email.com</Text>
              </View>
              <View className="mt-5">
                  <DrawerItemList {...props} />
              </View>
          </DrawerContentScrollView>

      </ImageBackground>

  );
};

export default CustomDrawer;