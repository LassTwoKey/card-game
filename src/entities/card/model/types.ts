export type CardRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type CardType = 'melee' | 'defense' | 'support';

export interface CardLevel {
    level: number;
    image: string;
    damage: number;
}

export interface Card {
    id: string;
    name: string;
    abilityDescription: string;
    rarity: CardRarity;
    type: CardType;
    copiesOwned: number;
    usedCopies: number;
    levels: CardLevel[];
}

export interface CardView {
    id: string;
    name: string;
    abilityDescription: string;
    rarity: CardRarity;
    type: CardType;
    copiesOwned: number;
    usedCopies: number;
    currentLevel: number;
    currentLevelData: CardLevel;
}
