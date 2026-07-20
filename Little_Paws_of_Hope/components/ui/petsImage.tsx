import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
    id: string;
    name: string;
    age: string;
    breed: string;
    gender: string;
    image_url: string;
    smallImage?: boolean;
}

const PetsImage = ({id, name,
                       age,
                       breed,
                       gender,
                       image_url,
                       smallImage = false,
                   }: Props) => {
    const cardWidth = smallImage ? 120 : 170;
    const imageHeight = smallImage ? 120 : 210;

    return (
        <Pressable
            className="mx-2 rounded-2xl overflow-hidden bg-gray-50 active:opacity-90"
            style={{
                width: cardWidth,
            }}>
            <Image
                source={{ uri: image_url }}
                style={{
                    width: "100%",
                    height: imageHeight,
                }}
                contentFit="cover"
            />

            <View className="p-3">
                <View className="flex-row justify-between items-center">
                    <Text className="font-poppins-medium text-lg flex-1" numberOfLines={1}>
                        {name}
                    </Text>

                    <Ionicons name="heart-outline" size={22} color="rgb(239,68,68)"/>
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

                <Text
                    className="font-nunito-regular text-sm mt-1 text-gray-500"
                    numberOfLines={1}
                >
                    {breed}
                </Text>
            </View>
        </Pressable>
    );
};

export default PetsImage;