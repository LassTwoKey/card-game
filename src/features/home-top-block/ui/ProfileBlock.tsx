import { useTranslation } from 'react-i18next';
import { Flex, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import infoIcon from '@/assets/icons/info.svg';
import trophyIcon from '@/assets/icons/trophy.svg';
import { UiButton } from '@/shared/ui/Buttons';
import { IconImage } from '@/shared/ui/Images';
import CasualModal from '@/shared/ui/Modals/ui/CasualModal';

export default function ProfileBlock() {
    const { t } = useTranslation();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            {/* Modal */}
            <CasualModal opened={opened} onClose={close} title={t('home.stats')}>
                Тут будет стата игрока
            </CasualModal>

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
                <UiButton onClick={open} variant="transparent" p={0}>
                    <Text fw={700}>{t('general.player')}</Text>
                    <IconImage
                        src={infoIcon}
                        alt={t('general.player')}
                        w={18}
                        h={18}
                        ml="0.2rem"
                        style={{
                            transform: 'translateY(2px)',
                        }}
                    />
                </UiButton>

                <Group bg="rgba(0, 0, 0, .5)" bdrs="sm" pr="sm" gap={0}>
                    <IconImage
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
