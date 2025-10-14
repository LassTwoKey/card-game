import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import questsIcon from '@/assets/icons/quests.svg';
import ActionIcon from '@/shared/ui/action-icon';
import Image from '@/shared/ui/image';
import Modal from '@/shared/ui/modal';

export default function Quests() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t } = useTranslation();

    return (
        <>
            {/* Modal */}
            <Modal title={t('home.quests')} centered opened={opened} onClose={close}>
                Тут будут квесты
            </Modal>

            {/* Component View */}
            <ActionIcon variant="transparent" onClick={open} title={t('home.quests')}>
                <Image src={questsIcon} alt={t('home.quests')} w={32} h={32} />
            </ActionIcon>
        </>
    );
}
