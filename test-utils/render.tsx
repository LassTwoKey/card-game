import { render as testingLibraryRender } from '@testing-library/react';
import { createTheme } from '@mantine/core';
import MantineProvider from '@/providers/MantineProvider';

export function render(ui: React.ReactNode) {
    const theme = createTheme({});

    return testingLibraryRender(ui, {
        wrapper: ({ children }: { children: React.ReactNode }) => (
            <MantineProvider theme={theme} env="test">
                {children}
            </MantineProvider>
        ),
    });
}
