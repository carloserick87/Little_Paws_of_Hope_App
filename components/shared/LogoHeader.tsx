import { View, Image } from 'react-native';
import ThemedText from "@/components/ui/ThemedText";

const LogoHeader = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
            }}
        >

            <Image
                source={require("../../assets/images/header3.png")}
                style={{
                    width: 56,
                    height: 32,
                    resizeMode: "contain",
                }}
            />

            <ThemedText
                className="font-poppins-semibold"
                maxFontSizeMultiplier={1.2}
                style={{
                    lineHeight: 14,
                    fontSize: 11,
                }}
            >
                Little Paws{"\n"}of Hope
            </ThemedText>
        </View>
    );
};

export default LogoHeader;
