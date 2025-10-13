import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GamePage } from '../../pages/GamePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GamePage />,
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
