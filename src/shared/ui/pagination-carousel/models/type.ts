export interface Slide {
    id: string;
    component: () => React.ReactNode;
    title: string;
    icon?: string;
}

export interface HighlightStyles {
    left: number;
    width: number;
}
