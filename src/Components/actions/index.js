import axios from "axios";

const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

export const fetchData = (id) => {
  return async (dispatch) => {
    const url = id
      ? `https://opentdb.com/api.php?amount=1&category=${id}`
      : `https://opentdb.com/api.php?amount=1`;
    const response = await axios.get(url).then((res) => res.data.results[0]);
    const options = [response.correct_answer, ...response.incorrect_answers];
    const data = {
      question: response.question,
      correct_answer: response.correct_answer,
      options: shuffle(options),
      id,
    };
    dispatch({ type: "FETCH_DATA", payload: data });
  };
  // return {
  //   type: "FETCH_DATA",
  // };
};
