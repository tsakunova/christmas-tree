import Root from '../views/rootView';
import MenuController from './menuController';
import GameController from './gamePageControler';
import db from '../services/dbService';
import ls from '../services/lsService';
import audioViews from './audioController';
import { TypePage } from '../types/enums';
import { createSnowFlake } from '../utils/snowflakes';

class LayoutController {
    private root: Root;
    constructor() {
        this.root = new Root();
    }
    public snowHandler = (value: boolean) => {
        db.setCurrentSnow(value);
        ls.setCurrentStorageSnow(value);
    };

    public renderHeader = (page: TypePage) => {
        this.root.drawHeader(
            MenuController.drawMenu,
            GameController.drawGamePage,
            MenuController.startHandler,
            page,
            db.getFavoriteToys.length,
            db.getActiveFilters(),
            createSnowFlake,
            ls.getIsPlayMusic(),
            audioViews.audioListner,
            this.snowHandler,
            ls.getCurrentStorageSnow()
        );
    };
}

export default new LayoutController();
