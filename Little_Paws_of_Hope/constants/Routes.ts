import { Ionicons} from "@expo/vector-icons";

interface MenuRoute {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;
}

