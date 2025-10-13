import { CardRarity } from './types';

export const CARD_RARITIES = ['common', 'rare', 'epic', 'legendary'] as const;
export const CARD_TYPES = ['melee', 'defense', 'support'] as const;

export const BASE_UPGRADE_COST: Record<CardRarity, number> = {
    common: 2,
    rare: 2,
    epic: 2,
    legendary: 2,
};

export const MAX_LEVEL_BY_RARITY: Record<CardRarity, number> = {
    common: 5,
    rare: 7,
    epic: 10,
    legendary: 12,
};
