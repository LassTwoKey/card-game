import { ContainerProps, Container as MantineContainer } from '@mantine/core';

export default function Container(props: ContainerProps) {
    const { children, ...containerProps } = props;

    return (
        <MantineContainer {...containerProps} fluid style={{ width: '100%' }}>
            {children}
        </MantineContainer>
    );
}
