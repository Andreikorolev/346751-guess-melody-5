const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `rock`,
    }]
  }, {
    type: `genre`,
    genre: `jazz`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
      genre: `rock`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Deep Purple`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/16/Dopenation_Audio.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Deep Purple`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `RHCP`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Nirvana`,
    }],
  }
];
