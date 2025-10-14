import { Image, ImageProps } from '@mantine/core';

interface IconImageProps extends ImageProps {
    alt?: string;
}

export default function IconImage(props: IconImageProps) {
    const { style, ...imageProps } = props;

    return (
        <Image
            {...imageProps}
            style={{
                ...style,
                userSelect: 'none',
                pointerEvents: 'none',
                padding: 0,
            }}
        />
    );
}
