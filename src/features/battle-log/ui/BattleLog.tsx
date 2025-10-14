import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import historyIcon from '@/assets/icons/history.svg';
import ActionIcon from '@/shared/ui/action-icon';
import Image from '@/shared/ui/image';
import Modal from '@/shared/ui/modal';

export default function BattleLog() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t } = useTranslation();

    return (
        <>
            {/* Modal */}
            <Modal title={t('home.battle_log')} centered opened={opened} onClose={close}>
                Тут будет история боев
            </Modal>

            {/* Component View */}
            <ActionIcon variant="transparent" onClick={open} title={t('home.battle_log')}>
                <Image src={historyIcon} alt={t('home.battle_log')} w={32} h={32} />
            </ActionIcon>
        </>
    );
}
