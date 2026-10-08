import { View, Text, Image, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView } from 'expo-router/drawer';
import ThemedText from '@/components/ui/ThemedText';
import DrawerMenuItem from '@/components/shared/DrawerMenuItem';
import { DRAWER_ROUTES, LOGOUT_ROUTE } from '@/constants/Routes';

const CustomDrawer = (props: DrawerContentComponentProps) => {

    const insets = useSafeAreaInsets();
    const activeRoute = props.state.routeNames[props.state.index];

    const go = (name: string) => () => props.navigation.navigate(name);

    return (
        <ImageBackground
            source={require('../../assets/images/Header.png')}
            style={{ flex: 1 }}
            resizeMode="none"
        >

            {/* Drawer fijo: sin scroll y con las filas en modo compacto para que
                todo el menú entre en pantalla. */}
            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
                contentContainerStyle={{ flex: 1, paddingTop: 0 }}
                style={{ backgroundColor: 'transparent' }}
            >
                <View className="items-center px-4 pb-4" style={{ paddingTop: insets.top + 16 }}>
                    <Image
                        source={require('../../assets/images/faces.avif')}
                        className="h-20 w-20 rounded-full border-4 border-white bg-amber-600"
                    />

                    <ThemedText numberOfLines={1} className="font-poppins-semibold text-xl mt-3">
                        Camila López
                    </ThemedText>
                    <Text numberOfLines={1} className="font-nunito-regular text-sm text-gray-400">
                        camila@email.com
                    </Text>
                </View>

                <View className="flex-1">
                    {DRAWER_ROUTES.map((route) => (
                        <DrawerMenuItem
                            key={route.name}
                            title={route.title}
                            subtitle={route.subtitle}
                            icon={route.icon}
                            focused={activeRoute === route.name}
                            compact
                            onPress={go(route.name)}
                        />
                    ))}
                </View>
            </DrawerContentScrollView>

            {/* Cerrar sesión fijo al pie, fuera del scroll. */}
            <View
                className="border-t border-black/5 dark:border-white/10 pt-2"
                style={{ paddingBottom: insets.bottom + 8 }}
            >
                <DrawerMenuItem
                    title={LOGOUT_ROUTE.title}
                    subtitle={LOGOUT_ROUTE.subtitle}
                    icon={LOGOUT_ROUTE.icon}
                    focused={activeRoute === LOGOUT_ROUTE.name}
                    danger
                    compact
                    onPress={go(LOGOUT_ROUTE.name)}
                />
            </View>

        </ImageBackground>
    );
};

export default CustomDrawer;
