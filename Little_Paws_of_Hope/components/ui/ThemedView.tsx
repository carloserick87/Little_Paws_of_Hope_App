import { View, ViewProps } from 'react-native';

interface Props extends ViewProps {
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemedView = ({
                        style,
                        className,
                        margin = false,
                        bgColor,
                        children,
                        ...props
                    }: Props) => {
    return (
        <View {...props}
            style={[style,]} className={`flex-1 bg-light-background dark:bg-dark-background
            ${margin ? 'mx-4' : ''} ${className ?? ''}`}>
            {children}
        </View>
    );
};

export default ThemedView;