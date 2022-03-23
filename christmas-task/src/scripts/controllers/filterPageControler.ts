import { LENGTH_FAVORITE_ARR } from '../constants/constants';
import db from '../services/dbService';
import ls from '../services/lsService';
import { TypeFilter, TypePage, TypeSort } from '../types/enums';
import audioViews from './audioController';
import { CategoryFilterType } from '../types/interfaces';
import FilterPage from '../views/filterPageViews';
import LayoutController from './layoutController';

class FilterPageController {
    private filterPage: FilterPage;

    constructor() {
        this.filterPage = new FilterPage();
    }

    private setFilters = (filtertype: TypeFilter, item: CategoryFilterType): void => {
        db.setCurrentFilter(filtertype, item);
        ls.setFiltersLocalStorage(db.getActiveFilters());
    };

    private favoriteHandler = (item: string): void => {
        const favorites: string[] = ls.getFavoriteLocalStorage();
        if (favorites.length < LENGTH_FAVORITE_ARR || favorites.includes(item)) {
            ls.setFavoriteLocalStorage(item);
            db.setFavoriteToys(ls.getFavoriteLocalStorage());
        } else {
            this.filterPage.renderModal();
        }
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getFavoriteLocalStorage(), this.favoriteHandler);
    };

    private filterHandler = (filtertype: TypeFilter, item: CategoryFilterType): void => {
        this.setFilters(filtertype, item);
        if (filtertype !== TypeFilter.search) {
            this.drawFilterPage();
            this.filterPage.drawSliders(this.sliderHandler, db.getActiveFilters());
        } else {
            this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getFavoriteLocalStorage(), this.favoriteHandler);
        }
    };
    private sortHandler = (sortType: TypeSort): void => {
        db.setCurrentSort(sortType);
        ls.setSortLocalStorage(sortType);
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getFavoriteLocalStorage(), this.favoriteHandler);
    };

    private sliderHandler = (filtertype: TypeFilter, value: CategoryFilterType): void => {
        this.setFilters(filtertype, value);
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getFavoriteLocalStorage(), this.favoriteHandler);
    };

    public drawFilterSliders = (): void => {
        this.filterPage.drawSliders(this.sliderHandler, db.getActiveFilters());
    };

    public resetHandler = (): void => {
        this.drawFilterPage();
        this.drawFilterSliders();
        audioViews.stopPlay();
    };

    public drawFilterPage = (): void => {
        
        this.filterPage.renderFilterPage(
            this.filterHandler,
            db.getActiveFilters(),
            this.sortHandler,
            db.getActiveSort(),
            db.setStartedFilters,
            this.resetHandler,
            ls.setResetLocal
        );
        LayoutController.renderHeader(TypePage.filter);
        this.filterPage.setSearchListeners(this.filterHandler);
        this.filterPage.renderCards(db.getFilteredCardsArr(), ls.getFavoriteLocalStorage(), this.favoriteHandler);
    };
}

export default new FilterPageController();
