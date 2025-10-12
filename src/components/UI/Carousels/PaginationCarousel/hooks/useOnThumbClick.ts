import { useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

interface UseOnThumbClickProps {
    emblaMainApi?: EmblaCarouselType;
    emblaThumbsApi?: EmblaCarouselType;
}

export default function useOnThumbClick(props: UseOnThumbClickProps) {
    const { emblaMainApi, emblaThumbsApi } = props;

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) {
                return;
            }
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    return onThumbClick;
}
