import { useTranslation } from 'react-i18next';
import { Box, Button, Flex, Group, Image, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import menuIcon from '@/assets/icons/menu.svg';
import trophyIcon from '@/assets/icons/trophy.svg';

export default function HomeTopBlock() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Box>
            <Modal.Root opened={opened} onClose={close}>
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>
                            <Text fw={700}>Settings (wip)</Text>
                        </Modal.Title>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Modal.Body>
                        <Button mr="md" onClick={() => changeLanguage('en')}>
                            {t('localization.en')}
                        </Button>
                        <Button onClick={() => changeLanguage('ru')}>{t('localization.ru')}</Button>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>

            <Group justify="space-between">
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
                    <Text fw={700}>Player</Text>
                    <Group bg="rgba(0, 0, 0, .5)" bdrs="sm" pr="sm" gap={0}>
                        <Image
                            src={trophyIcon}
                            alt="trophies"
                            w={25}
                            h={25}
                            style={{
                                userSelect: 'none',
                                pointerEvents: 'none',
                                transform: 'scale(1.4) translateX(-10px)',
                            }}
                        />
                        <Text fw={700} c="yellow">
                            1230
                        </Text>
                    </Group>
                </Flex>

                <Button variant="transparent" onClick={open}>
                    <Image
                        src={menuIcon}
                        alt="menu"
                        w={30}
                        h={30}
                        style={{
                            userSelect: 'none',
                            pointerEvents: 'none',
                        }}
                    />
                </Button>
            </Group>
        </Box>
    );
}
