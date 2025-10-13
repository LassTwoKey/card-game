import dayjs from 'dayjs';
import ReactDOM from 'react-dom/client';
import i18n from '@/assets/i18n';
import App from './app/App';

i18n.on('languageChanged', (language) => dayjs.locale(language));

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
