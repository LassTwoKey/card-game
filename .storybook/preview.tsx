import { ColorSchemeScript } from '@mantine/core';
import MantineProvider from '@/app/providers/MantineProvider';

import '@/assets/i18n';
import '@mantine/core/styles.css';

export const parameters = {
    layout: 'fullscreen',
    options: {
        showPanel: false,
    },
    backgrounds: { disable: true },
};

export const decorators = [
    (renderStory: any) => {
        return (
            <MantineProvider>
                <ColorSchemeScript />
                {renderStory()}
            </MantineProvider>
        );
    },
];
