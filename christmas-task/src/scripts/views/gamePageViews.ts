import {
    bgsListeners,
    lightsTemplateListeners,
    setBtnResetListner,
    setDragListeners,
    setGlobalDropEvent,
    templateArea,
    templateGamePage,
    templateMainTree,
    templateToyCard,
    treesListeners,
} from '../templates/gamePage-main';
import Root from './rootView';
import { ICardItem, ICoord } from '../types/interfaces';
import { IBgs, ILights, ITrees } from '../types/interfaces-game';
import { templateGarland } from '../utils/garland';

export class GamePage {
    private root: Root;
    constructor() {
        this.root = new Root();
    }
    public setGlobalDropEvent = (changeCoord: (num: string, indexCurrToy: string, value: ICoord) => void) => {
        setGlobalDropEvent(changeCoord);
    };

    public renderToys = (getFavorite: ICardItem[]): void => {
        const div: HTMLTemplateElement = document.querySelector('.select-toys');
        div.innerHTML = '';
        getFavorite.forEach((item, index) => {
            const card = templateToyCard(getFavorite[index]);
            div.insertAdjacentHTML('beforeend', card);
        });
        setDragListeners();

        const ball: HTMLTemplateElement = document.querySelector('.favorite__ball');
        ball.innerHTML = getFavorite.length.toString();
    };

    public renderTree = (currentTree: ITrees, currentLights: ILights) => {
        const div: HTMLTemplateElement = document.querySelector('.game-main__tree');
        div.innerHTML = '';
        const area = templateArea();
        div.insertAdjacentHTML('beforeend', area);
        const tree = templateMainTree(currentTree);
        div.insertAdjacentHTML('beforeend', tree);
        const light = templateGarland(currentLights);
        div.insertAdjacentHTML('beforeend', light);
    };
    public renderCurrentSetting = (currentTree: ITrees, currentLights: ILights, currentBg: IBgs) => {
        const trees = document.querySelectorAll('.tree-item');
        trees[currentTree.id].classList.add('active');
        const lights = document.querySelectorAll('.light-item');
        lights[currentLights.id].classList.add('active');
        const bgs = document.querySelectorAll('.bg-item');
        bgs[currentBg.id].classList.add('active');
        this.renderGamePage;
    };

    public renderBG = (currentBg: IBgs) => {
        const block: HTMLElement = document.querySelector('.game-main__tree');
        block.style.backgroundImage = `url(${currentBg.image})`;
    };

    public renderGamePage(
        treeHandler: (tree: ITrees) => void,
        bgHandler: (bg: IBgs) => void,
        treeLSHandler: () => void,
        bgLSHandler: () => void,
        currentBG: IBgs,
        setLights: (light: ILights) => void,
        renderTreeBlock: () => void,
        reset: () => void,
        resetHand: () => void,
        isResetLocal: () => void
    ) {
        this.root.resetContainer();
        const html: string = templateGamePage();
        this.root.changeInnerRoot(html);
        renderTreeBlock();
        this.renderBG(currentBG);
        treesListeners(renderTreeBlock, treeHandler, treeLSHandler);
        bgsListeners(this.renderBG, bgHandler, bgLSHandler);
        lightsTemplateListeners(renderTreeBlock, setLights);
        setBtnResetListner(reset, resetHand, isResetLocal);
    }
}
export default GamePage;
