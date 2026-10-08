import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Edge = 'top' | 'bottom' | 'left' | 'right';

const ALL_EDGES: Edge[] = ['top', 'bottom', 'left', 'right'];

interface Props extends ViewProps {
    margin?: boolean;
    safe?: boolean;
    edges?: Edge[];
    bgColor?: string;
}

const ThemedView = ({
                        style,
                        className,
                        margin = false,
                        safe = false,
                        edges = ALL_EDGES,
                        bgColor,
                        children,
                        ...props
                    }: Props) => {

    const insets = useSafeAreaInsets();

    const safePadding = safe
        ? {
            paddingTop: edges.includes('top') ? insets.top : undefined,
            paddingBottom: edges.includes('bottom') ? insets.bottom : undefined,
            paddingLeft: edges.includes('left') ? insets.left : undefined,
            paddingRight: edges.includes('right') ? insets.right : undefined,
        }
        : null;

    return (
        <View {...props}
            style={[safePadding, bgColor ? { backgroundColor: bgColor } : null, style]}
            className={`flex-1 bg-light-background dark:bg-dark-background
            ${margin ? 'mx-4' : ''} ${className ?? ''}`}>
            {children}
        </View>
    );
};

export default ThemedView;
