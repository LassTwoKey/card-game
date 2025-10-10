import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TabButtonsSlider } from '@/components/UI/Buttons';
import { PaginationCarouselPropType } from '@/components/UI/Carousels';
import classes from './PaginationCarousel.module.scss';

/** Prototype from https://www.embla-carousel.com/examples/predefined/#thumbnails */

export function PaginationCarousel(props: PaginationCarouselPropType) {
    const { slides, options, thumbOptions } = props;

    const [selectedIndex, setSelectedIndex] = useState(options?.startIndex ?? 0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(thumbOptions);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) {
                return;
            }
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) {
            return;
        }
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) {
            return;
        }
        onSelect();

        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <div className={classes.carousel}>
            <div className={classes.carousel__viewport} ref={emblaMainRef}>
                <div className={classes.carousel__container}>
                    {slides.map((slide) => (
                        <div className={classes.carousel__slide} key={slide.id}>
                            {slide.component()}
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.carousel_thumbs}>
                <div className={classes.carousel_thumbs__viewport} ref={emblaThumbsRef}>
                    <TabButtonsSlider
                        className={classes.carousel_thumbs__container}
                        buttons={slides}
                        selectedIndex={selectedIndex}
                        onClick={onThumbClick}
                    />
                </div>
            </div>
        </div>
    );
}
