import MenuController from '../controllers/menuController';
import getCards from '../data/api';
import { ICardItem } from '../types/interfaces';
import db from '../services/dbService';
import ls from '../services/lsService';

class App {
    public start(): void {
        getCards().then((data: ICardItem[]) => {
            ls.generateLocalStorage();
            db.saveCardsArr(data);
            MenuController.drawMenu();
            this.getSetting();
        });
    }
    private getSetting(): void {
        db.setFavoriteToys(ls.getFavoriteLocalStorage());
        db.setSavedFilters(ls.getFiltersLocalStorage());
        db.setCurrentSort(ls.getSortLocalStorage());
        db.setCurrentTree(ls.getCurrentStorageTree());
        db.setCurrentBG(ls.getCurrentStorageBG());
        db.setCurrentLights(ls.getCurrentStorageLight());
        db.setCurrentSnow(ls.getCurrentStorageSnow());
    }
}

export default App;
