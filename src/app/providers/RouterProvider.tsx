import { createBrowserRouter, redirect } from 'react-router-dom';
import { CalendarPage, HomePage, LoginPage, MainPage, RegisterPage, TasksPage, UserPage } from '@pages/ui';
import { AuthProvider } from '@app/providers/AuthProvider.tsx';
import { ToolbarProvider } from '@widgets/lib';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'home',
                element: <ToolbarProvider><HomePage /></ToolbarProvider>,
            },
            {
                path: 'tasks',
                element: <ToolbarProvider><TasksPage /></ToolbarProvider>,
            },
            {
                path: 'calendar',
                element: <ToolbarProvider><CalendarPage /></ToolbarProvider>,
            },
            {
                path: 'user',
                element: <ToolbarProvider><UserPage /></ToolbarProvider>,
            },
        ],
    },
    {
        path: '/auth',
        children: [
            {
                index: true,
                loader: async () => redirect('/auth/login'),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
