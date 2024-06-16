import cls from './TasksPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import Arrow from '@assets/icons/arrowRight.svg';
import Task from '@assets/icons/task.svg';

export const TasksPage = () => {
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
                <div className={cls.avatar}>

                </div>
            </div>
            <div className={cls.current}>
                <div className={cls.currentTitle}>
                    <Text.Paragraph
                        color={ColorEnum.TEXT}
                        size={SizeEnum.H4}
                        weight={WeightEnum.BOLD}
                    >
                        Текущая работа
                    </Text.Paragraph>
                    <Arrow />
                </div>
                <div className={cls.currentWork}>
                    <Task />
                    <Text.Paragraph
                        color={ColorEnum.PRIMARY}
                        size={SizeEnum.H4}
                        weight={WeightEnum.BOLD}
                    >
                        Укладка фундамента на участке А10
                    </Text.Paragraph>
                </div>
                <img src="/homeExample.png" alt="" />
            </div>
            <Text.Link
                className={cls.link}
                weight={WeightEnum.BOLD}
                size={SizeEnum.H4}
                to={'1231'}>
                Связаться с бригадиром
            </Text.Link>
            <div className={cls.closed}>
                <Text.Paragraph
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H4}
                    weight={WeightEnum.BOLD}
                >
                    Закрытые задачи
                </Text.Paragraph>
            </div>
        </div>
    );
};

