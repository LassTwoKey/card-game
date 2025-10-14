import { Flex, Image, Text } from '@mantine/core';
import coinsIcon from '@/assets/icons/coins.svg';
import useAppBalance from '@/shared/models/hooks/useAppBalance';

export default function Balance() {
    const { balance } = useAppBalance();

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
