import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import AuthScreen from "../auth-screen/auth-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import WelcomeScreen from "../welcome-screen/welcome-screeen";
import WinScreen from "../win-screen/win-screen";


const App = (props) => {
// eslint-disable-next-line react/prop-types
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen/>
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen questions={questions}/>
        </Route>
        <Route exact path="/result">
          <WinScreen/>
        </Route>
        <Route exact path="/lose">
          <GameOverScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
