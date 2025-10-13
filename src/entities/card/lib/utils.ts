import { BASE_UPGRADE_COST } from '../model/constants';
import { Card, CardLevel, CardRarity, CardView } from '../model/types';

export { MAX_LEVEL_BY_RARITY } from '../model/constants';

export const getTotalCopiesRequiredForLevel = (level: number, rarity: CardRarity): number => {
    if (level <= 1) {
        return 0;
    }
    const base = BASE_UPGRADE_COST[rarity];
    return base * (2 ** (level - 1) - 1);
};

export const calculateCurrentLevel = (
    usedCopies: number,
    maxLevel: number,
    rarity: CardRarity
): number => {
    for (let level = maxLevel; level >= 1; level--) {
        if (usedCopies >= getTotalCopiesRequiredForLevel(level, rarity)) {
            return level;
        }
    }
    return 1;
};

export const getLevelData = (levels: CardLevel[], level: number) => {
    const data = levels.find((l) => l.level === level);

    if (!data) {
        if (!data) {
            throw new Error(`Level ${level} not found in card levels`);
        }
    }

    return data;
};

export const mapCardToView = (card: Card): CardView => {
    const currentLevel = calculateCurrentLevel(card.usedCopies, card.levels.length, card.rarity);
    const currentLevelData = getLevelData(card.levels, currentLevel);

    return {
        ...card,
        currentLevel,
        currentLevelData,
    };
};
