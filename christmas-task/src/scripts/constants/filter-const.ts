import { Colors, Shapes, Sizes, TypeSort } from '../types/enums';
import {
    ICardItem,
    IColorFilterConstants,
    IShapeFilterConstants,
    ISizeFilterConstants,
    ISliderFilterConstants,
    ISortFilterConstants,
} from '../types/interfaces';

export const SHAPE_FILTER: IShapeFilterConstants[] = [
    { id: 1, type: Shapes.ball, image: 'ball.svg', key: 'ball' },
    { id: 2, type: Shapes.snowflake, image: 'snowflake.svg', key: 'snowflake' },
    { id: 3, type: Shapes.bell, image: 'bell.svg', key: 'bell' },
    { id: 4, type: Shapes.cone, image: 'cone.svg', key: 'cone' },
    { id: 5, type: Shapes.toy, image: 'toy.svg', key: 'toy' },
];

export const COLORS_FILTER: IColorFilterConstants[] = [
    { id: 1, type: Colors.white, bgColor: '#fff' },
    { id: 2, type: Colors.yellow, bgColor: '#ffe625' },
    { id: 3, type: Colors.red, bgColor: '#cd2846' },
    { id: 4, type: Colors.blue, bgColor: '#0072ba' },
    { id: 5, type: Colors.green, bgColor: '#006941d9' },
];

export const SIZES_FILTER: ISizeFilterConstants[] = [
    { id: 1, type: Sizes.lSize, class: 'l-size' },
    { id: 2, type: Sizes.mSize, class: 'm-size' },
    { id: 3, type: Sizes.sSize, class: 's-size' },
];

export const MIN_SLIDER_RANGE: ISliderFilterConstants = {
    count: 1,
    year: 1940,
};

export const MAX_SLIDER_RANGE: ISliderFilterConstants = {
    count: 12,
    year: 2020,
};
export const STEP_SLIDER_RANGE: ISliderFilterConstants = {
    count: 1,
    year: 10,
};

export const SORTS: ISortFilterConstants[] = [
    {
        id: 1,
        type: TypeSort.yearMinMax,
        idName: 'sort__count-min-max',
        innerText: 'По году приобретения по возрастанию',
    },
    { id: 2, type: TypeSort.yearMaxMin, idName: 'sort__count-max-min', innerText: 'По году приобретения по убыванию' },
    { id: 3, type: TypeSort.nameAZ, idName: 'sort__name-min-max', innerText: 'По названию от "А" до "Я"' },
    { id: 4, type: TypeSort.nameZA, idName: 'sort__name-max-min', innerText: 'По названию от "Я" до "А"' },
];

export const sortMapper: Record<TypeSort, (a: ICardItem, b: ICardItem) => number> = {
    [TypeSort.yearMinMax]: (a: ICardItem, b: ICardItem) => {
        return +a.year - +b.year;
    },
    [TypeSort.yearMaxMin]: (a: ICardItem, b: ICardItem) => {
        return +b.year - +a.year;
    },
    [TypeSort.nameAZ]: (a: ICardItem, b: ICardItem) => {
        return a.name.localeCompare(b.name);
    },
    [TypeSort.nameZA]: (a: ICardItem, b: ICardItem) => {
        return b.name.localeCompare(a.name);
    },
};
