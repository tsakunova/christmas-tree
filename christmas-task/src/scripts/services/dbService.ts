import { LENGTH_FAVORITE_ARR } from '../constants/constants';
import { sortMapper } from '../constants/filter-const';
import { BGS_VARIANT, LIGHTS_VARIANT, TREES_VARIANT } from '../constants/game-consts';
import { Colors, Shapes, Sizes, TypeFilter, TypeSort } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes, ICardItem, ICoord, IFilters } from '../types/interfaces';
import { IBgs, ILights, ITrees } from '../types/interfaces-game';

class Db {
    cardsArr: ICardItem[];
    initialCardArray: ICardItem[];
    shapesFilter: Shapes[];
    colorsFilter: Colors[];
    sizesFilter: Sizes[];
    favoriteToys: ICardItem[];
    sortFilter: TypeSort;
    favoriteFilter: boolean;
    countFilter: (string | number)[];
    yearFilter: (string | number)[];
    searchFilter: string;
    isFirstLoading: boolean;
    currentTree: ITrees;
    currentBG: IBgs;
    currentLights: ILights;
    currentSnow: boolean;
    constructor() {
        this.initialCardArray = [];
        this.cardsArr = [];
        this.shapesFilter = [];
        this.colorsFilter = [];
        this.sizesFilter = [];
        this.sortFilter = TypeSort.yearMinMax;
        this.favoriteFilter = false;
        this.favoriteToys = [];
        this.countFilter = ['1', '12'];
        this.yearFilter = ['1940', '2020'];
        this.searchFilter = '';
        this.isFirstLoading = true;
        this.currentLights = LIGHTS_VARIANT[0];
        this.currentTree = TREES_VARIANT[0];
        this.currentBG = BGS_VARIANT[0];
        this.currentSnow = true;
    }
    public saveCardsArr(data: ICardItem[]) {
        const tranformedData = data.map((item) => ({
            ...item,
            coord: Array.from({ length: +item.count }, () => {
                return { x: 0, y: 0 };
            }),
        }));
        this.cardsArr = tranformedData;
        this.initialCardArray = JSON.parse(JSON.stringify(tranformedData));
    }

    public changeItemCoord = (num: string, indexCurrToy: string, value: ICoord) => {
        const newCards = [...this.cardsArr];
        const indexForChange = newCards.findIndex((item) => item.num === num);
        newCards[indexForChange].coord[+indexCurrToy] = value;
        this.cardsArr = newCards;
    };
    public getCardsArr() {
        return this.cardsArr;
    }
    public setFavoriteToys(data: string[]) {
        let favorite: ICardItem[] = [...this.cardsArr];
        favorite =
            data.length > 0
                ? favorite.filter((item) => data.includes(item.num))
                : favorite.slice(0, LENGTH_FAVORITE_ARR);
        this.favoriteToys = favorite;
    }
    public getFavoriteToys() {
        return this.favoriteToys;
    }
    public getFilteredCardsArr() {
        let result = [...this.cardsArr];
        result =
            this.shapesFilter.length > 0 ? result.filter((item) => this.shapesFilter.includes(item.shape)) : result;
        result =
            this.colorsFilter.length > 0 ? result.filter((item) => this.colorsFilter.includes(item.color)) : result;
        result = this.sizesFilter.length > 0 ? result.filter((item) => this.sizesFilter.includes(item.size)) : result;
        result = this.favoriteFilter ? result.filter((item) => item.favorite) : result;
        result = result.filter((item) => +item.count >= +this.countFilter[0] && +item.count <= +this.countFilter[1]);
        result = result.filter((item) => +item.year >= +this.yearFilter[0] && +item.year <= +this.yearFilter[1]);

        result = this.searchFilter
            ? result.filter((item) => item.name.toLowerCase().includes(this.searchFilter.toLowerCase()))
            : result;
        result = result.sort(sortMapper[this.sortFilter]);
        return result;
    }
    public setStartedFilters = () => {
        this.shapesFilter = [];
        this.colorsFilter = [];
        this.sizesFilter = [];
        this.favoriteFilter = false;
        this.countFilter = ['1', '12'];
        this.yearFilter = ['1940', '2020'];
        this.searchFilter = '';
        this.favoriteToys = this.cardsArr.splice(0, LENGTH_FAVORITE_ARR);
        this.currentTree = TREES_VARIANT[0];
        this.currentBG = BGS_VARIANT[0];
        this.currentLights = LIGHTS_VARIANT[0];
        this.currentSnow = true;
        this.cardsArr = JSON.parse(JSON.stringify(this.initialCardArray));
        this.setFavoriteToys([]);
    };
    public getActiveFilters(): CategoryFilterTypes {
        return {
            [TypeFilter.shapes]: this.shapesFilter as Shapes[],
            [TypeFilter.colors]: this.colorsFilter as Colors[],
            [TypeFilter.sizes]: this.sizesFilter as Sizes[],
            [TypeFilter.favorite]: this.favoriteFilter,
            [TypeFilter.count]: this.countFilter as string[],
            [TypeFilter.year]: this.yearFilter as string[],
            [TypeFilter.search]: this.searchFilter as string,
        };
    }

