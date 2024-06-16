import cls from './CalendarPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useEffect, useState } from 'react';

export const CalendarPage = () => {
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const days = Array.from({ length: 28 }, (_, i) => i + 1);
    const currentDate = new Date().getDate();

    const [daysState, setDaysState] = useState<Array<string>>(Array(28).fill(cls.inactive));

    useEffect(() => {
        const newDaysState = [...daysState];
        let i = 0;

        while (i < 28) {
            if (i % 7 === 5 || i % 7 === 6) { // Сб и Вс
                i++;
                continue;
            }

            let groupLength = Math.floor(Math.random() * 2) + 2; // Группа из 2-3 дней
            for (let j = 0; j < groupLength && i < 28; j++) {
                if (i % 7 === 5 || i % 7 === 6) { // Пропуск Сб и Вс
                    i++;
                    continue;
                }
                newDaysState[i] = cls.active;
                i++;
            }

            i++;
        }

        setDaysState(newDaysState);
    }, []);

    const getDayClass = (day: number) => {
        if (day === currentDate) return cls.current; // Текущий день
        return daysState[day - 1]; // Рабочие дни или выходные
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.user}>
                <Text.Paragraph
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H3}
                    weight={WeightEnum.BOLD}
                >
                    Иванов Иван
                </Text.Paragraph>
                <div className={cls.avatar}></div>
            </div>
            <div className={cls.calendar}>
                <Text.Paragraph
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H4}
                    weight={WeightEnum.BOLD}
                >
                    График работы
                </Text.Paragraph>
                <div className={cls.daysOfWeek}>
                    {daysOfWeek.map((day, index) => (
                        <Text.Paragraph
                            key={index}
                            className={cls.dayOfWeek}
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                        >{day}</Text.Paragraph>
                    ))}
                </div>
                <div className={cls.days}>
                    {days.map(day => (
                        <div
                            key={day}
                            className={`${cls.day} ${getDayClass(day)}`}
                        >
                            <Text.Paragraph
                                className={cls.dayText}
                                color={ColorEnum.TEXT}
                                size={SizeEnum.H5}
                            >{day}</Text.Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
