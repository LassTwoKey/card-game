import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react';
import { useOnScroll, useOnSelect, useOnThumbClick } from '.';
import { EmblaCarouselType } from 'embla-carousel';
import { useTranslation } from 'react-i18next';
import { HighlightStyles, Slide } from '@/shared/ui/Carousels';

interface UseScrollCarouselProps {
    emblaMainApi?: EmblaCarouselType;
    emblaThumbsApi?: EmblaCarouselType;
    slides: Slide[];
    setHighlightStyles: Dispatch<SetStateAction<HighlightStyles>>;
    tabsContainerRef: RefObject<HTMLDivElement | null>;
    tabRefs: RefObject<(HTMLButtonElement | null)[]>;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
}

export default function useScrollCarousel(props: UseScrollCarouselProps) {
    const {
        emblaMainApi,
        emblaThumbsApi,
        slides,
        setSelectedIndex,
        tabsContainerRef,
        tabRefs,
        setHighlightStyles,
    } = props;

    const { i18n } = useTranslation();

    const hasMounted = useRef(false);

    const onThumbClick = useOnThumbClick({
        emblaMainApi,
        emblaThumbsApi,
    });

    const onSelect = useOnSelect({
        emblaMainApi,
        emblaThumbsApi,
        setSelectedIndex,
    });

    const onScroll = useOnScroll({
        emblaMainApi,
        slides,
        tabsContainerRef,
        tabRefs,
        setHighlightStyles,
    });

    useEffect(() => {
        if (!emblaMainApi) {
            return;
        }

        onSelect();
        onScroll();

        emblaMainApi.on('select', onSelect);
        emblaMainApi.on('scroll', onScroll);
        emblaMainApi.on('reInit', onSelect);

        window.addEventListener('resize', onScroll);

        return () => {
            emblaMainApi.off('select', onSelect);
            emblaMainApi.off('scroll', onScroll);
            emblaMainApi.off('reInit', onSelect);

            window.removeEventListener('resize', onScroll);
        };
    }, [emblaMainApi, useOnSelect, useOnScroll]);

    /** Needed to adjust highlight after changing the language */
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }

        onScroll();
    }, [i18n.language]);

    return { onSelect, onScroll, onThumbClick };
}
