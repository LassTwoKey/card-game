import deckIcon from '@/assets/icons/deck.svg';
import homeIcon from '@/assets/icons/home.svg';
import marketIcon from '@/assets/icons/market.svg';
import { DeckSection, HomeSection, MarketSection } from '@/widgets/main-sections';

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
    icon: string;
}

/** Array of app sections */
export const SECTION_LIST: SectionItem[] = [
    {
        id: SectionDict.Market,
        component: MarketSection,
        title: 'section.market',
        icon: marketIcon,
    },
    {
        id: SectionDict.Home,
        component: HomeSection,
        title: 'section.home',
        icon: homeIcon,
    },
    {
        id: SectionDict.Deck,
        component: DeckSection,
        title: 'section.deck',
        icon: deckIcon,
    },
];
