import DeckSection from '@/components/MainSections/DeckSection/DeckSection';
import HomeSection from '@/components/MainSections/HomeSection/HomeSection';
import MarketSection from '@/components/MainSections/MarketSection/MarketSection';

/** Dictionary of app section names*/
export enum SectionDict {
    Market = 'market',
    Home = 'home',
    Deck = 'deck',
}

export type SectionName = (typeof SectionDict)[keyof typeof SectionDict];

export interface SectionItem {
    id: SectionName;
    component: () => React.ReactNode;
    title: string;
}

/** Array of app sections */
export const SECTION_LIST: SectionItem[] = [
    {
        id: SectionDict.Market,
        component: MarketSection,
        title: 'section.market',
    },
    {
        id: SectionDict.Home,
        component: HomeSection,
        title: 'section.home',
    },
    {
        id: SectionDict.Deck,
        component: DeckSection,
        title: 'section.deck',
    },
];
