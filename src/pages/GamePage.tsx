import { PaginationCarousel } from '@/components/UI/Carousels';
import { SECTION_LIST } from '@/constants/sections.constants';
import { supportsTouch } from '@/utils';

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
