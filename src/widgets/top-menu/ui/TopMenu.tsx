import { Box, BoxProps, Group } from '@mantine/core';
import { AppContainer } from '@/shared/ui/Containers';
import Balance from './Balance';
import ProfileLevelProgress from './ProfileLevelProgress';

export default function TopMenu(props: BoxProps) {
    const { style, ...menuProps } = props;

    return (
        <Box
            {...menuProps}
            style={{
                ...style,
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: 'var(--mantine-height-header)',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <AppContainer>
                <Group justify="space-between" wrap="nowrap">
                    <ProfileLevelProgress />
                    <Balance />
                </Group>
            </AppContainer>
        </Box>
    );
}
