import React from "react";

const WinScreen = () => {
  return (
    <main className="app">
      <svg xmlns="http://www.w3.org/2000/svg" style={{position: `absolute`, left: `-1200em`}}>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
          <feOffset dx="0" dy="0"></feOffset>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </svg>
      <section className="main" id="root">
        <section className="result">
          <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
          <h2 className="result__title">Вы настоящий меломан!</h2>
          <p className="result__total">Вы ответили правильно на 6 вопросов и совершили 2 ошибки</p>
          <button className="replay" type="button">Сыграть ещё раз</button>
        </section>
      </section>
    </main>
  );
};

export default WinScreen;
