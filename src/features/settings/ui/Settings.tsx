import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import menuIcon from '@/assets/icons/menu.svg';
import Saves from '@/features/saves';
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
            <Modal title={t('tools.settings')} centered opened={opened} onClose={close}>
                Тут будут Настройки
                <Button mr="md" onClick={() => changeLanguage('en')}>
                    {t('localization.en')}
                </Button>
                <Button mr="md" onClick={() => changeLanguage('ru')}>
                    {t('localization.ru')}
                </Button>
                <Saves />
            </Modal>

            {/* Component View */}
            <ActionIcon
                variant="transparent"
                onClick={open}
                title={t('tools.settings')}
                bg="var(--mantine-main-lucid-bg)"
                p="xs"
                style={{
                    flex: '1 1 47px',
                    minWidth: '47px',
                }}
            >
                <Image src={menuIcon} alt={t('tools.settings')} w={25} h={25} />
            </ActionIcon>
        </>
    );
}
