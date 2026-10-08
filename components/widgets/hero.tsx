import { View, Text, Pressable, ImageBackground } from 'react-native';

interface Props {
    /** Alto asignado por el reparto vertical de la home. Si se omite, es intrínseco. */
    height?: number;
}

const Hero = ({ height }: Props) => {
  return (

      <ImageBackground source={require('@/assets/images/hero1.png')}
          resizeMode="cover"
          // El radio va en imageStyle: Android ignora overflow:hidden sobre ImageBackground.
          imageStyle={{ borderRadius: 24 }}
          // Sin width fijo: se estira al contenedor menos los márgenes, con tope en tablet.
          style={{ maxWidth: 560, alignSelf: 'stretch', height }}
          className="mx-4 rounded-3xl overflow-hidden bg-light-secondary">
          <View className="flex-1 flex-row items-center px-5 py-5">
              <View className="flex-1 justify-center" style={{ maxWidth: '65%' }}>
                  <Text className="text-[17px] font-poppins-semibold leading-8 mb-4">
                      Cada patita{'\n'}merece una{'\n'}segunda{'\n'}oportunidad
                  </Text>
                  <Pressable className="self-start bg-light-primary rounded-2xl px-5 py-3 active:opacity-80">
                      <Text className="text-white font-nunito-regular">Conoce más</Text>
                  </Pressable>
              </View>
          </View>
      </ImageBackground>

  );
};

export default Hero;
