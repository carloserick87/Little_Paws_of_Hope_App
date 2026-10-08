import ThemedView from '@/components/ui/ThemedView';
import ThemedText from '@/components/ui/ThemedText';

const MessagesDrawer = () => {
  return (
    <ThemedView safe edges={['bottom']} className="px-4 pt-4">
      <ThemedText>MessagesDrawer</ThemedText>
    </ThemedView>
  );
};

export default MessagesDrawer;
