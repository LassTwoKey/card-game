import { SECTION_LIST } from '@/shared/lib/constants/sections.constants';
import { supportsTouch } from '@/shared/lib/utils/app';
import PaginationCarousel from '@/shared/ui/pagination-carousel';
import AppHeader from '@/widgets/app-header';

export function GamePage() {
    return (
        <>
            <AppHeader />
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
        </>
    );
}
