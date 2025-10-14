import { MouseEventHandler } from 'react';
import { ActionIconProps, ActionIcon as MantineActionIcon } from '@mantine/core';

interface IActionIconProps extends ActionIconProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
}

export default function ActionIcon(props: IActionIconProps) {
    const { children, style, h, w, ...buttonProps } = props;

    return (
        <MantineActionIcon
            {...buttonProps}
            h={h ?? 'var(--button-height-xs)'}
            w={w ?? 'var(--button-width-xs)'}
            style={{
                ...style,
            }}
        >
            {children}
        </MantineActionIcon>
    );
}
