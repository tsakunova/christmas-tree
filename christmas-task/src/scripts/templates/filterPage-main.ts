import { COLORS_FILTER, SHAPE_FILTER, SIZES_FILTER, SORTS } from '../constants/filter-const';
import { Colors, Shapes, Sizes, TypeFilter, TypeSort } from '../types/enums';
import { CategoryFilterType, CategoryFilterTypes } from '../types/interfaces';

type TemplateShapesFilterType = (activeFilters: CategoryFilterTypes) => string;
type TemplateColorsFilterType = (activeFilter: CategoryFilterTypes) => string;
type TemplateSizesFilterType = (activeFilter: CategoryFilterTypes) => string;
type TemplateFavoriteFilterType = (activeFilter: CategoryFilterTypes) => string;

const templateShapesFilter: TemplateShapesFilterType = (activeFilters: Record<TypeFilter, Shapes[]>) => {
    const ul: HTMLElement = document.createElement('ul');
    SHAPE_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        const img: HTMLElement = document.createElement('img');
        img.setAttribute('src', `assets/svg/${item.image}`);
        if (activeFilters[TypeFilter.shapes].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('shape-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateSortRadio: (typeS: TypeSort) => string = (typeS: TypeSort): string => {
    const div: HTMLElement = document.createElement('div');
    SORTS.forEach((item, index) => {
        const input: HTMLElement = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'type-sort');
        input.classList.add('sort-input');
        input.id = SORTS[index].type;
        div.appendChild(input);
        if (SORTS[index].type === typeS) {
            input.setAttribute('checked', 'checked');
        }
    });
    SORTS.forEach((item, index) => {
        const label: HTMLElement = document.createElement('label');
        label.setAttribute('for', SORTS[index].type);
        label.classList.add('sort-type_select');
        label.innerHTML = SORTS[index].innerText;
        div.appendChild(label);
    });
    return div.outerHTML;
};

const templateColorsFilter: TemplateColorsFilterType = (activeFilters: Record<TypeFilter, Colors[]>): string => {
    const ul: HTMLElement = document.createElement('ul');
    COLORS_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        li.style.background = item.bgColor;
        if (activeFilters[TypeFilter.colors].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('color-filter-item');
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateSizesFilter: TemplateSizesFilterType = (activeFilters: Record<TypeFilter, Sizes[]>): string => {
    const ul: HTMLElement = document.createElement('ul');
    SIZES_FILTER.forEach((item) => {
        const li: HTMLElement = document.createElement('li');
        const img: HTMLElement = document.createElement('img');
        img.setAttribute('src', `assets/svg/ball.svg`);
        li.id = item.class;
        if (activeFilters[TypeFilter.sizes].includes(item.type)) {
            li.classList.add('active');
        }
        li.classList.add('size-filter-item');
        li.appendChild(img);
        ul.appendChild(li);
    });
    return ul.outerHTML;
};

const templateFavoriteFilter: TemplateFavoriteFilterType = (activeFilters: Record<TypeFilter, boolean>): string => {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('favorites-filter');
    const input: HTMLElement = document.createElement('input');
    input.id = 'favorite-filter';
    input.setAttribute('type', 'checkbox');
    if (activeFilters[TypeFilter.favorite]) {
        input.setAttribute('checked', 'checked');
    }

    div.appendChild(input);
    const label: HTMLElement = document.createElement('label');
    label.setAttribute('for', 'favorite-filter');
    label.innerHTML = 'Только любимые:';
    div.appendChild(label);
    return div.outerHTML;
};

export const setSearchListeners = (filter: (filtertype: TypeFilter, item: CategoryFilterType) => void) => {
    const isSearch: HTMLInputElement = document.querySelector('.input__search');
    isSearch.addEventListener('keyup', (e: Event) => {
        const target = e.target as HTMLInputElement;
        filter(TypeFilter.search, target.value);
    });
    isSearch.addEventListener('search', (e: Event) => {
        const target = e.target as HTMLInputElement;
        filter(TypeFilter.search, target.value);
    });
};

export const setFiltersListeners: (filter: (filtertype: TypeFilter, item: CategoryFilterType) => void) => void = (
    filter: (filtertype: TypeFilter, item: CategoryFilterType) => void
): void => {
    const shapes: NodeListOf<Element> = document.querySelectorAll('.shape-filter-item');
    for (let i = 0; i < shapes.length; i = i + 1) {
        shapes[i].addEventListener('click', () => {
            filter(TypeFilter.shapes, SHAPE_FILTER[i].type);
        });
    }
    const colors = document.querySelectorAll('.color-filter-item');
    for (let i = 0; i < colors.length; i = i + 1) {
        colors[i].addEventListener('click', () => {
            filter(TypeFilter.colors, COLORS_FILTER[i].type);
        });
    }
    const sizes = document.querySelectorAll('.size-filter-item');
    for (let i = 0; i < sizes.length; i = i + 1) {
        sizes[i].addEventListener('click', () => filter(TypeFilter.sizes, SIZES_FILTER[i].type));
    }
    const isFavorite = document.querySelector('#favorite-filter');
    isFavorite.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLInputElement;
        filter(TypeFilter.favorite, target.checked);
    });
};

export const setResetFiltersListeners = (reset: () => void, resetHand: () => void, isResetLocal: () => void): void => {
    const isResetFilters: HTMLElement = document.getElementById('reset-filter');
    isResetFilters.addEventListener('click', () => {
        reset();
        resetHand();
    });
    const isResetLocalBtn: HTMLElement = document.getElementById('reset-storage');
    isResetLocalBtn.addEventListener('click', () => {
        reset();
        resetHand();
        templateBallCount(0);
        isResetLocal();
    });
};

export const templateBallCount = (count: number): void => {
    const ball: HTMLTemplateElement = document.querySelector('.favorite__ball');
    ball.innerHTML = count.toString();
};

export const templateFavoriteModal = (): string => {
    const div: HTMLElement = document.createElement('div');
    div.classList.add('favorite-modal');
    const close: HTMLElement = document.createElement('div');
    close.classList.add('modal-close');
    const text: HTMLElement = document.createElement('div');
    text.innerHTML = 'Извините, все слоты заполнены!';
    div.appendChild(text);
    div.appendChild(close);
    return div.outerHTML;
};

export const setModalListeners = (): void => {
    const close: HTMLElement = document.querySelector('.modal-close');
    close.addEventListener('click', () => {
        const div: HTMLElement = document.querySelector('.favorite-modal');
        div.classList.remove('show-modal');
    });
};

export const setSortListeners: (sort: (sorttype: TypeSort) => void) => void = (
    sort: (sorttype: TypeSort) => void
): void => {
    const sorts = document.querySelectorAll('.sort-input');
    sorts.forEach((item, index) => {
        item.addEventListener('change', () => sort(SORTS[index].type));
    });
};

export const templateFilterPage: (activeFilter: CategoryFilterTypes, activeSort: TypeSort) => string = (
    activeFilter: CategoryFilterTypes,
    activeSort: TypeSort
): string => {
    return `
        <main class="filter-page">
            <div>
                
                <section class="filter__menu">
                    <div class="menu__value-filters">
                        <h2>ФИЛЬТРЫ ПО ЗНАЧЕНИЮ</h2>
                        <div class="shapes">
                            <p>Форма:</p>
                            ${templateShapesFilter(activeFilter)}
                        </div>
                        <div class="colors">
                            <p>Цвет:</p>
                            ${templateColorsFilter(activeFilter)}
                        </div>
                        <div class="sizes">
                            <p>Размер:</p>
                            ${templateSizesFilter(activeFilter)}
                        </div>
                        ${templateFavoriteFilter(activeFilter)}
                    </div>
                    <div class="menu__range-filters">
                        <h2>ФИЛЬТРЫ ПО ДИАПАЗОНУ</h2>
                        <p>Количество экземпляров:</p>
                        <div class="count-range__container">
                            <span class="count-min"></span>
                            <div id="slider-count"></div><span class="count-max"></span>
                        </div>
                        <p>Год приобретения:</p>
                        <div class="year-range__container">
                            <span class="year-min"></span>
                            <div id="slider-year"></div><span class="year-max"></span>
                        </div>
                    </div>
                    <div class="menu__sort-type">
                        <h2>Сортировка</h2>
                        ${templateSortRadio(activeSort)}
                        <div class="reset-buttons">
                            <button id="reset-filter">Сбросить фильтры</button>
                            <button id="reset-storage">Сбросить настройки</button>
                        </div>

                    </div>

                </section>
            </div>
            <section class="filter__cards">
            </section>
            ${templateFavoriteModal()}
        </main>
 `;
};
