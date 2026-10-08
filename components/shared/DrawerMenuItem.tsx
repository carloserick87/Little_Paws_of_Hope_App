import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, useColorScheme, View } from 'react-native';
import ThemedText from '@/components/ui/ThemedText';
import { Colors } from '@/constants/Colors';

interface Props {
    title: string;
    subtitle: string;
    icon: keyof typeof Ionicons.glyphMap;
    focused: boolean;
    danger?: boolean;
    /** Fila baja y sin subtítulo, para que el drawer entre en pantalla sin scroll. */
    compact?: boolean;
    onPress: () => void;
}

// Fila del drawer: círculo con el icono + título y subtítulo.
// Los colores del círculo son los mismos que usaba el helper `drawerIcon` del layout.
const DrawerMenuItem = ({ title, subtitle, icon, focused, danger = false, compact = false, onPress }: Props) => {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const circleClass = danger
        ? focused ? 'bg-red-700' : 'bg-red-600'
        : focused ? 'bg-light-primary' : 'bg-[rgb(255,197,176)]';

    const titleClass = danger
        ? 'text-red-600'
        : focused ? 'text-[rgb(227,146,116)]' : '';

    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={{ selected: focused }}
            android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
            // Sin altura fija: la fila crece con el font scale del sistema.
            style={{ minHeight: compact ? 44 : 56 }}
            className={`flex-row items-center mx-3 px-3 rounded-2xl ${
                compact ? 'my-0 py-1.5' : 'my-0.5 py-2.5'
            } ${focused ? 'bg-light-tertiary dark:bg-white/10' : ''}`}
        >
            <View
                className={`items-center justify-center rounded-full ${
                    compact ? 'h-9 w-9' : 'h-10 w-10'
                } ${circleClass}`}
            >
                <Ionicons
                    name={icon}
                    size={compact ? 18 : 20}
                    color={danger || focused ? 'white' : theme.text}
                />
            </View>

            <View className="ml-3 flex-1">
                <ThemedText numberOfLines={1} className={`font-poppins-semibold text-base ${titleClass}`}>
                    {title}
                </ThemedText>
                {!compact && (
                    <Text numberOfLines={1} className="font-nunito-regular text-xs text-gray-400 mt-0.5">
                        {subtitle}
                    </Text>
                )}
            </View>
        </Pressable>
    );
};

export default DrawerMenuItem;
