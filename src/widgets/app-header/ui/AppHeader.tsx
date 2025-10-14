import { Box, BoxProps, Group } from '@mantine/core';
import Balance from '@/features/balance';
import ProfileLevelProgress from '@/features/profile-level-progress';
import Container from '@/shared/ui/container';

export default function AppHeader(props: BoxProps) {
    const { style, ...headerProps } = props;

    return (
        <Box
            component="header"
            {...headerProps}
            style={{
                ...style,
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: 'var(--mantine-height-header)',
                display: 'flex',
                alignItems: 'center',
                zIndex: 50,
                background: 'var(--mantine-color-body)',
            }}
        >
            <Container>
                <Group justify="space-between" wrap="nowrap">
                    <ProfileLevelProgress />
                    <Balance />
                </Group>
            </Container>
        </Box>
    );
}
