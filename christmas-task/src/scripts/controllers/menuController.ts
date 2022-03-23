import { TypePage } from '../types/enums';
import Menu from '../views/menuView';
import FilterPageController from './filterPageControler';
import LayoutController from './layoutController';
import AudioViews from './audioController';
import db from '../services/dbService';
import ls from '../services/lsService';

class MenuController {
    private menu: Menu;

    constructor() {
        this.menu = new Menu();
    }
    // TODO здесь первое включение музыки
    startHandler = (): void => {
        FilterPageController.drawFilterPage();
        FilterPageController.drawFilterSliders();
        AudioViews.startAudio(db.getISFirstLoading() && ls.getIsPlayMusic());
        db.setIsNotFirstLoading();
    };

    drawMenu = (): void => {
        this.menu.renderMenuPage(this.startHandler);
        LayoutController.renderHeader(TypePage.main);
    };
}

export default new MenuController();
