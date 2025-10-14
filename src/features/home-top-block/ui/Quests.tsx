import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import questsIcon from '@/assets/icons/quests.svg';
import { UiActionIcon } from '@/shared/ui/Buttons';
import { IconImage } from '@/shared/ui/Images';
import CasualModal from '@/shared/ui/Modals/ui/CasualModal';

export default function Quests() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t } = useTranslation();

    return (
        <>
            {/* Modal */}
            <CasualModal opened={opened} onClose={close} title={t('home.quests')}>
                Тут будут квесты
            </CasualModal>

            {/* Component View */}
            <UiActionIcon variant="transparent" onClick={open} title={t('home.quests')}>
                <IconImage src={questsIcon} alt={t('home.quests')} w={25} h={25} />
            </UiActionIcon>
        </>
    );
}
