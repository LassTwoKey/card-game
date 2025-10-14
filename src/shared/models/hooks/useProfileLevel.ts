export default function useProfileLevel() {
    const currentXP = 1250;
    const maxXP = 2000;
    const profileLevel = 31;

    const percentageToNextLevel = (currentXP / maxXP) * 100;

    return { currentXP, maxXP, percentageToNextLevel, profileLevel };
}
