import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import { Nearby} from '@/infrastructure/interfaces/nearby.interface';
import NearbyList from '../ui/nearbyList';
import ThemedText from '@/components/ui/ThemedText';

// Alto del bloque de etiquetas del ítem (mt-3 + nombre + distancia).
const LABEL_BLOCK = 46;

interface Props {
    pets: Nearby[];
    /** Alto de la fila. Si se omite, el ítem se deriva del ancho de ventana. */
    height?: number;
    /** Alto de la fila de título, para cuadrar con el reparto de la home. */
    headerHeight?: number;
}

const NearbyPets = ({ pets, height, headerHeight }: Props) => {

    const { fontScale } = useWindowDimensions();
    const fs = Math.min(fontScale, 1.3);

    // El avatar es circular: su ancho sale del alto libre tras las etiquetas.
    const avatar = height
        ? Math.min(Math.max(height - LABEL_BLOCK * fs, 64), 110)
        : undefined;

  return (
      <View>
          <View className='flex-row justify-between items-center px-4 mb-[2px]'
                style={{ height: headerHeight }}>
          <ThemedText className='font-poppins-semibold text-[17px]'>Cerca de ti</ThemedText>
          <Text className='font-nunito-regular text-light-primary dark:text-dark-primary text-[12px]' >Ver todas</Text>
      </View>
          <View style={{ height }}>
              <FlatList
                  horizontal
                  data={pets}
                  showsHorizontalScrollIndicator={false}
                  // 8dp + el mx-2 del ítem = 16dp, alineado con el px-4 de la cabecera.
                  contentContainerStyle={{ paddingHorizontal: 8 }}
                  keyExtractor={(item) => `${item.id}`}
                  renderItem={({ item }) => (
                      <NearbyList {...item} smallPhoto width={avatar} />
                  )} />
          </View>
      </View>

  );
};

export default NearbyPets;
