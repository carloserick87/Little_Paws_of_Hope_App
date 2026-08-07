import { Tabs } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";


const TabsLayout = () =>{
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'rgb(189,107,77)',
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0, // Android
                shadowOpacity: 0, // iOS
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowRadius: 0,
            },
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