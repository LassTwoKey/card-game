import { Dispatch, SetStateAction, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

interface UseOnSelectProps {
    emblaMainApi?: EmblaCarouselType;
    emblaThumbsApi?: EmblaCarouselType;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
}

export default function useOnSelect(props: UseOnSelectProps) {
    const { emblaMainApi, emblaThumbsApi, setSelectedIndex } = props;

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) {
            return;
        }

        const index = emblaMainApi.selectedScrollSnap();

        setSelectedIndex(index);
        emblaThumbsApi.scrollTo(index);
    }, [emblaMainApi, emblaThumbsApi]);

    return onSelect;
}
