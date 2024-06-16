import cls from './ToolbarProvider.module.scss';
import { ReactNode } from 'react';
import { Toolbar } from '@widgets/ui';

export const ToolbarProvider = (
    {
        children,
    }: { children: ReactNode }) => {
    return (
        <div className={cls.wrapper}>
            {children}
            <Toolbar />
        </div>
    );
};

