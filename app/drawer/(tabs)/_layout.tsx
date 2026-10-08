import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';


const TabsLayout = () =>{

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'rgb(189,107,77)',
            tabBarInactiveTintColor: colorScheme === 'dark' ? 'rgb(150,160,170)' : 'rgb(130,130,130)',
            // El inset inferior lo aplica React Navigation a partir del SafeAreaProvider
            // de la raíz: no fijamos height ni paddingBottom para no duplicarlo.
            tabBarStyle: {
                backgroundColor: theme.background,
                borderTopWidth: 0,
                elevation: 0, // Android
                shadowOpacity: 0, // iOS
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowRadius: 0,
            },
            tabBarItemStyle: { paddingVertical: 4 },
            tabBarLabelStyle: { fontSize: 11 },
            tabBarHideOnKeyboard: true,
            sceneStyle: { backgroundColor: theme.background },
        }}>
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="search/index"
                options={{
                    title: 'Explorar',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="search-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages/index"
                options={{
                    title: 'Mensajes',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbubble-ellipses-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
                }}
            />
        </Tabs>

    );


};

export default TabsLayout;