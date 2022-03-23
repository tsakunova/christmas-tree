import { TypePage } from '../types/enums';
import { CategoryFilterTypes } from '../types/interfaces';

let snowHandlerInt: NodeJS.Timer;

export const templateSearchFilter = (activeFilters: CategoryFilterTypes): void => {
    const isSearch: HTMLElement = document.querySelector('.search-container');
    const div: HTMLElement = document.createElement('div');
    const input: HTMLElement = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'Поиск по названию');
    input.setAttribute('class', 'input__search');
    input.setAttribute('autofocus', 'true');
    input.setAttribute('value', activeFilters.searchFilter as string);
    input.setAttribute('autocomplete', 'off');
    div.classList.add('menu__btn-search');
    div.appendChild(input);
    isSearch.appendChild(div);
};

export const templateHeader = (
    drawMenu: () => void,
    drawGame: () => void,
    drawFilter: () => void,
    page: TypePage,
    countFavorite: number,
    getSnow: (page: TypePage) => void,
    isMusic: boolean,
    getMusic: () => void,
    snowDbLs: (value: boolean) => void,
    isSnowGetLs: boolean
) => {
    if (page === TypePage.main) {
        return;
    }
    const div: HTMLElement = document.querySelector('.header__filter-page');
    const header: HTMLElement = document.createElement('div');
    header.classList.add('header');
    const nav: HTMLElement = document.createElement('div');
    nav.classList.add('navigation');
    const homeBtn: HTMLElement = document.createElement('button');
    homeBtn.id = 'home';
    homeBtn.addEventListener('click', drawMenu);
    nav.appendChild(homeBtn);
    const filterPageBtn: HTMLElement = document.createElement('div');
    filterPageBtn.id = 'filter-page';
    filterPageBtn.innerHTML = 'Коллекция';
    filterPageBtn.addEventListener('click', drawFilter);
    nav.appendChild(filterPageBtn);
    const gamePageBtn: HTMLElement = document.createElement('div');
    gamePageBtn.id = 'game-page';
    gamePageBtn.innerHTML = 'Укрась елку';
    gamePageBtn.addEventListener('click', drawGame);
    nav.appendChild(gamePageBtn);
    header.appendChild(nav);
    const headerButtons = document.createElement('div');
    headerButtons.classList.add('header__buttons');
    header.appendChild(headerButtons);
    const muteBtn: HTMLElement = document.createElement('label');
    const inputMute: HTMLInputElement = document.createElement('input');
    inputMute.setAttribute('type', 'checkbox');
    inputMute.id = 'menu__btn-mute';
    muteBtn.appendChild(inputMute);
    muteBtn.classList.add('menu__btn-mute');
    muteBtn.style.background = isMusic
        ? 'url(assets/svg/audio.svg) 50% 50%/contain no-repeat'
        : 'url(assets/svg/mute-off.svg) 50% 50%/contain no-repeat';
    headerButtons.appendChild(muteBtn);
    inputMute.addEventListener('change', () => {
        getMusic();
    });
    if (page === TypePage.game) {
        const snowBtn: HTMLElement = document.createElement('label');
        const inputSnow: HTMLInputElement = document.createElement('input');
        inputSnow.setAttribute('type', 'checkbox');
        inputSnow.checked = isSnowGetLs;
        inputSnow.id = 'menu__btn-snow';
        snowBtn.appendChild(inputSnow);
        snowBtn.classList.add('menu__btn-snow');
        const filter = isSnowGetLs
            ? `invert(10%) sepia(70%) saturate(200%) hue-rotate(
            69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732)`
            : 'sepia(1) brightness(0.8)';
        snowBtn.style.filter = filter;
        isSnowGetLs &&
            (snowHandlerInt = setInterval(() => {
                getSnow(page);
            }, 30));
        inputSnow.addEventListener('change', () => {
            snowDbLs(inputSnow.checked);

            const filter = inputSnow.checked
                ? `invert(10%) sepia(70%) saturate(200%) hue-rotate(
            69deg) brightness(85%) contrast(100%) drop-shadow(0px 0px 5px #e69732)`
                : 'sepia(1) brightness(0.8)';
            snowBtn.style.filter = filter;
            snowHandlerInt = setInterval(() => {
                getSnow(page);
            }, 30);
        });
        headerButtons.appendChild(snowBtn);
    }
if (page !== TypePage.game) {
        clearInterval(snowHandlerInt);
    }
    if (page === TypePage.filter) {
        const search: HTMLElement = document.createElement('div');
        search.classList.add('search-container');
        headerButtons.appendChild(search);
    }
    
    const ball: HTMLElement = document.createElement('div');
    ball.classList.add('favorite__ball');
    ball.innerHTML = countFavorite.toString();
    headerButtons.appendChild(ball);
    div.appendChild(header);
};

export const templateLayout: (html: string) => string = (html: string) => {
    return `
        <section class="header__filter-page">
        </section>
      ${html}
        <footer class="footer__menu">
          <div class="author">Created by <a href="https://github.com/tsakunova" target="blank">Tatsiana Tsakunova</a></div>
          <div class="course"><a href="https://app.rs.school/" target="blank"></a></div>
        </footer>
    `;
};
