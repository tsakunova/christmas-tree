import { LENGTH_FAVORITE_ARR } from '../constants/constants';
import { BGS_VARIANT, LIGHTS_VARIANT, TREES_VARIANT } from '../constants/game-consts';
import { TypeSort } from '../types/enums';
import { CategoryFilterTypes, IFilters } from '../types/interfaces';
import { IBgs, ILights, ITrees } from '../types/interfaces-game';

class Local {
    public generateLocalStorage = (isNew?: boolean): void => {
        if (!localStorage.getItem('filters') || isNew) {
            localStorage.setItem(
                'filters',
                JSON.stringify({
                    shapesFilter: [],
                    colorsFilter: [],
                    sizesFilter: [],
                    favoriteFilter: false,
                    countFilter: ['1', '12'],
                    yearFilter: ['1940', '2020'],
                })
            );
        }
        if (!localStorage.getItem('sort')) {
            localStorage.setItem('sort', JSON.stringify(TypeSort.yearMinMax));
        }
        if (!localStorage.getItem('isPlayMusic')) {
            localStorage.setItem('isPlayMusic', JSON.stringify(false));
        }
        if (!localStorage.getItem('currTree')) {
            localStorage.setItem('currTree', JSON.stringify(TREES_VARIANT[0]));
        }
        if (!localStorage.getItem('currBG')) {
            localStorage.setItem('currBG', JSON.stringify(BGS_VARIANT[0]));
        }
        if (!localStorage.getItem('currLight')) {
            localStorage.setItem('currLight', JSON.stringify(LIGHTS_VARIANT[0]));
        }
        if (!localStorage.getItem('isSnow')) {
            localStorage.setItem('isSnow', JSON.stringify(true));
        }
    };
    public setResetLocal = (): void => {
        localStorage.removeItem('filters');
        localStorage.removeItem('favoriteToys');
        localStorage.removeItem('sort');
        localStorage.removeItem('currBG');
        localStorage.removeItem('currTree');
        localStorage.removeItem('isPlayMusic');
        localStorage.removeItem('isSnow');
    };

    public getFavoriteLocalStorage = (): string[] => {
        return JSON.parse(localStorage.getItem('favoriteToys')) || [];
    };

    public setFavoriteLocalStorage = (value: string): void => {
        let localArr = this.getFavoriteLocalStorage();
        if (localArr.length <= LENGTH_FAVORITE_ARR) {
            if (localArr.includes(value)) {
                localArr = localArr.filter((item: string) => item !== value);
            } else {
                localArr = [...localArr, value];
            }
        } else {
            if (localArr.includes(value)) {
                localArr = localArr.filter((item: string) => item !== value);
            }
        }
        localStorage.setItem('favoriteToys', JSON.stringify(localArr));
    };

    public getFiltersLocalStorage = (): IFilters => {
        const filters = localStorage.getItem('filters');
        return filters ? JSON.parse(filters) : {};
    };

    public setFiltersLocalStorage = (filters: CategoryFilterTypes): void => {
        localStorage.setItem('filters', JSON.stringify(filters));
    };

    public setSortLocalStorage = (sort: TypeSort): void => {
        localStorage.setItem('sort', JSON.stringify(sort));
    };

    public getSortLocalStorage = (): TypeSort => {
        const sort = localStorage.getItem('sort');
        return sort ? JSON.parse(sort) : TypeSort.yearMinMax;
    };
    public getIsPlayMusic = () => {
        return JSON.parse(localStorage.getItem('isPlayMusic')) || false;
    };
    public setIsPlayMusic = (value: boolean) => {
        localStorage.setItem('isPlayMusic', JSON.stringify(value));
    };
    public getCurrentStorageTree = () => {
        return JSON.parse(localStorage.getItem('currTree')) || TREES_VARIANT[0];
    };
    public setCurrentStorageTree = (tree: ITrees) => {
        localStorage.setItem('currTree', JSON.stringify(tree));
    };
    public setCurrentStorageLight = (light: ILights) => {
        localStorage.setItem('currLight', JSON.stringify(light));
    };
    public getCurrentStorageSnow = () => {
        return JSON.parse(localStorage.getItem('isSnow'));
    };
    public setCurrentStorageSnow = (value: boolean) => {
        localStorage.setItem('isSnow', JSON.stringify(value));
    };
    public getCurrentStorageLight = () => {
        return JSON.parse(localStorage.getItem('currLight')) || LIGHTS_VARIANT[0];
    };
    public getCurrentStorageBG = () => {
        return JSON.parse(localStorage.getItem('currBG')) || BGS_VARIANT[0];
    };
    public setCurrentStorageBG = (bg: IBgs) => {
        localStorage.setItem('currBG', JSON.stringify(bg));
    };
}
export default new Local();
