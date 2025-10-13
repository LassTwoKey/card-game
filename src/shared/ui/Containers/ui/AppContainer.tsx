import React from 'react';
import { Container, ContainerProps } from '@mantine/core';

export default function AppContainer(props: ContainerProps) {
    const { children } = props;

    return (
        <Container {...props} fluid style={{ width: '100%' }}>
            {children}
        </Container>
    );
}
