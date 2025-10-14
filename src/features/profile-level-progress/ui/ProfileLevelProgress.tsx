import { useTranslation } from 'react-i18next';
import { ActionIcon, Box, Group, Progress, Text } from '@mantine/core';
import useProfileLevel from '@/shared/models/hooks/useProfileLevel';

export default function ProfileLevelProgress() {
    const { t } = useTranslation();
    const { currentXP, maxXP, percentageToNextLevel, profileLevel } = useProfileLevel();

    return (
        <Group gap="xs" wrap="nowrap">
            <ActionIcon title={t('general.game_level')}>
                <Text fw={700}>{profileLevel}</Text>
            </ActionIcon>

            <Box w={150} style={{ position: 'relative' }}>
                <Progress.Root size={18} w={150}>
                    <Progress.Section value={percentageToNextLevel} />
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
