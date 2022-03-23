const button = (block: string, text: string, str: string) => `<button class="${block}_${text}-btn">${str}</button>`;

export const templateMenuPage: () => string = () => {
    return `
    <div class="menu-page">
      <div class="menu__animation">
          <div class="animation__ball">
            <img src="./assets/icons/1.png" alt="ball">
          </div>
        </div>
        <main class="main__menu">
          <h1 class="menu__name"><span>Бабушкины</span>елочные игрушки</h1>
          ${button('menu', 'start', 'начать')}
        </main>
    </div>
      
      `;
};
