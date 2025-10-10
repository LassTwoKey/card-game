import { useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, Group } from '@mantine/core';
import { TabButtonsSliderPropType } from '@/components/UI/Buttons';
import classes from './TabButtonsSlider.module.scss';

export function TabButtonsSlider(props: TabButtonsSliderPropType) {
    const { buttons, onClick, selectedIndex, className } = props;
    const { t } = useTranslation();

    const sliderRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useLayoutEffect(() => {
        const activeButton = buttonRefs.current[selectedIndex];
        const slider = sliderRef.current;

        if (activeButton && slider) {
            const { offsetLeft, offsetWidth } = activeButton;
            slider.style.left = `${offsetLeft}px`;
            slider.style.width = `${offsetWidth}px`;
        }
    }, [selectedIndex]);

    return (
        <div className={className}>
            <Group pos="relative" gap={0}>
                {buttons.map((button, index) => (
                    <Button
                        key={button.id}
                        ref={(el) => {
                            buttonRefs.current[index] = el;
                        }}
                        variant="transparent"
                        onClick={() => onClick(index)}
                        className={cn(
                            classes.button,
                            index === selectedIndex && classes.activeButton
                        )}
                    >
                        <span className={classes.button_content}>
                            <span className={classes.button_icon}>(♠)</span>
                            {index === selectedIndex && (
                                <span className={classes.button_text}>{t(button.title)}</span>
                            )}
                        </span>
                    </Button>
                ))}
                <div ref={sliderRef} className={classes.slider} />
            </Group>
        </div>
    );
}
