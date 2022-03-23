import { Colors, Shapes, Sizes, TypeFilter, TypeSort } from './enums';

export interface IPage {
    menu: number;
    filter: Shapes;
    game: string;
}
export interface ICoord {
    x: number;
    y: number;
}
export interface ICardItem {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: Shapes;
    color: Colors;
    size: Sizes;
    favorite: boolean;
    coord: ICoord[];
}

export interface IShapeFilterConstants {
    id: number;
    type: Shapes;
    image: string;
    key: string;
}

export interface IColorFilterConstants {
    id: number;
    type: Colors;
    bgColor: string;
}

export interface ISizeFilterConstants {
    id: number;
    type: Sizes;
    class: string;
}

export interface ISortFilterConstants {
    id: number;
    type: TypeSort;
    idName: string;
    innerText: string;
}

export interface ISliderFilterConstants {
    count: number;
    year: number;
}
export interface IFilters {
    shapesFilter: Shapes[];
    colorsFilter: Colors[];
    sizesFilter: Sizes[];
    sortFilter: TypeSort;
    favoriteFilter: boolean;
    countFilter: (string | number)[];
    yearFilter: (string | number)[];
    searchFilter: string;
}

export type CategoryFilterTypes = Record<
    TypeFilter,
    string | Shapes[] | Colors[] | Sizes[] | boolean | (string | number)[]
>;

export type CategoryFilterType = Shapes | Colors | Sizes | boolean | (string | number)[] | string;
