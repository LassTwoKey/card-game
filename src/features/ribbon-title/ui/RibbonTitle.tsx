import cn from 'classnames';
import { Flex, FlexProps, Title } from '@mantine/core';
import classesDefault from './RibbonTitleDefault.module.scss';
import classesYellow from './RibbonTitleYellow.module.scss';

interface RibbonTitleProps extends FlexProps {
    text: string;
    type?: 'default' | 'yellow';
}

export default function RibbonTitle(props: RibbonTitleProps) {
    const { text, type = 'default' } = props;
    let classes = classesDefault;

    if (type === 'yellow') {
        classes = classesYellow;
    }

    return (
        <Flex {...props}>
            <div className={cn(classes.container, classes.one, classes[type])}>
                <div className={cn(classes.bk, classes.l)}>
                    <div className={cn(classes.arrow, classes.top)} />
                    <div className={cn(classes.arrow, classes.bottom)} />
                </div>

                <div className={cn(classes.skew, classes.l)} />

                <div className={classes.main}>
                    <Title
                        order={4}
                        c="var(--mantine-color-bright)"
                        fw={700}
                        style={{
                            textShadow: 'rgba(0, 0, 0, 0.8) 0px 1px 2px',
                        }}
                    >
                        {text}
                    </Title>
                </div>

                <div className={cn(classes.skew, classes.r)} />

                <div className={cn(classes.bk, classes.r)}>
                    <div className={cn(classes.arrow, classes.top)} />
                    <div className={cn(classes.arrow, classes.bottom)} />
                </div>
            </div>
        </Flex>
    );
}
