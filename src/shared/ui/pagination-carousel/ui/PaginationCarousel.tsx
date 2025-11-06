import { useRef, useState } from 'react';
import cn from 'classnames';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mantine/core';
import Container from '@/shared/ui/container';
import { Slide, useScrollCarousel } from '../models';
import classes from './PaginationCarousel.module.scss';

interface PaginationCarouselProps {
    slides: Slide[];
    options?: EmblaOptionsType;
    thumbOptions?: EmblaOptionsType;
}

export default function PaginationCarousel(props: PaginationCarouselProps) {
    const { slides, options, thumbOptions } = props;

    const [selectedIndex, setSelectedIndex] = useState(options?.startIndex ?? 0);
    const [highlightStyles, setHighlightStyles] = useState({ left: 0, width: 0 });
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(thumbOptions);
    const tabsContainerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const { onThumbClick } = useScrollCarousel({
        emblaMainApi,
        emblaThumbsApi,
        slides,
        setSelectedIndex,
        tabsContainerRef,
        tabRefs,
        setHighlightStyles,
    });

    const { t } = useTranslation();

    return (
        <div className={classes.carousel}>
            {/* Main carousel */}
            <div id="carousel-content" className={classes.carousel__viewport} ref={emblaMainRef}>
                <div className={classes.carousel__container}>
                    {slides.map((slide) => (
                        <Container className={classes.carousel__slide} key={slide.id}>
                            {slide.component()}
                        </Container>
                    ))}
                </div>
            </div>

            {/* Tabs with highlight styles */}
            <div className={classes.carousel_thumbs}>
                <div className={classes.carousel_thumbs__viewport} ref={emblaThumbsRef}>
                    <div className={classes.carousel_thumbs__container} ref={tabsContainerRef}>
                        {slides.map((slide, index) => (
                            <Button
                                key={slide.id}
                                ref={(el) => {
                                    tabRefs.current[index] = el;
                                }}
                                unstyled
                                variant="transparent"
                                onClick={() => onThumbClick(index)}
                                className={cn(
                                    classes.button,
                                    index === selectedIndex && classes.active
                                )}
                            >
                                <span className={classes.button__content}>
                                    <span className={classes.button__icon}>
                                        <img src={slide.icon} alt="Market" width={40} height={40} />
                                    </span>
                                    {index === selectedIndex && (
                                        <span className={classes.button__text}>
                                            {t(slide.title)}
                                        </span>
                                    )}
                                </span>
                            </Button>
                        ))}
                        <div className={classes.highlight} style={highlightStyles} />
                    </div>
                </div>
            </div>
        </div>
    );
}
