function fetchQuestions() {
  return fetch(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  ).then((res) => res.json());
}

export default fetchQuestions;
