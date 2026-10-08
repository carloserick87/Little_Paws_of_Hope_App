
import ExplorePets from "@/components/widgets/explorePets";
import ThemedView from "@/components/ui/ThemedView";
import Category from "@/components/ui/animalType";

const SearchDrawer = () => {
  return (
      // Pantalla solo-drawer: nadie consume el inset inferior salvo aquí.
      <ThemedView safe edges={['bottom']}>
        <ExplorePets />
      </ThemedView>
  );
};

export default SearchDrawer;
