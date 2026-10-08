import { Searchbar } from 'react-native-paper';
import * as React from 'react';
import {Pressable, View, ScrollView} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ThemedText from "@/components/ui/ThemedText";
import ThemedView from "@/components/ui/ThemedView";
import FeaturedPets from "@/components/widgets/featuredPets";
import { usePets } from "@/hooks/usePets";
import Category from "@/components/ui/animalType";
import { Skeleton } from "boneyard-js/native";

const ExplorePets = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const { PetsQuery } = usePets();
    const { CategoryPetsQuery } = usePets();

  return (
      <ThemedView>
        <ScrollView
            className='flex-1'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}>


      <View className='flex-row items-center gap-2 mx-4'>

      <Searchbar
          placeholder="Buscar mascotas, razas, ubicaciones..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          elevation={0}
          iconColor="#4B5563"
          placeholderTextColor="#9CA3AF"
          style={{ flex: 1, backgroundColor: '#FFFCFA', borderRadius: 10, height: 36, justifyContent: 'center', borderColor: '#E7E0DA', borderWidth: 1 }}
          inputStyle={{ minHeight: 0, paddingVertical: 0, alignSelf: 'center', fontSize: 14, fontFamily: 'Nunito-Regular' }}
      />

      <Pressable className='flex-row items-center gap-1 h-9 px-3 rounded-xl bg-light-tertiary border border-[#F3D9C6]'>
          <Ionicons name={"options-outline"} size={18} color="black" />
          <ThemedText className='font-poppins-medium text-sm text-black'>Filtros</ThemedText>
      </Pressable>

      </View>

          <View className='mt-3 '>
              <ThemedText className='font-poppins-semibold text-xl  mb-2 px-4'>Explorar por categoria</ThemedText>
              <Skeleton name="profile-card" loading={CategoryPetsQuery.isLoading}>
                  <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{ paddingHorizontal: 8 }}>
                      {(CategoryPetsQuery.data ?? []).map((category) => (
                          <Category
                              key={category.id}
                              category={category.category}
                              animal_count={category.animal_count}
                              icon={category.icon}
                          />
                      ))}
                  </ScrollView>
              </Skeleton>
          </View>

          <View>
              <FeaturedPets pets={ PetsQuery.data ?? []}/>
          </View>

          <View>
              <ThemedText className='font-poppins-semibold mx-4 text-xl'>Explorar por ubicación</ThemedText>
          </View>

        </ScrollView>
      </ThemedView>
  );
};

export default ExplorePets;
