import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const";
import AudioPlayer from "../audio-player/audio-player";

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
    };
  }

  render() {
    const {isPlaying} = this.state;
    const {onAnswer, question} = this.props;
    const {
      answers,
      song,
    } = question;

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
          <section className="game game--artist">
            <header className="game__header">
              <a className="game__back" href="#">
                <span className="visually-hidden">Сыграть ещё раз</span>
                <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
              </a>

              <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
                <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
              </svg>

              <div className="game__mistakes">
                <div className="wrong"></div>
                <div className="wrong"></div>
                <div className="wrong"></div>
              </div>
            </header>

            <section className="game__screen">
              <h2 className="game__title">Кто исполняет эту песню?</h2>
              <div className="game__track">
                <div className="track">
                  <AudioPlayer
                    onPlayButtonClick={() => {
                      this.setState({isPlaying: !isPlaying});
                    }}
                    isPlaying={isPlaying}
                    src={song.src}
                  />
                </div>
              </div>

              <form className="game__artist">
                {answers.map((answer, i) => (
                  <div key={answer.artist} className="artist">
                    <input className="artist__input visually-hidden" type="radio" name="answer"
                      id={`answer-${i}`}
                      value={`answer-${i}`}
                      onChange={(evt) => {
                        evt.preventDefault();
                        onAnswer(question, answer);
                      }}
                    />
                    <label className="artist__name" htmlFor={`answer-${i}`}>
                      <img className="artist__picture" src={answer.picture} alt="Пелагея" />
                      {answer.artist}
                    </label>
                  </div>
                ))}
              </form>
            </section>
          </section>
        </section>
      </main>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
