import cls from './MainPage.module.scss';
import { Button, ButtonTypeEnum, Text } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className={cls.wrapper}>
            <Text.Heading
                size={SizeEnum.H6}
                weight={WeightEnum.BOLD}
                color={ColorEnum.TEXT}
            >
                Выберите свою роль
            </Text.Heading>
            <img src="/greetingImg.jpg" alt="" />
            <div className={cls.buttons}>
                <Button
                    buttonType={ButtonTypeEnum.DEFAULT}
                    disabled={true}
                    color={ColorEnum.PRIMARY}
                    border={BorderEnum.H5}
                    size={SizeEnum.H2}
                    weight={WeightEnum.MEDIUM}
                >
                    Я бригадир
                </Button>
                <Button
                    onClick={() => {
                        navigate('/home');
                    }}
                    color={ColorEnum.WHITE}
                    border={BorderEnum.H5}
                    size={SizeEnum.H2}
                    weight={WeightEnum.MEDIUM}
                >
                    Я строитель
                </Button>
                <Button
                    buttonType={ButtonTypeEnum.DEFAULT}
                    disabled={true}
                    color={ColorEnum.PRIMARY}
                    border={BorderEnum.H5}
                    size={SizeEnum.H2}
                    weight={WeightEnum.MEDIUM}
                >
                    Я водитель
                </Button>
            </div>
        </div>
    );
};

