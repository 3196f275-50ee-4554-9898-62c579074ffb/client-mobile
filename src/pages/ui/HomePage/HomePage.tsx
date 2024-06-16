import cls from './HomePage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import Arrow from '@assets/icons/arrowRight.svg';
import Task from '@assets/icons/task.svg';
import Success from '@assets/icons/success.svg';
import Time from '@assets/icons/workTime.svg';
import Money from '@assets/icons/money.svg';

export const HomePage = () => {
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

            <ul className={cls.list}>
                <li className={cls.listItem}>
                    <Money />
                    <div className={cls.info}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                            weight={WeightEnum.MEDIUM}
                        >
                            Заработано за неделю
                        </Text.Paragraph>
                        <Text.Paragraph
                            className={cls.italic}
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                            weight={WeightEnum.BOLD}
                        >
                            15 000 ₽
                        </Text.Paragraph>
                    </div>
                    <img src="/earnMoney.png" alt="" />
                </li>
                <li className={cls.listItem}>
                    <Time />
                    <div className={cls.info}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                            weight={WeightEnum.MEDIUM}
                        >
                            Рабочие часы на текущей неделе
                        </Text.Paragraph>
                        <Text.Paragraph
                            className={cls.italic}
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                            weight={WeightEnum.BOLD}
                        >
                            12 часов из 14 часов
                        </Text.Paragraph>
                    </div>
                </li>
                <li className={cls.listItem}>
                    <Success />
                    <div className={cls.info}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                            weight={WeightEnum.MEDIUM}
                        >
                            Общее кол-во выполненных работ
                        </Text.Paragraph>
                        <Text.Paragraph
                            className={cls.italic}
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H5}
                            weight={WeightEnum.BOLD}
                        >
                            8 работ
                        </Text.Paragraph>
                    </div>
                </li>
            </ul>
            <div className={cls.rating}>
                <Text.Paragraph
                    className={cls.ratingTitle}
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H4}
                    weight={WeightEnum.BOLD}
                >
                    Качество выполненных работ
                </Text.Paragraph>
                <div className={cls.ratingWrapper}>
                    <img src="/ratingImg.png" alt="" />
                    <ul className={cls.ratingList}>
                        <li className={cls.ratingListItem}>
                            <Text.Paragraph
                                color={ColorEnum.TEXT}
                                size={SizeEnum.H5}
                            >
                                Опоздания: <span>не выявлено</span>
                            </Text.Paragraph>
                        </li>
                        <li className={cls.ratingListItem}>
                            <Text.Paragraph
                                color={ColorEnum.TEXT}
                                size={SizeEnum.H5}
                            >
                                Прогулы: <span>не выявлено</span>
                            </Text.Paragraph>
                        </li>
                        <li className={cls.ratingListItem}>
                            <Text.Paragraph
                                color={ColorEnum.TEXT}
                                size={SizeEnum.H5}
                            >
                                Просроченные задачи: <span>нет</span>
                            </Text.Paragraph>
                        </li>
                        <li className={cls.ratingListItem}>
                            <Text.Paragraph
                                color={ColorEnum.TEXT}
                                size={SizeEnum.H5}
                            >
                                Качество работы: <span>высокое</span>
                            </Text.Paragraph>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

