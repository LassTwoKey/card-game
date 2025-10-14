import { useTranslation } from 'react-i18next';
import { Flex, Group, Text } from '@mantine/core';
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
            <Modal opened={opened} onClose={close} title={t('home.stats')}>
                Тут будет стата игрока
            </Modal>

            {/* Component View */}
            <Flex
                miw={200}
                bg="rgba(0, 0, 0, .3)"
                px="sm"
                py="sm"
                bdrs="sm"
                gap="xl"
                align="center"
                justify="space-between"
            >
                <Button onClick={open} variant="transparent" p={0}>
                    <Text fw={700}>{t('general.player')}</Text>
                    <Image
                        src={infoIcon}
                        alt={t('general.player')}
                        w={18}
                        h={18}
                        ml="0.2rem"
                        style={{
                            transform: 'translateY(2px)',
                        }}
                    />
                </Button>

                <Group bg="rgba(0, 0, 0, .5)" bdrs="sm" pr="sm" gap={0}>
                    <Image
                        src={trophyIcon}
                        alt="trophies"
                        w={25}
                        h={25}
                        style={{
                            transform: 'scale(1.4) translateX(-10px)',
                        }}
                    />

                    <Text fw={700} c="yellow">
                        1230
                    </Text>
                </Group>
            </Flex>
        </>
    );
}
