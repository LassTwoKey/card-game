import { Container, ContainerProps } from '@mantine/core';

export default function AppContainer(props: ContainerProps) {
    const { children, ...containerProps } = props;

    return (
        <Container {...containerProps} fluid style={{ width: '100%' }}>
            {children}
        </Container>
    );
}
