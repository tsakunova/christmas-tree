import { TypeLight } from '../types/enums';
import { IBgs, ILights, ITrees } from '../types/interfaces-game';

export const TREES_VARIANT: ITrees[] = [
    { id: 0, image: 'assets/tree/1.png', key: '1' },
    { id: 1, image: 'assets/tree/2.png', key: '2' },
    { id: 2, image: 'assets/tree/3.png', key: '3' },
    { id: 3, image: 'assets/tree/4.png', key: '4' },
    { id: 4, image: 'assets/tree/5.png', key: '5' },
    { id: 5, image: 'assets/tree/6.png', key: '6' },
];
export const BGS_VARIANT: IBgs[] = [
    { id: 0, image: 'assets/bg/1.jpg', key: '1' },
    { id: 1, image: 'assets/bg/2.jpg', key: '2' },
    { id: 2, image: 'assets/bg/3.jpg', key: '3' },
    { id: 3, image: 'assets/bg/4.jpg', key: '4' },
    { id: 4, image: 'assets/bg/5.jpg', key: '5' },
    { id: 5, image: 'assets/bg/6.jpg', key: '6' },
    { id: 6, image: 'assets/bg/7.jpg', key: '7' },
    { id: 7, image: 'assets/bg/8.jpg', key: '8' },
    { id: 8, image: 'assets/bg/9.jpg', key: '9' },
    { id: 9, image: 'assets/bg/10.jpg', key: '10' },
];

export const LIGHTS_VARIANT: ILights[] = [
    {
        id: 0,
        type: TypeLight.rainbow,
        bgColor: `linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8)`,
        animation: 'rainbow',
    },
    { id: 1, type: TypeLight.yellow, bgColor: '#fbff00', animation: 'flash-yellow' },
    { id: 2, type: TypeLight.red, bgColor: '#ff0000', animation: 'flash-red' },
    { id: 3, type: TypeLight.blue, bgColor: '#00ffff', animation: 'flash-blue' },
    { id: 4, type: TypeLight.green, bgColor: '#00ff13', animation: 'flash-green' },
    { id: 5, type: TypeLight.white, bgColor: '#fff', animation: 'flash-white' },
    { id: 6, type: TypeLight.none, bgColor: 'transparent', animation: 'none' },
];
