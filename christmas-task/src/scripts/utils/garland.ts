import { COUNT_GARLAND_LI, COUNT_GARLAND_ROW } from '../constants/constants';
import { ILights } from '../types/interfaces-game';

export const templateGarland = (currentLights: ILights) => {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('lightrope-container');
    for (let i = 0; i < COUNT_GARLAND_ROW; i++) {
        const ul: HTMLElement = document.createElement('ul');
        ul.classList.add('lightrope');
        for (let j = 0; j < COUNT_GARLAND_LI; j++) {
            const li: HTMLElement = document.createElement('li');
            li.style.marginBottom = `${j * 7}px`;
            li.style.background = currentLights.bgColor;
            li.style.animationName = currentLights.animation;
            ul.appendChild(li);
        }
        ul.style.width = `${i * 5}%`;
        ul.style.marginBottom = `${10 * i}rem`;
        container.appendChild(ul);
    }

    return container.outerHTML;
};
