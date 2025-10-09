import { useTranslation } from 'react-i18next';
import { Button, Text, Title } from '@mantine/core';

export default function HomeSection() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section>
            <Title order={1} mb="md">
                {t('section.home')}
            </Title>
            <Text mb="md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat maxime
                accusamus dignissimos nesciunt facilis maiores sunt itaque dicta? Quisquam
                accusantium eius quam deserunt! Voluptas tenetur eum neque voluptatum
                necessitatibus?
            </Text>

            <Button mr="md" onClick={() => changeLanguage('en')}>
                {t('localization.en')}
            </Button>
            <Button onClick={() => changeLanguage('ru')}>{t('localization.ru')}</Button>
        </section>
    );
}
