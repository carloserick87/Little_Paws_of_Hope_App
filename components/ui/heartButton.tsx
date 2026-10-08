import { Pressable} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useHeart } from '../../hooks/useHeart';

const HeartButton = () => {

    const { liked, toggleLike } = useHeart()
  return (
      <Pressable onPress={toggleLike}>
          <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={22}
              color="rgb(239,68,68)"
          />
      </Pressable>
  );
};

export default HeartButton;