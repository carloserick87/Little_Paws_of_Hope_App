
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "@/components/shared/CustomDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from 'react-native';
import LogoHeader from "@/components/shared/LogoHeader";



const DrawerLayout = () => {

    const colorScheme = useColorScheme();
  return (


  <Drawer
    drawerContent={CustomDrawer}

    screenOptions={{


        headerShown: true,
        // sceneContainerStyle: {backgroundColor:'white'},
        headerRight: () => (
            <Ionicons
                name="notifications-outline"
                size={23}
                color={colorScheme === 'dark' ? 'white' : 'black'}
                style={{ marginRight: 20 }}
            />),
        overlayColor:'rgba(0,0,0,0.4)',
        drawerActiveTintColor:'rgb(227,146,116)',
        headerShadowVisible:false,


    }}>
      <Drawer.Screen name='(tabs)'
           options={{
               drawerLabel:'Inicio',
               headerTitle: ()=> <LogoHeader />,
               drawerIcon: ({ color, size }) => (
                     <Ionicons name='home-outline' color={color} size={size} />
               )
           }} />
      <Drawer.Screen name='search/index'
                     options={{
                         drawerLabel:'Buscar',
                         title:'Buscar',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='search-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='favorites/index'
                     options={{
                         drawerLabel:'Favoritos',
                         title:'Favoritos',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='heart-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='messages/index'
                     options={{
                         drawerLabel:'Mensajes',
                         title:'Mensajes',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='chatbubble-ellipses-outline' color={color} size={size} />
                         )
                     }} />
      <Drawer.Screen name='requests/index'
                     options={{
                         drawerLabel:'Solicitudes',
                         title:'Solicitudes',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='document-text-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='shelter/index'
                     options={{
                         drawerLabel:'Refugios',
                         title:'Refugios',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='business-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='donations/index'
                     options={{
                         drawerLabel:'Donaciones',
                         title:'Donaciones',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='gift-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='activities/index'
                     options={{
                         drawerLabel:'Eventos',
                         title:'Eventos',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='calendar-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='preferences/index'
                     options={{
                         drawerLabel:'Configuración',
                         title:'Configuración',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='settings-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='help/index'
                     options={{
                         drawerLabel:'Ayuda',
                         title:'Ayuda',
                         drawerIcon: ({ color, size }) => (
                             <Ionicons name='help-circle-outline' color={color} size={size} />
                         )
                     }} />

      <Drawer.Screen name='logout/index'
                     options={{
                         drawerLabel:'Cerrar sesión',
                         title:'Cerrar sesión',
                         drawerIcon: ({size}) =>(
                             <Ionicons name='log-out-outline' color='red' size={size} />
                         ), drawerLabelStyle: { color: 'red' }
                     }} />

  </Drawer>
  );
};

export default DrawerLayout;