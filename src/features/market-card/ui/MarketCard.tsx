import { Box, BoxProps, Flex, Progress, Text } from '@mantine/core';
import cardLevelIcon from '@/assets/icons/card_level.svg';
import coinsIcon from '@/assets/icons/coins.svg';
import { CardView } from '@/entities/card/model/types';
import Image from '@/shared/ui/image';

interface MarketCardProps extends BoxProps {
    item: CardView;
}

export default function MarketCard(props: MarketCardProps) {
    const { item, ...restProps } = props;

    let borderStyle = null;
    let textColor = null;

    switch (item.rarity) {
        case 'common':
            borderStyle = '2px solid blue';
            textColor = 'blue';
            break;
        case 'rare':
            borderStyle = '2px solid orange';
            textColor = 'orange';
            break;
        case 'epic':
            borderStyle = '2px solid grape';
            textColor = 'grape';
            break;
        case 'legendary':
            borderStyle = '2px solid cyan';
            textColor = 'cyan';
            break;

        default:
            borderStyle = '2px solid blue';
            textColor = 'blue';
            break;
    }

    return (
        <Box
            bg="gray"
            bdrs="md"
            py="xs"
            px="xs"
            style={{ boxShadow: 'var(--mantine-shadow-md)', textAlign: 'center' }}
            {...restProps}
        >
            <Text
                size="xs"
                fw={600}
                c="var(--mantine-color-bright)"
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {item.name}
            </Text>

            <Text size="base" fw={600} c={textColor}>
                {item.rarity}
            </Text>

            <Box
                bd={borderStyle}
                bdrs="md"
                my="xs"
                mx="0.4rem"
                style={{ position: 'relative', paddingBottom: '110%' }}
            >
                <Image
                    src={item.currentLevelData.image}
                    alt="Price"
                    style={{ position: 'absolute', left: 0, top: 0 }}
                    w="100%"
                    h="100%"
                />
                <Text
                    fw={700}
                    size="lg"
                    c="var(--mantine-color-bright)"
                    style={{
                        position: 'absolute',
                        right: '2px',
                        bottom: '-5px',
                        textShadow: 'rgba(0, 0, 0, 0.8) 0px 1px 2px',
                        userSelect: 'none',
                    }}
                >
                    x50
                </Text>
            </Box>

            <Box mt="md" mb="xs" mx="0.4rem" style={{ position: 'relative' }}>
                <Image
                    src={cardLevelIcon}
                    alt="Card Level"
                    style={{
                        position: 'absolute',
                        bottom: '-3px',
                        width: '25px',
                        height: '25px',
                        left: '-6px',
                        textShadow: '0 2px 2px rgba(0,0,0,0.6)',
                        zIndex: 2,
                    }}
                />
                <Progress.Root size={16}>
                    <Progress.Section color="cyan" value={50} />
                </Progress.Root>

                <Text
                    fw={700}
                    c="var(--mantine-color-bright)"
                    size="xs"
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
                    {item.copiesOwned}/{228}
                </Text>
            </Box>

            <Flex align="center" justify="center">
                <Text
                    fw={700}
                    size="lg"
                    c="var(--mantine-color-bright)"
                    mr="0.2rem"
                    style={{
                        textShadow: 'rgba(0, 0, 0, 0.8) 0px 1px 2px',
                    }}
                >
                    1200
                </Text>
                <Image src={coinsIcon} alt="Price" w={18} h={18} />
            </Flex>
        </Box>
    );
}
