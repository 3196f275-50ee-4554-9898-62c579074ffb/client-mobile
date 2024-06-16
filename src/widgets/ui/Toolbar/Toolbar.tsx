import cls from './Toolbar.module.scss';
import { NavigationConfig } from '@features/navigation';
import { classNames } from '@shared/lib';
import { useLocation, useNavigate } from 'react-router-dom';

export const Toolbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    return (
        <div className={cls.wrapper}>
            <ul className={cls.list}>
                {NavigationConfig.map((item) => (
                    <li
                        onClick={() => navigate(item.path)}
                        className={classNames(cls.listItem, {
                            [cls.active]: pathname.includes(item.path),
                        }, [])}>
                        {item.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
};

