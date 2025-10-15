import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import savesIcon from '@/assets/icons/saves.svg';
import ActionIcon from '@/shared/ui/action-icon';
import Image from '@/shared/ui/image';
import Modal from '@/shared/ui/modal';

export default function Saves() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t } = useTranslation();

    return (
        <>
            {/* Modal */}
            <Modal title={t('general.saves')} centered opened={opened} onClose={close}>
                Тут будут saves
            </Modal>

            {/* Component View */}
            <ActionIcon title={t('general.saves')} variant="transparent" onClick={open}>
                <Image src={savesIcon} alt={t('general.saves')} w={32} h={32} />
            </ActionIcon>
        </>
    );
}
