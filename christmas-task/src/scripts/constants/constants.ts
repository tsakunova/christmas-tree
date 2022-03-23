import { TypeFilter } from '../types/enums';

export const EMPTY_FILTER_TEXT = 'Извините, совпадений не обнаружено!';
export const AUDIO_SRC = 'assets/audio/audio.mp3';
export const LENGTH_FAVORITE_ARR = 20;
export const COUNT_GARLAND_ROW = 9;
export const COUNT_GARLAND_LI = 20;
export const AREA_COORDS = '52,596,251,20,448,577,341,660,161,666';

export const EXCLUDE_FILTERS_FOR_SAVE: TypeFilter[] = [TypeFilter.search];
export const FILTERS_WITH_MULTI_SELECT: TypeFilter[] = [TypeFilter.colors, TypeFilter.sizes, TypeFilter.shapes];
