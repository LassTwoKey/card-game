import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/styles/index.scss';

import MantineProvider from '@/providers/MantineProvider';
import { Router } from './Router';

export default function App() {
    return (
        <MantineProvider>
            <Router />
        </MantineProvider>
    );
}
