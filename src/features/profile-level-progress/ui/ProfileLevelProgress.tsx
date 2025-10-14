import { Box, Group, Progress, Text } from '@mantine/core';
import PlayerProgress from '@/features/player-progress';
import useProfileLevel from '@/shared/models/hooks/useProfileLevel';

export default function ProfileLevelProgress() {
    const { currentXP, maxXP, percentageToNextLevel } = useProfileLevel();

    return (
        <Group gap="xs" wrap="nowrap">
            <PlayerProgress />

            <Box w={150} style={{ position: 'relative' }}>
                <Progress.Root size={18} w={150}>
                    <Progress.Section value={percentageToNextLevel} />
                </Progress.Root>

                <Text
                    fw={700}
                    c="var(--mantine-color-bright)"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        userSelect: 'none',
                        textShadow: '0 1px 2px rgba(0,0,0,0.6)',
                    }}
                >
                    {currentXP}/{maxXP}
                </Text>
            </Box>
        </Group>
    );
}
