import { useMemo } from 'react';
import {
    createTheme,
    CSSVariablesResolver,
    MantineProvider as MantineBaseProvider,
    MantineThemeOverride,
} from '@mantine/core';

const cssResolver: CSSVariablesResolver = () => ({
    variables: {},
    dark: {
        // '--mantine-color-text': '#f3f3f3',
    },
    light: {},
});

interface MantineProviderProps {
    children: React.ReactNode;
    env?: 'default' | 'test';
    theme?: MantineThemeOverride;
}

const MantineProvider = (props: MantineProviderProps) => {
    const { children, env, theme: themeProp } = props;

    const theme = useMemo(() => {
        return themeProp ? themeProp : createTheme({});
    }, []);

    return (
        <MantineBaseProvider
            forceColorScheme="dark"
            cssVariablesResolver={cssResolver}
            theme={theme}
            env={env}
        >
            {children}
        </MantineBaseProvider>
    );
};

export default MantineProvider;
