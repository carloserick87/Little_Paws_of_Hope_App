import { Drawer } from 'expo-router/drawer';
import CustomDrawer from "@/components/shared/CustomDrawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, useColorScheme, useWindowDimensions } from 'react-native';
import LogoHeader from "@/components/shared/LogoHeader";
import { DrawerActions } from "expo-router/react-navigation";
import { Colors } from '@/constants/Colors';
import { DRAWER_ROUTES, LOGOUT_ROUTE } from '@/constants/Routes';

const DrawerLayout = () => {

    const colorScheme = useColorScheme();
    const { width } = useWindowDimensions();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
  <Drawer
    drawerContent={CustomDrawer}

    screenOptions={({ navigation }) => ({
        // Limita el ancho en tablet y lo mantiene proporcional en móvil.
        drawerStyle: {
            width: Math.min(width * 0.82, 340),
        },

        headerShown: true,
        // iOS centra el título y Android lo alinea a la izquierda: lo fijamos igual en ambos.
        headerTitleAlign: 'left',
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
        sceneStyle: { backgroundColor: theme.background },
        headerLeftContainerStyle: { paddingLeft: 4 },
        headerRightContainerStyle: { paddingRight: 4 },

        headerLeft: () => (
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                       hitSlop={8}
                       style={{ minWidth: 44, minHeight: 44, justifyContent: 'center', paddingHorizontal: 8 }}>
                <LogoHeader />
            </Pressable>
        ),

        headerRight: () => (
            <Pressable hitSlop={8}
                style={{ minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 }}>
                <Ionicons name="notifications-outline" size={22} color={theme.text} />
            </Pressable>
            ),
        overlayColor:'rgba(0,0,0,0.4)',
        drawerActiveTintColor:'rgb(227,146,116)',
        headerShadowVisible:false,
    })}
  >
      {/* Las filas del drawer las pinta CustomDrawer desde DRAWER_ROUTES;
          aquí solo se registran las pantallas y sus títulos de cabecera. */}
      {DRAWER_ROUTES.map(({ name, title }) => (
          <Drawer.Screen
              key={name}
              name={name}
              options={name === '(tabs)'
                  ? { drawerLabel: title, headerTitle: ' ' }
                  : { drawerLabel: title, title }}
          />
      ))}
      <Drawer.Screen
          name={LOGOUT_ROUTE.name}
          options={{ drawerLabel: LOGOUT_ROUTE.title, title: LOGOUT_ROUTE.title }}
      />
  </Drawer>
  );
};

export default DrawerLayout;
