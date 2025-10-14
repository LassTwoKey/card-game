import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import historyIcon from '@/assets/icons/history.svg';
import { UiActionIcon } from '@/shared/ui/Buttons';
import { IconImage } from '@/shared/ui/Images';
import CasualModal from '@/shared/ui/Modals/ui/CasualModal';

export default function BattleLog() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t } = useTranslation();

    return (
        <>
            {/* Modal */}
            <CasualModal opened={opened} onClose={close} title={t('home.battle_log')}>
                Тут будет история боев
            </CasualModal>

            {/* Component View */}
            <UiActionIcon variant="transparent" onClick={open} title={t('home.battle_log')}>
                <IconImage src={historyIcon} alt={t('home.battle_log')} w={25} h={25} />
            </UiActionIcon>
        </>
    );
}
