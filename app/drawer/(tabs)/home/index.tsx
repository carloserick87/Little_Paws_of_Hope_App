import { useState } from 'react';
import { View, LayoutChangeEvent } from 'react-native';
import { usePets } from '@/hooks/usePets';
import { useHomeLayout } from '@/hooks/useHomeLayout';
import Hero from '@/components/widgets/hero';
import FeaturedPets from "@/components/widgets/featuredPets";
import NearbyPets from "@/components/widgets/nearbyPets";
import ThemedView from "@/components/ui/ThemedView";

const HomeScreen = () => {

    const { PetsQuery, NearbyPetsQuery } = usePets();

    // Alto real de la escena: onLayout ya descuenta header del Drawer y tab bar,
    // que miden distinto en iOS y Android.
    const [available, setAvailable] = useState(0);
    const layout = useHomeLayout(available);

    const onLayout = (e: LayoutChangeEvent) =>
        setAvailable(e.nativeEvent.layout.height);

  return (

      <ThemedView onLayout={onLayout}>
        {/* Sin scroll: el alto disponible se reparte entre los tres bloques. */}
        {layout && (
            <View className='flex-1' style={{ paddingBottom: layout.gap }}>
                <Hero height={layout.hero} />

                <View style={{ height: layout.gap }} />

                <FeaturedPets
                    pets={PetsQuery.data ?? []}
                    height={layout.featured}
                    headerHeight={layout.header}
                />

                <View style={{ height: layout.gap }} />

                <NearbyPets
                    pets={NearbyPetsQuery.data ?? []}
                    height={layout.nearby}
                    headerHeight={layout.header}
                />
            </View>
        )}
      </ThemedView>

  );
};

export default HomeScreen;
