import { useTranslation } from 'react-i18next';
import { Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import infoIcon from '@/assets/icons/info.svg';
import trophyIcon from '@/assets/icons/trophy.svg';
import Button from '@/shared/ui/button';
import Image from '@/shared/ui/image';
import Modal from '@/shared/ui/modal';

export default function PlayerInfo() {
    const { t } = useTranslation();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {/* Modal */}
            <Modal title={t('home.stats')} centered opened={opened} onClose={close}>
                Тут будет стата игрока
            </Modal>

            {/* Component View */}
            <Flex
                bg="var(--mantine-main-lucid-bg)"
                px={{ base: 'xs', sm: 'sm' }}
                py="xs"
                bdrs="sm"
                style={{ flex: '1 1 auto' }}
                wrap={{ base: 'wrap', sm: 'nowrap' }}
            >
                <Flex wrap={{ base: 'wrap', sm: 'nowrap' }} align="center">
                    {/* Profile */}
                    <Button
                        title={t('home.stats')}
                        variant="transparent"
                        p={0}
                        mr={{ base: 0, sm: 'xl' }}
                        onClick={open}
                    >
                        <Text
                            fw={700}
                            maw={{ base: 150, sm: 'auto' }}
                            c="var(--mantine-color-bright)"
                            style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {t('general.player')}
                        </Text>
                        <Image
                            src={infoIcon}
                            alt={t('general.player')}
                            w={18}
                            h={18}
                            ml="0.2rem"
                            style={{
                                transform: 'translateY(1px)',
                            }}
                        />
                    </Button>

                    {/* Trophies */}
                    <Flex
                        bdrs="sm"
                        gap="xs"
                        align="center"
                        wrap="nowrap"
                        bg="rgba(0, 0, 0, .5)"
                        pos="relative"
                        h="30"
                        pr="lg"
                        ml={14}
                    >
                        <Image
                            src={trophyIcon}
                            alt="trophies"
                            w={25}
                            h={25}
                            style={{
                                transform: 'scale(1.5)',
                                position: 'absolute',
                                left: -10,
                            }}
                        />

                        <Text fw={700} c="yellow" pl="xl" fz="sm">
                            1230
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
