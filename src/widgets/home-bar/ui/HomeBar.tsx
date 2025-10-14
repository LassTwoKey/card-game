import { Flex, Group } from '@mantine/core';
import BattleLog from '@/features/battle-log';
import PlayerInfo from '@/features/player-info';
import Quests from '@/features/quests';
import Settings from '@/features/settings';

export default function HomeBar() {
    return (
        <Group justify="space-between" gap="sm">
            <PlayerInfo />

            <Flex
                pl="sm"
                py="sm"
                bdrs="sm"
                gap="sm"
                align="center"
                justify="flex-end"
                wrap="nowrap"
            >
                <BattleLog />
                <Quests />
                <Settings />
            </Flex>
        </Group>
    );
}
