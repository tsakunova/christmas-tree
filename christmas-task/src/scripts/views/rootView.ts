import { root } from '../selectors/selectors';
import { templateHeader, templateLayout, templateSearchFilter } from '../templates/layoyt';
import { TypePage } from '../types/enums';
import { CategoryFilterTypes } from '../types/interfaces';

class Root {
    resetContainer(): void {
        root.innerHTML = '';
    }

    changeInnerRoot(htmlBlock: string): void {
        root.insertAdjacentHTML('afterbegin', templateLayout(htmlBlock));
    }

    drawHeader(
        drawMenu: () => void,
        drawGame: () => void,
        drawFilter: () => void,
        page: TypePage,
        countFavorite: number,
        activeFilters: CategoryFilterTypes,
        getSnow: (page: TypePage) => void,
        isMusic: boolean,
        getMusic: () => void,
        snowDbLs: (value: boolean) => void,
        isSnowGetLs: boolean
    ): void {
        templateHeader(
            drawMenu,
            drawGame,
            drawFilter,
            page,
            countFavorite,
            getSnow,
            isMusic,
            getMusic,
            snowDbLs,
            isSnowGetLs
        );
        page === TypePage.filter && templateSearchFilter(activeFilters);
    }
}

export default Root;
