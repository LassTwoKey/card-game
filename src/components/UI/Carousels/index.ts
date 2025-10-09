import { EmblaOptionsType } from 'embla-carousel';

export interface Slide {
    id: string;
    component: () => React.ReactNode;
    title: string;
    icon?: string;
}

export interface PropType {
    slides: Slide[];
    options?: EmblaOptionsType;
    thumbOptions?: EmblaOptionsType;
}

export { PaginationCarousel } from '@/components/UI/Carousels/PaginationCarousel/PaginationCarousel';
