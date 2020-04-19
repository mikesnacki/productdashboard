export default interface IButton {
    strokeStyle: string;
    setStrokeStyle: (strokeStyle: string) => void;
    changeSlider:(event: React.ChangeEvent<HTMLInputElement>) => void;
    lineWidth: number;
    changeLineJoin: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    showMenu: boolean,
}