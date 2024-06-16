import { INavigation } from '@features/navigation';
import Home from '@assets/icons/home.svg';
import User from '@assets/icons/user.svg';
import Tasks from '@assets/icons/tasks.svg';
import Calendar from '@assets/icons/calendar.svg';

export const NavigationConfig: INavigation[] = [
    {
        path: '/home',
        label: 'Главная',
        icon: <Home/>,
    },
    {
        path: '/tasks',
        label: 'Задачи',
        icon: <Tasks/>,
    },
    {
        path: '/calendar',
        label: 'Календарь',
        icon: <Calendar/>,
    },
    {
        path: '/user',
        label: 'Профиль',
        icon: <User/>,
    },
];