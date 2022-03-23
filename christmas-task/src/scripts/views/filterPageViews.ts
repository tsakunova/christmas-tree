import { EMPTY_FILTER_TEXT } from '../constants/constants';
import { countMax, countMin, filterCountRange, filterYearRange, yearMax, yearMin } from '../selectors/selectors';
import {
    setFiltersListeners,
    setModalListeners,
    setResetFiltersListeners,
    setSearchListeners,
    setSortListeners,
    templateFilterPage,
} from '../templates';
import { setCardItemListners, templateCardItem } from '../templates/filter-page-card';
import { TypeFilter, TypeSort } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes, ICardItem } from '../types/interfaces';
import { initSlider } from '../utils/slider';
import { cutDecimalsFormat } from '../utils/utils';

import Root from './rootView';

class FilterPage {
    private root: Root;

    constructor() {
        this.root = new Root();
    }

    public drawSpanValues = (values: string[], key: TypeFilter) => {
        const minCurrent: HTMLElement = key === TypeFilter.count ? countMin() : yearMin();
        const maxCurrent: HTMLElement = key === TypeFilter.count ? countMax() : yearMax();
        const [min, max]: string[] = values as string[];
        minCurrent.innerHTML = min;
        maxCurrent.innerHTML = max;
    };

    public rangeHandler = (
        value: string[],
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        key: TypeFilter
    ): void => {
        const val: string[] = cutDecimalsFormat(value);
        filterHandler(key, val);
        this.drawSpanValues(val, key);
    };

    public drawSliders = (
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        filterValues: CategoryFilterTypes
    ): void => {
        const count: HTMLElement = filterCountRange();
        const year: HTMLElement = filterYearRange();
        initSlider(
            count,
            (value: string[]) => {
                this.rangeHandler(value, filterHandler, TypeFilter.count);
            },
            filterValues.countFilter as (string | number)[],
            TypeFilter.count
        );
        initSlider(
            year,
            (value: string[]) => {
                this.rangeHandler(value, filterHandler, TypeFilter.year);
            },
            filterValues.yearFilter as (string | number)[],
            TypeFilter.year
        );
    };

    public renderModal = (): void => {
        const modal: HTMLTemplateElement = document.querySelector('.favorite-modal');
        modal.classList.add('show-modal');
    };

    public setSearchListeners = (filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void): void => {
        setSearchListeners(filterHandler);
    };

    public renderCards = (
        arr: ICardItem[],
        getLocalFavorite: string[],
        setLocalFavorite: (value: string) => void
    ): void => {
        const div: HTMLTemplateElement = document.querySelector('.filter__cards');
        div.innerHTML = '';
        arr.forEach((item, index) => {
            const card: string = templateCardItem(arr[index], getLocalFavorite);
            div.insertAdjacentHTML('beforeend', card);
        });
        setCardItemListners(arr, setLocalFavorite);
        if (arr.length === 0) {
            div.innerHTML = EMPTY_FILTER_TEXT;
        }
        const ball: HTMLTemplateElement = document.querySelector('.favorite__ball');
        ball.innerHTML = getLocalFavorite.length.toString();
    };

    public renderFilterPage = (
        filterHandler: (filtertype: TypeFilter, item: CategoryFilterType) => void,
        activeFilter: CategoryFilterTypes,
        sortHandler: (sortType: TypeSort) => void,
        activeSort: TypeSort,
        reset: () => void,
        resetHand: () => void,
        isResetLocal: () => void
    ): void => {
        this.root.resetContainer();
        const html: string = templateFilterPage(activeFilter, activeSort);

        this.root.changeInnerRoot(html);
        setModalListeners();
        setFiltersListeners(filterHandler);
        setSortListeners(sortHandler);
        setResetFiltersListeners(reset, resetHand, isResetLocal);
    };
}

export default FilterPage;
