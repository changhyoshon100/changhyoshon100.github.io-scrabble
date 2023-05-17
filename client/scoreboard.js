class WordScoreBoard {
  constructor() {
    this.words = [];
  }

  // TODO #8: Save the word score to the server
  async saveWordScore(name, word, score) {
    this.words.push({
      name: name,
      word: word,
      score: score,
    });

    const res = await fetch("/wordScore", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        word: word,
        score: score,
      }),
    });
  }

  render(element) {
    let html = "<h1>Word Scores</h1>";
    html += "<table>";
    this.words.forEach((word) => {
      html += `
        <tr>
          <td>${word.name}</td>
          <td>${word.word}</td>
          <td>${word.score}</td>
        </tr>
      `;
    });
    html += "</table>";
    element.innerHTML = html;
  }
}

class GameScoreBoard {
  constructor() {
    this.game = [];
  }

  render(element) {
    let html = "<h1>Game Score</h1>";
    html += "<table>";
    this.game.forEach((word) => {
      html += `
        <tr>
          <td>${word.name}</td>
          <td>${word.score}</td>
        </tr>
      `;
    });
    html += "</table>";
    element.innerHTML = html;
  }

  // TODO #9: Save the game score to the server
  async saveGameScore(name, score) {
    const res = await fetch("/gameScore", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        score: score,
      }),
    });
  }
}
class TopWordAndGameScoreBoard {
  // TODO #10: Render the top word and game scores
  async render(element) {
    // highest word
    // game scores
    const res = await fetch("/highestWordScores", {
      method: "POST",
    });
    const res2 = await fetch("/highestGameScores", {
      method: "POST",
    });

    console.log(res);
    let data = await res.json();
    console.log(data);

    let html = "<h1>Word Scores</h1>";
    html += "<table>";
    data.forEach((word) => {
      html += `
        <tr>
          <td>${word.name}</td>
          <td>${word.word}</td>
          <td>${word.score}</td>
        </tr>
      `;
    });
    html += "</table>";
    element.innerHTML = html;
  }
}

export const wordScoreBoard = new WordScoreBoard();
export const gameScoreBoard = new GameScoreBoard();
export const topWordAndGameScoreBoard = new TopWordAndGameScoreBoard();
