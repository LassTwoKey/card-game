export interface Slide {
    id: string;
    component: () => React.ReactNode;
    title: string;
    icon?: string;
}

export interface HighlightStyles {
    left: number;
    width: number;
}

export { PaginationCarousel } from '@/components/UI/Carousels/PaginationCarousel/PaginationCarousel';
