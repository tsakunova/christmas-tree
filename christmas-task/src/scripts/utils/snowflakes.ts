import { TypePage } from '../types/enums';

export const createSnowFlake = (page: TypePage) => {
    if (page === TypePage.game) {
        const inputSnow: HTMLInputElement = <HTMLInputElement>document.getElementById('menu__btn-snow');
        if (inputSnow && inputSnow.checked) {
            const snowflake: HTMLElement = document.createElement('span');
            snowflake.classList.add('snowflake');
            snowflake.style.left = `${Math.random() * window.innerWidth}px`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
            snowflake.style.opacity = `${Math.random()}`;
            const size: number = Math.random() * 10 + 10;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            document.querySelector('.game-main__tree').prepend(snowflake);
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }
    }
};
