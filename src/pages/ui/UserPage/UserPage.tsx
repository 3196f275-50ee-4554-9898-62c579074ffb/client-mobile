import cls from './UserPage.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const UserPage = () => {
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
            <div className={cls.profile}>
                <div className={cls.avatar}></div>
                <ul className={cls.list}>
                    <li className={cls.listItem}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                            weight={WeightEnum.BOLD}
                        >
                            Иванов
                        </Text.Paragraph>
                    </li>
                    <li className={cls.listItem}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                            weight={WeightEnum.BOLD}
                        >
                            Иван Иванович
                        </Text.Paragraph>
                    </li>
                    <li className={cls.listItem}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                            weight={WeightEnum.NORMAL}
                        >
                            36 лет
                        </Text.Paragraph>
                    </li>
                    <li className={cls.listItem}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                            weight={WeightEnum.NORMAL}
                        >
                            Строитель-бетонщик
                        </Text.Paragraph>
                    </li>
                    <li className={cls.listItem}>
                        <Text.Paragraph
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H3}
                            weight={WeightEnum.NORMAL}
                        >
                            Стаж работы: 10 лет
                        </Text.Paragraph>
                    </li>
                </ul>
            </div>
        </div>
    );
};

