import { Dispatch, RefObject, SetStateAction, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import type { HighlightStyles, Slide } from './type';

interface UseOnScrollProps {
    emblaMainApi?: EmblaCarouselType;
    slides: Slide[];
    setHighlightStyles: Dispatch<SetStateAction<HighlightStyles>>;
    tabsContainerRef: RefObject<HTMLDivElement | null>;
    tabRefs: RefObject<(HTMLButtonElement | null)[]>;
}

/**
 * Calculates the interpolated index based on scroll progress and total slide count.
 * @param {number} progress - Scroll progress from 0 to 1.
 * @param {number} slidesCount - Total number of slides.
 * @returns {number} Interpolated index in range [0, slidesCount - 1].
 */
function calculateInterpolatedIndex(progress: number, slidesCount: number): number {
    return Math.max(0, Math.min(progress * (slidesCount - 1), slidesCount - 1));
}

/**
 * Computes the pair of adjacent tab indices (prev and next) for interpolation.
 * @param {number} interpolatedIndex - The current interpolated index.
 * @param {number} slidesCount - Total number of slides.
 * @returns {{ prevIndex: number; nextIndex: number; t: number }} Object with indices and interpolation factor.
 */
function getInterpolationIndices(
    interpolatedIndex: number,
    slidesCount: number
): {
    prevIndex: number;
    nextIndex: number;
    t: number;
} {
    const prevIndex = Math.max(0, Math.floor(interpolatedIndex));
    const nextIndex = Math.min(prevIndex + 1, slidesCount - 1);
    const t = interpolatedIndex - prevIndex;
    return { prevIndex, nextIndex, t };
}

/**
 * Calculates the interpolated position and width for the highlight element.
 * @param {HTMLElement} container - The container holding the tabs.
 * @param {HTMLElement} prevTab - The tab corresponding to the previous index.
 * @param {HTMLElement} nextTab - The tab corresponding to the next index.
 * @param {number} t - Interpolation factor between 0 and 1.
 * @returns {{ left: number; width: number }} Interpolated CSS styles.
 */
function calculateHighlightStyles(
    container: HTMLElement,
    prevTab: HTMLElement,
    nextTab: HTMLElement,
    t: number
): { left: number; width: number } {
    const containerRect = container.getBoundingClientRect();
    const prevRect = prevTab.getBoundingClientRect();
    const nextRect = nextTab.getBoundingClientRect();

    const leftPrev = prevRect.left - containerRect.left;
    const leftNext = nextRect.left - containerRect.left;
    const widthPrev = prevRect.width;
    const widthNext = nextRect.width;

    const interpolatedLeft = leftPrev + (leftNext - leftPrev) * t;
    const interpolatedWidth = widthPrev + (widthNext - widthPrev) * t;

    return {
        left: interpolatedLeft,
        width: interpolatedWidth,
    };
}

export default function useOnScroll(props: UseOnScrollProps) {
    const { emblaMainApi, slides, tabsContainerRef, tabRefs, setHighlightStyles } = props;

    const onScroll = useCallback(() => {
        if (!emblaMainApi) {
            return;
        }

        const progress = emblaMainApi.scrollProgress();
        const slidesCount = slides.length;

        if (slidesCount <= 1) {
            return;
        }

        const container = tabsContainerRef.current;
        if (!container) {
            return;
        }
        const interpolatedIndex = calculateInterpolatedIndex(progress, slidesCount);
        const { prevIndex, nextIndex, t } = getInterpolationIndices(interpolatedIndex, slidesCount);

        const prevTab = tabRefs.current[prevIndex];
        const nextTab = tabRefs.current[nextIndex];

        if (!prevTab || !nextTab) {
            return;
        }

        const highlightStyles = calculateHighlightStyles(container, prevTab, nextTab, t);
        setHighlightStyles(highlightStyles);
    }, [emblaMainApi, slides.length]);

    return onScroll;
}
