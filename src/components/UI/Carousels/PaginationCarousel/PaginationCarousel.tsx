import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TabButtonsSlider } from '@/components/UI/Buttons';
import { PaginationCarouselPropType } from '@/components/UI/Carousels';
import classes from './PaginationCarousel.module.scss';

/** Prototype from https://www.embla-carousel.com/examples/predefined/#thumbnails */

export function PaginationCarousel(props: PaginationCarouselPropType) {
    const { slides, options, thumbOptions } = props;

    const [selectedIndex, setSelectedIndex] = useState(options?.startIndex ?? 0);
    const [scrollProgress, setScrollProgress] = useState(0); // ← новое состояние

    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(thumbOptions);

    // Обработчик прокрутки (для scrollProgress)
    const onScroll = useCallback(() => {
        if (!emblaMainApi) return;

        const progress = emblaMainApi.scrollProgress();
        setScrollProgress(progress);
    }, [emblaMainApi]);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        const index = emblaMainApi.selectedScrollSnap();
        setSelectedIndex(index);
        emblaThumbsApi.scrollTo(index);
    }, [emblaMainApi, emblaThumbsApi]);

    // Подписка на события
    useEffect(() => {
        if (!emblaMainApi) return;

        onSelect(); // инициализация
        onScroll(); // инициализация прогресса

        // Подписываемся
        emblaMainApi.on('select', onSelect);
        emblaMainApi.on('scroll', onScroll);
        emblaMainApi.on('reInit', onSelect);

        // Отписываемся при размонтировании или изменении API
        return () => {
            emblaMainApi.off('select', onSelect);
            emblaMainApi.off('scroll', onScroll);
            emblaMainApi.off('reInit', onSelect);
        };
    }, [emblaMainApi, onSelect, onScroll]);

    // Теперь вы можете использовать scrollProgress, например:
    // console.log('Прогресс прокрутки:', scrollProgress);

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

            {/* Пример: индикатор прогресса */}
            <div>{scrollProgress ?? '0'}</div>
            <div className={classes.progress}>
                <div
                    className={classes.progressBar}
                    style={{ width: `${scrollProgress * 100}%` }}
                />
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
