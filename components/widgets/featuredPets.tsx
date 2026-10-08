import {View, Text, useWindowDimensions,} from 'react-native';
import { useRef} from "react";
import Carousel, {ICarouselInstance} from "react-native-reanimated-carousel";
import { usePets} from "@/hooks/usePets";
import { Skeleton } from 'boneyard-js/native';
import  PetsImage, { PET_IMAGE_RATIO }   from '@/components/ui/petsImage'
import { Pets } from '@/infrastructure/interfaces/pets.interface'
import ThemedText from "@/components/ui/ThemedText";

// Margen horizontal de la card (mx-2 = 8dp por lado).
const CARD_GUTTER = 16;
// Alto del bloque de texto de la card (nombre + edad/género + ubicación + padding).
// Generoso a propósito: si sobra, la foto crece; si faltara, la card se recortaría.
const CARD_TEXT_HEIGHT = 98;
// Proporción foto (ancho/alto) de la maqueta: casi cuadrada.
const CARD_TARGET_RATIO = 0.95;
// Suelo de la foto: evita alturas absurdas (o negativas) en escenas muy cortas.
const IMAGE_MIN_HEIGHT = 72;
// Anchos de card admisibles cuando se deriva del alto disponible.
const CARD_MIN_WIDTH = 120;
const CARD_MAX_WIDTH = 200;

interface Props{
    pets: Pets[]
    /** Alto del carrusel. Si se omite, se deriva del ancho (pantalla Explorar). */
    height?: number;
    /** Alto de la fila de título, para cuadrar con el reparto de la home. */
    headerHeight?: number;
}

const FeaturedPets = ({ pets, height, headerHeight }:Props) => {

 const { PetsQuery } = usePets();
 const ref = useRef<ICarouselInstance>(null);
 const { width, fontScale } = useWindowDimensions();

 const fs = Math.min(fontScale, 1.3);
 const textHeight = CARD_TEXT_HEIGHT * fs;

 // Con height la card se deriva del alto disponible (home sin scroll);
 // sin él, del ancho de ventana como antes.
 const cardWidth = height
     ? Math.min(
           Math.max((height - textHeight) * CARD_TARGET_RATIO, CARD_MIN_WIDTH),
           Math.min(CARD_MAX_WIDTH, width * 0.5),
       )
     : Math.min(Math.max(width * 0.45, 150), 200);

 const cardHeight = height ?? Math.round(cardWidth / PET_IMAGE_RATIO + textHeight);
 const imageHeight = height
     ? Math.max(Math.round(cardHeight - textHeight), IMAGE_MIN_HEIGHT)
     : undefined;

  return (
      <Skeleton name="profile-card" loading={PetsQuery.isLoading || PetsQuery.isFetching}>

    <View>
        <View className='flex-row justify-between items-center px-4 mb-[2px]'
              style={{ height: headerHeight }}>
          <ThemedText className='font-poppins-semibold text-[17px]'>Mascotas destacadas</ThemedText>
          <Text className='font-nunito-regular text-light-primary dark:text-dark-primary text-[12px]' >Ver todas</Text>
        </View>
        {/* El Skeleton monta los children aunque esté cargando: si el Carousel nace
            con data vacía no vuelve a pintar items, así que se monta solo con datos
            (y se remonta si cambia el número). El View reserva el alto mientras. */}
        <View style={{ height: cardHeight }}>
        {pets.length > 0 && (
        <Carousel  key={pets.length}
                  data={pets}
                  ref={ref}
                  renderItem={({item})=> <PetsImage
                      id={item.id}
                      name={item.name}
                      age={item.age}
                      breed={item.breed}
                      gender={item.gender}
                      image_url={item.image_url}
                      width={cardWidth}
                      imageHeight={imageHeight}
                  />}
                  // El slot incluye el gutter de la card para que la separación sea uniforme.
                  width={cardWidth + CARD_GUTTER}
                  height={cardHeight}
                  style={{
                      width: width,
                      height: cardHeight,
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}
                  defaultIndex={Math.min(1, pets.length - 1)}
                      />
        )}
        </View>
    </View>

      </Skeleton>
  );
};

export default FeaturedPets;
