import Game, { GamePage } from '../views/gamePageViews';
import db from '../services/dbService';
import ls from '../services/lsService';
import audioViews from './audioController';
import LayoutController from './layoutController';
import { TypePage } from '../types/enums';
import { ICoord } from '../types/interfaces';
import { ILights } from '../types/interfaces-game';

class GameController {
    private game: GamePage;

    constructor() {
        this.game = new Game();
    }

    public treeHandler = () => {
        ls.setCurrentStorageTree(db.getCurrentTree());
    };
    public bgHandler = () => {
        ls.setCurrentStorageBG(db.getCurrentBG());
    };
    public lightHandler = (light: ILights) => {
        db.setCurrentLights(light);
        ls.setCurrentStorageLight(light);
    };

    public renderTreeBlock = () => {
        this.game.renderTree(db.getCurrentTree(), db.getCurrentLights());
    };

    public cordHandler = (num: string, indexCurrToy: string, value: ICoord) => {
        db.changeItemCoord(num, indexCurrToy, value);
        this.game.renderToys(db.getFavoriteToys());
    };
    public resetHandler = (): void => {
        ls.generateLocalStorage();
        LayoutController.renderHeader(TypePage.game);
        this.drawGamePage();
        audioViews.stopPlay();
    };

    public drawGamePage = (): void => {
        this.game.renderGamePage(
            db.setCurrentTree,
            db.setCurrentBG,
            this.treeHandler,
            this.bgHandler,
            db.getCurrentBG(),
            this.lightHandler,
            this.renderTreeBlock,
            db.setStartedFilters,
            this.resetHandler,
            ls.setResetLocal
        );
        LayoutController.renderHeader(TypePage.game);
        this.game.renderToys(db.getFavoriteToys());
        this.game.setGlobalDropEvent(this.cordHandler);
        this.game.renderCurrentSetting(db.getCurrentTree(), db.getCurrentLights(), db.getCurrentBG());
    };
}
export default new GameController();
