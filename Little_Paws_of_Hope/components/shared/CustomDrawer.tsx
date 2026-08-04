import { View, Text } from 'react-native';
import { DrawerContentScrollView} from "@react-navigation/drawer";

const CustomDrawer = () => {
  return (
      <DrawerContentScrollView scrollEnabled={false}>
          <Text>Custom Drawer</Text>
      </DrawerContentScrollView>

  );
};

export default CustomDrawer;