import { View, Text, Pressable, ImageBackground } from 'react-native';


const Hero = () => {
  return (

      <ImageBackground source={require('@/assets/images/prueba_4.png')}
          resizeMode="cover" className="mx-4 rounded-3xl overflow-hidden bg-background mb-7">
          <View className="flex-row items-center px-5 py-6">
              <View >
                  <Text className="text-[19px] font-poppins-semibold leading-8 mb-4">
                      Cada patita{'\n'}merece una{'\n'}segunda{'\n'}oportunidad
                  </Text>
                  <Pressable className="self-start bg-primary rounded-2xl px-5 py-3 active:opacity-80">
                      <Text className="text-white font-nunito-regular">Conoce más</Text>
                  </Pressable>
              </View>
          </View>
      </ImageBackground>

  );
};

export default Hero;