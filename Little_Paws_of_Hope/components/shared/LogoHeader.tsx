import { View, Image } from 'react-native';
import ThemedText from "@/components/ui/ThemedText";

const LogoHeader = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Image
                source={require("../../assets/images/header3.png")}
                style={{
                    width: 80,
                    height: 40,
                    resizeMode: "contain",
                }}
            />

            <ThemedText
                className="font-poppins-semibold"
                style={{
                    lineHeight: 17,
                    marginLeft: -5, // acerca el texto al logo
                }}
            >
                Little Paws{"\n"}of Hope
            </ThemedText>
        </View>
    );
};

export default LogoHeader;