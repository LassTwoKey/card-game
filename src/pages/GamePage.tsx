import { Card, mapCardToView } from '@/entities/card';
import { SECTION_LIST } from '@/shared/lib/constants/sections.constants';
import { supportsTouch } from '@/shared/lib/utils/app';
import { PaginationCarousel } from '@/shared/ui/Carousels';

const fireballCard: Card = {
    id: 'fireball-001',
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
const fireballCommonCard: Card = {
    id: 'fireball-001',
    name: 'Огненный шар',
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

console.log(mapCardToView(fireballCommonCard));
console.log(mapCardToView(fireballCard));

export function GamePage() {
    return (
        <PaginationCarousel
            slides={SECTION_LIST}
            options={{
                startIndex: Math.floor(SECTION_LIST.length / 2),
                watchDrag: supportsTouch(),
                duration: 20,
            }}
            thumbOptions={{
                containScroll: 'keepSnaps',
                dragFree: false,
                watchDrag: false,
            }}
        />
    );
}
