import { ImageProps, Image as MantineImage } from '@mantine/core';

interface IImageProps extends ImageProps {
    alt?: string;
}

export default function Image(props: IImageProps) {
    const { style, ...imageProps } = props;

    return (
        <MantineImage
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
