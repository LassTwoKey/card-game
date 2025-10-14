import { MouseEventHandler } from 'react';
import { ButtonProps, Button as MantineButton } from '@mantine/core';

interface IButtonProps extends ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: IButtonProps) {
    const { children, style, h, ...buttonProps } = props;

    return (
        <MantineButton
            {...buttonProps}
            h={h ?? 'var(--button-height-xs)'}
            style={{
                ...style,
            }}
        >
            {children}
        </MantineButton>
    );
}
