import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@/app/styles/index.scss';

import MantineProvider from '@/app/providers/MantineProvider';
import { Router } from './routes/Router';

export default function App() {
    return (
        <MantineProvider>
            <Router />
        </MantineProvider>
    );
}
