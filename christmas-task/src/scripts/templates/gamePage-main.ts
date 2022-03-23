import { AREA_COORDS } from '../constants/constants';
import { BGS_VARIANT, LIGHTS_VARIANT, TREES_VARIANT } from '../constants/game-consts';
import { ICardItem, ICoord } from '../types/interfaces';
import { IBgs, ILights, ITrees } from '../types/interfaces-game';
import { templateBallCount } from './filterPage-main';

export const templateTreesVariant = (): string => {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('select-trees');
    TREES_VARIANT.forEach((item, index) => {
        const div: HTMLElement = document.createElement('div');
        div.classList.add('tree-item');
        div.style.backgroundImage = `url(${TREES_VARIANT[index].image})`;
        container.appendChild(div);
    });
    return container.outerHTML;
};

export const treesListeners: (
    treeHandler: () => void,
    treeCurrentDb: (item: ITrees) => void,
    treeLSHandler: () => void
) => void = (treeHandler, treeCurrentDb, treeLSHandler) => {
    const trees = document.querySelectorAll('.tree-item');
    trees.forEach((item, index) => {
        item.addEventListener('click', () => {
            trees.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            treeCurrentDb(TREES_VARIANT[index]);
            treeLSHandler();
            treeHandler();
        });
    });
};

export const templateBgsVariant = (): string => {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('select-bgs');
    BGS_VARIANT.forEach((item, index) => {
        const div: HTMLElement = document.createElement('div');
        div.classList.add('bg-item');
        div.style.backgroundImage = `url(${BGS_VARIANT[index].image})`;
        container.appendChild(div);
    });
    return container.outerHTML;
};

export const bgsListeners: (
    bgHandler: (item: ITrees) => void,
    bgCurrentDb: (item: ITrees) => void,
    bgLSHandler: () => void
) => void = (bgHandler, bgCurrentDb, bgLSHandler) => {
    const bgs = document.querySelectorAll('.bg-item');
    bgs.forEach((item, index) => {
        item.addEventListener('click', () => {
            bgs.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            bgHandler(BGS_VARIANT[index]);
            bgCurrentDb(BGS_VARIANT[index]);
            bgLSHandler();
        });
    });
};
const templateFlashlights = () => {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('select-lights');
    LIGHTS_VARIANT.forEach((item, index) => {
        const div: HTMLElement = document.createElement('div');
        div.classList.add('light-item');
        div.style.background = `${LIGHTS_VARIANT[index].bgColor}`;
        container.appendChild(div);
    });
    return container.outerHTML;
};

export const lightsTemplateListeners: (renderTree: () => void, setLights: (item: ILights) => void) => void = (
    renderTree,
    setLights
) => {
    const lgs = document.querySelectorAll('.light-item');
    lgs.forEach((item, index) => {
        item.addEventListener('click', () => {
            lgs.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            setLights(LIGHTS_VARIANT[index]);
            renderTree();
        });
    });
};

export const templateToyCard = (data: ICardItem) => {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('toy__card-item');
    const countOnRightMenu = data.coord.reduce((accum, curr) => {
        if (curr.x === 0 && curr.y === 0) {
            return (accum += 1);
        }
        return accum;
    }, 0);
    if (countOnRightMenu > 0) {
        const index = data.coord.findIndex((item) => item.x === 0 && item.y === 0);
        const img: HTMLElement = document.createElement('img');
        img.setAttribute('src', `assets/toys/${data.num}.png`);
        img.classList.add('toy-item');
        img.id = `img-${data.num}-${index}`;
        container.appendChild(img);
    }
    data.coord.forEach((item, index) => {
        if (item.x && item.y) {
            const img: HTMLElement = document.createElement('img');
            img.setAttribute('src', `assets/toys/${data.num}.png`);
            img.classList.add('toy-item');
            img.id = `img-${data.num}-${index}`;
            img.style.position = 'absolute';
            img.style.top = item.y.toString() + 'px';
            img.style.left = item.x.toString() + 'px';
            container.appendChild(img);
        }
    });

    const count: HTMLElement = document.createElement('div');
    count.classList.add('toy__card-count');
    count.innerHTML = countOnRightMenu.toString();
    container.appendChild(count);
    return container.outerHTML;
};
export const templateArea = () => {
    const map = document.createElement('map');
    const area = document.createElement('area');
    map.setAttribute('name', 'tree-map');
    area.id = 'treeMapId';
    area.setAttribute('coords', AREA_COORDS);
    area.setAttribute('shape', 'poly');
    map.appendChild(area);
    return map.outerHTML;
};

export const templateMainTree = (data: ITrees) => {
    const img: HTMLElement = document.createElement('img');
    img.setAttribute('src', data.image);
    img.classList.add('main-tree-img');
    img.id = 'treeId';
    img.setAttribute('usemap', '#tree-map');
    return img.outerHTML;
};
export const templateMainBG = (data: IBgs) => {
    const block: HTMLElement = document.querySelector('.game-main__tree');
    block.style.background = data.image;
};

export const templateGamePage: () => string = (): string => {
    return `
      <main class="game-page">
              <section class="game__main">
                <div class="game-menu__left">
                  <h3>Выберите ёлку</h3>
                  ${templateTreesVariant()}
                  <h3>Выберите фон</h3>
                  ${templateBgsVariant()}
                  <h3>Гирлянда</h3>
                  ${templateFlashlights()}
                  <div class="reset-buttons">
                            <button id="reset-storage">Сбросить настройки</button>
                        </div>
                </div>
                <div class="game-main__tree">
                
                </div>
                <div class="game-menu__right">
                  <h3>Игрушки</h3>
                  <div class="select-toys">
                  </div>
                </div>
                
              
              </section>
      </main>
`;
};

export const setGlobalDropEvent = (changeCoord: (num: string, indexCurrToy: string, value: ICoord) => void) => {
    const root = document.querySelector('#root');

    root.addEventListener('dragover', (e: Event) => {
        e.preventDefault();
    });
    root.addEventListener('drop', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const tree = document.querySelector('#treeMapId');
        if (target.id === tree.id) {
            const id = (e as DragEvent).dataTransfer.getData('text/element');
            const [, num, ind] = id.split('-');
            const x = (e as DragEvent).dataTransfer.getData('cord/x');
            const y = (e as DragEvent).dataTransfer.getData('cord/y');
            const element = document.getElementById(id);
            changeCoord(num, ind, { x: e.pageX - +x, y: e.pageY - +y });
            element.style.zIndex = '1000';
        } else {
            const id = (e as DragEvent).dataTransfer.getData('text/element');
            const [, num, ind] = id.split('-');
            changeCoord(num, ind, { x: 0, y: 0 });
        }
    });
};

export const setDragListeners = () => {
    const toys = document.querySelectorAll('.toy-item');
    toys.forEach((item: HTMLElement) => {
        item.addEventListener('dragstart', (e: DragEvent) => {
            const element = e.target as HTMLElement;
            e.dataTransfer.setData('text/html', 'dragstart');
            e.dataTransfer.setData('text/element', element.id);
            e.dataTransfer.setData('cord/x', e.offsetX.toString());
            e.dataTransfer.setData('cord/y', e.offsetY.toString());
        });
    });
};
export const setBtnResetListner = (reset: () => void, resetHand: () => void, isResetLocal: () => void): void => {
    const isResetLocalBtn: HTMLElement = document.getElementById('reset-storage');
    isResetLocalBtn.addEventListener('click', () => {
        isResetLocal();
        reset();
        resetHand();
        templateBallCount(0);
    });
};
