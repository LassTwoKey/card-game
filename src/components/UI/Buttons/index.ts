interface Button {
    title: string;
    id: any;
}

export interface TabButtonsSliderPropType {
    buttons: Button[];
    onClick: (index: number) => void;
    selectedIndex: number;
    className?: string;
}

export { TabButtonsSlider } from '@/components/UI/Buttons/TabButtonsSlider/TabButtonsSlider';
