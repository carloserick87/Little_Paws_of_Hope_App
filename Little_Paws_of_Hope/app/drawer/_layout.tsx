
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "@/components/shared/CustomDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const DrawerLayout = () => {
  return (
  <Drawer
    drawerContent={CustomDrawer}
    screenOptions={{
        headerShown: true,
        headerRight: () => (
            <Ionicons
                name="notifications-outline"
                size={25}
                color="black"
                style={{ marginRight: 20 }}
            />),
        overlayColor:'rgba(0,0,0,0.4)',
        drawerActiveTintColor:'rgb(227,146,116)',
        headerShadowVisible:false,


    }}>
      <Drawer.Screen name='index'
           options={{
               drawerLabel:'Inicio',
               title:'Inicio'
           }} />
  </Drawer>
  );
};

export default DrawerLayout;