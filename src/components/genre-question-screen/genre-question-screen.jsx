import React from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const";

import GengeQuestionItem from "../genre-question-item/genre-question-item";

const GengeQuestionScreen = (props) => {
  const {
    onAnswer,
    onChange,
    question,
    renderPlayer,
    children,
    userAnswers
  } = props;
  const {
    answers,
    genre,
  } = question;

  return (
    <section className="main" id="root">
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          {children}
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer();
            }}
          >
            {answers.map((answer, i) => (
              <GengeQuestionItem
                answer={answer}
                id={i}
                key={`${i}-${answer.src}`}
                onChange={onChange}
                renderPlayer={renderPlayer}
                userAnswer={userAnswers[i]}
              />
            ))}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    </section>
  );
};

GengeQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default GengeQuestionScreen;
