import { MouseEventHandler } from 'react';
import { ActionIcon, ActionIconProps } from '@mantine/core';

interface UiActionIconProps extends ActionIconProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
}

export default function UiActionIcon(props: UiActionIconProps) {
    const { children, style, h, w, ...buttonProps } = props;

    return (
        <ActionIcon
            {...buttonProps}
            h={h ?? 'var(--button-height-xs)'}
            w={w ?? 'var(--button-width-xs)'}
            style={{
                ...style,
            }}
        >
            {children}
        </ActionIcon>
    );
}
