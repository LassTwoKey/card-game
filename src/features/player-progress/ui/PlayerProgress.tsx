import { useTranslation } from 'react-i18next';
import { Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useProfileLevel from '@/shared/models/hooks/useProfileLevel';
import ActionIcon from '@/shared/ui/action-icon';
import Modal from '@/shared/ui/modal';

export default function PlayerProgress() {
    const [opened, { open, close }] = useDisclosure(false);
    const { t } = useTranslation();
    const { profileLevel } = useProfileLevel();

    return (
        <>
            {/* Modal */}
            <Modal title={t('general.player_progress')} centered opened={opened} onClose={close}>
                Тут будет карта с наградами за уровни
            </Modal>

            {/* Component View */}
            <ActionIcon
                title={t('general.game_level')}
                c="var(--mantine-color-bright)"
                onClick={open}
            >
                <Text fw={700}>{profileLevel}</Text>
            </ActionIcon>
        </>
    );
}
