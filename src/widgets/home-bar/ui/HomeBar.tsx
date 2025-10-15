import { Flex, Group } from '@mantine/core';
import BattleLog from '@/features/battle-log';
import PlayerInfo from '@/features/player-info';
import Quests from '@/features/quests';
import Settings from '@/features/settings';

export default function HomeBar() {
    return (
        <Group justify="space-between" align="stretch" gap="sm" wrap="nowrap">
            <PlayerInfo />

            <Flex
                bdrs="sm"
                gap="sm"
                align="center"
                justify="flex-start"
                wrap="wrap"
                direction="row-reverse"
            >
                <Settings />
                <BattleLog />
                <Quests />
            </Flex>
        </Group>
    );
}
