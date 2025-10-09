import { useTranslation } from 'react-i18next';
import { Text, Title } from '@mantine/core';

export default function DeckSection() {
    const { t } = useTranslation();

    return (
        <section>
            <Title order={1} mb="md">
                {t('section.deck')}
            </Title>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat maxime
                accusamus dignissimos nesciunt facilis maiores sunt itaque dicta? Quisquam
                accusantium eius quam deserunt! Voluptas tenetur eum neque voluptatum
                necessitatibus?
            </Text>
        </section>
    );
}
