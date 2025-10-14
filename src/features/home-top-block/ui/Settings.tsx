import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import menuIcon from '@/assets/icons/menu.svg';
import savesIcon from '@/assets/icons/saves.svg';
import { UiActionIcon, UiButton } from '@/shared/ui/Buttons';
import { IconImage } from '@/shared/ui/Images';
import CasualModal from '@/shared/ui/Modals/ui/CasualModal';

export default function Settings() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {/* Modal */}
            <CasualModal opened={opened} onClose={close} title={t('tools.settings')}>
                Тут будут Настройки
                <UiButton mr="md" onClick={() => changeLanguage('en')}>
                    {t('localization.en')}
                </UiButton>
                <UiButton mr="md" onClick={() => changeLanguage('ru')}>
                    {t('localization.ru')}
                </UiButton>
                <UiActionIcon variant="transparent" onClick={open} title={t('general.saves')}>
                    <IconImage src={savesIcon} alt={t('general.saves')} w={25} h={25} />
                </UiActionIcon>
            </CasualModal>

            {/* Component View */}
            <UiActionIcon variant="transparent" onClick={open} title={t('tools.settings')}>
                <IconImage src={menuIcon} alt={t('tools.settings')} w={25} h={25} />
            </UiActionIcon>
        </>
    );
}
