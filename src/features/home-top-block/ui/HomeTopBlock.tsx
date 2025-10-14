import { Flex, Group } from '@mantine/core';
import BattleLog from './BattleLog';
import ProfileBlock from './ProfileBlock';
import Quests from './Quests';
import Settings from './Settings';

export default function HomeTopBlock() {
    return (
        <Group justify="space-between">
            <ProfileBlock />

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
