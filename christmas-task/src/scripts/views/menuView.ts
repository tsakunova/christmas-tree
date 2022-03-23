import { menuStartBtn } from '../selectors/selectors';
import { templateMenuPage } from '../templates';
import Root from './rootView';

class Menu {
    private root: Root;
    constructor() {
        this.root = new Root();
    }

    public renderMenuPage(startHandler: () => void) {
        this.root.resetContainer();
        const html: string = templateMenuPage();
        this.root.changeInnerRoot(html);
        menuStartBtn().addEventListener('click', startHandler);
    }
}

export default Menu;