    public getActiveSort(): TypeSort {
        return this.sortFilter;
    }

    public setCurrentSort = (sorttype: TypeSort) => {
        this.sortFilter = sorttype as TypeSort;
    };

    public setSavedFilters = (savesFilters: IFilters) => {
        this.shapesFilter = savesFilters.shapesFilter;
        this.colorsFilter = savesFilters.colorsFilter;
        this.sizesFilter = savesFilters.sizesFilter;
        this.sortFilter = savesFilters.sortFilter;
        this.favoriteFilter = savesFilters.favoriteFilter;
        this.countFilter = savesFilters.countFilter;
        this.yearFilter = savesFilters.yearFilter;
    };

    public setCurrentFilter = (filtertype: TypeFilter, value: CategoryFilterType) => {
        if (filtertype === TypeFilter.shapes) {
            if (this[filtertype].includes(value as Shapes)) {
                this[filtertype] = this[filtertype].filter((item: Shapes) => item !== value);
            } else {
                this[filtertype] = [...this[filtertype], value as Shapes];
            }
        }
        if (filtertype === TypeFilter.colors) {
            if (this[filtertype].includes(value as Colors)) {
                this[filtertype] = this[filtertype].filter((item: Colors) => item !== value);
            } else {
                this[filtertype] = [...this[filtertype], value as Colors];
            }
        }
        if (filtertype === TypeFilter.sizes) {
            if (this[filtertype].includes(value as Sizes)) {
                this[filtertype] = this[filtertype].filter((item: Sizes) => item !== value);
            } else {
                this[filtertype] = [...this[filtertype], value as Sizes];
            }
        }
        if (filtertype === TypeFilter.favorite) {
            this[filtertype] = value as boolean;
        }
        if (filtertype === TypeFilter.count) {
            this[filtertype] = value as string[];
        }
        if (filtertype === TypeFilter.year) {
            this[filtertype] = value as string[];
        }
        if (filtertype === TypeFilter.search) {
            this[filtertype] = value as string;
        }
    };
    public getCurrentTree() {
        return this.currentTree;
    }

    public setCurrentTree = (tree: ITrees) => {
        this.currentTree = tree;
    };

    public setCurrentLights = (light: ILights) => {
        this.currentLights = light;
    };

    public getCurrentLights = () => {
        return this.currentLights;
    };

    public setCurrentSnow = (value: boolean) => {
        this.currentSnow = value;
    };

    public getCurrentSnow = () => {
        return this.currentSnow;
    };

    public getCurrentBG() {
        return this.currentBG;
    }

    public setCurrentBG = (bg: IBgs) => {
        this.currentBG = bg;
    };

    public getISFirstLoading = () => this.isFirstLoading;
    public setIsNotFirstLoading = () => (this.isFirstLoading = false);
}
export default new Db();
