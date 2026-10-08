import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
// import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import { Colors } from "@/constants/Colors";
import HeartButton from "@/components/ui/heartButton";

// Relación de la foto de la card (ancho / alto), heredada del diseño original 170x210.
export const PET_IMAGE_RATIO = 170 / 210;

interface Props {
    id: string;
    name: string;
    age: string;
    breed: string;
    gender: string;
    image_url: string;
    smallImage?: boolean;
    /** Ancho de la card. Si se omite, se deriva del ancho de ventana. */
    width?: number;
    /** Alto de la foto. Si se omite, sale del aspectRatio. */
    imageHeight?: number;
}

const PetsImage = ({id, name,
                       age,
                       breed,
                       gender,
                       image_url,
                       smallImage = false,
                       width,
                       imageHeight,
                   }: Props) => {
    const windowWidth = useWindowDimensions().width;

    // Escala con la pantalla pero con topes, para que no se estire en tablet
    // ni se comprima en móviles estrechos.
    const cardWidth =
        width ??
        (smallImage
            ? Math.min(Math.max(windowWidth * 0.32, 110), 140)
            : Math.min(Math.max(windowWidth * 0.45, 150), 200));

    return (
        <Pressable
            className="mx-2 rounded-2xl overflow-hidden bg-gray-50 active:opacity-90"
            style={{
                width: cardWidth,
            }}>
            <Image
                source={{ uri: image_url }}
                style={
                    imageHeight
                        // contentFit cover recorta, así que el alto fijo no deforma.
                        ? { width: "100%", height: imageHeight }
                        : { width: "100%", aspectRatio: PET_IMAGE_RATIO }
                }
                contentFit="cover"
            />

            <View className="p-3">
                <View className="flex-row justify-between items-center">
                    <Text className="font-poppins-medium text-lg flex-1" numberOfLines={1}>
                        {name}
                    </Text>

                    <HeartButton />
                </View>

                <View className="flex-row mt-1">
                    <Text className="font-nunito-regular text-sm text-gray-500">
                        {age}
                    </Text>

                    <Text className="mx-2 text-gray-700">•</Text>

                    <Text className="font-nunito-regular text-sm text-gray-500">
                        {gender}
                    </Text>
                </View>

                <View className="flex-row items-center mt-1">
                    {/*<Ionicons name="location" size={14} color={Colors.light.primary} />*/}
                    <MaterialCommunityIcons
                        name="bone"
                        size={20}
                        color="brown"

                    />

                    <Text
                        className="font-nunito-regular text-sm ml-1 flex-1 text-gray-500"
                        numberOfLines={1}
                    >
                        {breed}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default PetsImage;
