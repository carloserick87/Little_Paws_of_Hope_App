import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
    className?: string;
}

const ThemedText = ({
                        className,
                        ...rest
                    }: Props) => {
    return (
        <Text
            {...rest}
            className={`
        text-light-text
        dark:text-dark-text
        ${className ?? ''}
      `}
        />
    );
};

export default ThemedText;