import { useTranslation } from 'react-i18next';
import { Text, Title } from '@mantine/core';
import { HomeTopBlock } from '@/features/home-top-block';

export default function HomeSection() {
    const { t } = useTranslation();

    return (
        <section>
            <HomeTopBlock />

            <Title order={1} mb="md">
                {t('section.home')}
            </Title>
            <Text mb="md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat maxime
                accusamus dignissimos nesciunt facilis maiores sunt itaque dicta? Quisquam
                accusantium eius quam deserunt! Voluptas tenetur eum neque voluptatum
                necessitatibus?
            </Text>
        </section>
    );
}
