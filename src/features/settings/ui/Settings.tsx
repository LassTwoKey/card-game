import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import menuIcon from '@/assets/icons/menu.svg';
import savesIcon from '@/assets/icons/saves.svg';
import ActionIcon from '@/shared/ui/action-icon';
import Button from '@/shared/ui/button';
import Image from '@/shared/ui/image';
import Modal from '@/shared/ui/modal';

export default function Settings() {
    const [opened, { open, close }] = useDisclosure(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {/* Modal */}
            <Modal opened={opened} onClose={close} title={t('tools.settings')}>
                Тут будут Настройки
                <Button mr="md" onClick={() => changeLanguage('en')}>
                    {t('localization.en')}
                </Button>
                <Button mr="md" onClick={() => changeLanguage('ru')}>
                    {t('localization.ru')}
                </Button>
                <ActionIcon variant="transparent" onClick={open} title={t('general.saves')}>
                    <Image src={savesIcon} alt={t('general.saves')} w={25} h={25} />
                </ActionIcon>
            </Modal>

            {/* Component View */}
            <ActionIcon variant="transparent" onClick={open} title={t('tools.settings')}>
                <Image src={menuIcon} alt={t('tools.settings')} w={25} h={25} />
            </ActionIcon>
        </>
    );
}
