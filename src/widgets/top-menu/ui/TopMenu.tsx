import { useState } from 'react';
import { ActionIcon, Box, BoxProps, Flex, Group, Image, Progress, Text } from '@mantine/core';
import coinsIcon from '@/assets/icons/coins.svg';
import { AppContainer } from '@/shared/ui/Containers';

function Profile() {
    const [currentXP] = useState(1250);
    const maxXP = 2000;

    const percentage = (currentXP / maxXP) * 100;
    const profileLevel = 31;

    return (
        <Group gap="xs">
            <ActionIcon>
                <Text fw={700}>{profileLevel}</Text>
            </ActionIcon>

            <Box w={150} style={{ position: 'relative' }}>
                <Progress.Root size={18} w={150}>
                    <Progress.Section value={percentage} />
                </Progress.Root>

                <Text
                    size="xs"
                    fw={700}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        color: 'white',
                        textShadow: '0 1px 2px rgba(0,0,0,0.6)',
                    }}
                >
                    {currentXP}/{maxXP}
                </Text>
            </Box>
        </Group>
    );
}

function Balance() {
    const balance = 123000;

    return (
        <Flex align="center" gap="xs">
            <Text fw={700}>{balance}</Text>
            <Image
                src={coinsIcon}
                alt="Balance"
                w={30}
                h={30}
                style={{
                    userSelect: 'none',
                    pointerEvents: 'none',
                }}
            />
        </Flex>
    );
}

export default function TopMenu(props: BoxProps) {
    return (
        <Box
            {...props}
            style={{
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
                <Group justify="space-between">
                    <Profile />
                    <Balance />
                </Group>
            </AppContainer>
        </Box>
    );
}
