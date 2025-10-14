import { MouseEventHandler } from 'react';
import { Button, ButtonProps } from '@mantine/core';

interface UiButtonProps extends ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function UiButton(props: UiButtonProps) {
    const { children, style, h, ...buttonProps } = props;

    return (
        <Button
            {...buttonProps}
            h={h ?? 'var(--button-height-xs)'}
            style={{
                ...style,
            }}
        >
            {children}
        </Button>
    );
}
