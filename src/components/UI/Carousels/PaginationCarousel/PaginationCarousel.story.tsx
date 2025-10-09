import { SECTION_LIST } from '@/constants/sections.constants';
import { supportsTouch } from '@/utils';
import { PaginationCarousel } from './PaginationCarousel';

export default {
    title: 'PaginationCarousel',
};

export const Usage = () => (
    <PaginationCarousel
        slides={SECTION_LIST}
        options={{
            startIndex: Math.floor(SECTION_LIST.length / 2),
            watchDrag: supportsTouch(),
        }}
        thumbOptions={{
            containScroll: 'keepSnaps',
            dragFree: false,
            watchDrag: false,
        }}
    />
);
