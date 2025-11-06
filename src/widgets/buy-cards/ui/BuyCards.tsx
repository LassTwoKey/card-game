import { useTranslation } from 'react-i18next';
import { Box, BoxProps, Grid } from '@mantine/core';
import { Card, mapCardToView } from '@/entities/card';
import MarketCard from '@/features/market-card';
import RibbonTitle from '@/features/ribbon-title';

const fireballCommonCard: Card = {
    id: 'fireball-001',
    name: 'Супер гига Огненный шар',
    abilityDescription: 'Наносит урон по области',
    rarity: 'common',
    type: 'melee',
    copiesOwned: 5,
    usedCopies: 5000,
    levels: [
        {
            level: 1,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 10,
        },
        {
            level: 2,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 15,
        },
        {
            level: 3,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 22,
        },
        {
            level: 4,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
        {
            level: 5,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
        {
            level: 6,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
        {
            level: 7,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
        {
            level: 8,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
        {
            level: 9,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
        {
            level: 10,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
    ],
};
const fireballRareCard: Card = {
    id: 'fireball-002',
    name: 'Огненный шар',
    abilityDescription: 'Наносит урон по области',
    rarity: 'rare',
    type: 'melee',
    copiesOwned: 10,
    usedCopies: 2,
    levels: [
        {
            level: 1,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 10,
        },
        {
            level: 2,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 15,
        },
        {
            level: 3,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 22,
        },
        {
            level: 4,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
    ],
};
const fireballEpicCard: Card = {
    id: 'fireball-003',
    name: 'Огненный шар',
    abilityDescription: 'Наносит урон по области',
    rarity: 'epic',
    type: 'melee',
    copiesOwned: 10,
    usedCopies: 2,
    levels: [
        {
            level: 1,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 10,
        },
        {
            level: 2,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 15,
        },
        {
            level: 3,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 22,
        },
        {
            level: 4,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
    ],
};
const fireballLegendaryCard: Card = {
    id: 'fireball-004',
    name: 'Огненный шар',
    abilityDescription: 'Наносит урон по области',
    rarity: 'legendary',
    type: 'melee',
    copiesOwned: 10,
    usedCopies: 2,
    levels: [
        {
            level: 1,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 10,
        },
        {
            level: 2,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 15,
        },
        {
            level: 3,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 22,
        },
        {
            level: 4,
            image: 'https://www.freeiconspng.com/uploads/fireball-clipart-png-picture-2.png',
            damage: 32,
        },
    ],
};

// console.log(mapCardToView(fireballCommonCard));
// console.log(mapCardToView(fireballRareCard));
const cardList = [
    mapCardToView(fireballCommonCard),
    mapCardToView(fireballRareCard),
    mapCardToView(fireballEpicCard),
    mapCardToView(fireballLegendaryCard),
];
console.log(cardList);

interface BuyCardsProps extends BoxProps {}

export default function BuyCards(props: BuyCardsProps) {
    const { t } = useTranslation();

    return (
        <Box {...props}>
            <RibbonTitle text={t('market.buy_cards')} my="md" type="yellow" />

            <Grid maw="25rem" mx="auto">
                {cardList.map((card) => (
                    <Grid.Col key={card.id} span={4}>
                        <MarketCard item={card} />
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
}
