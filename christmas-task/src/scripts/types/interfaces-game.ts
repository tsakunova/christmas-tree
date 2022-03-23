import { TypeLight } from './enums';

export interface ITrees {
    id: number;
    image: string;
    key: string;
}
export interface IBgs {
    id: number;
    image: string;
    key: string;
}
export interface ILights {
    id: number;
    type: TypeLight;
    bgColor: string;
    animation: string;
}
