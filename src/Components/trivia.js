import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decode } from "html-entities";
import { fetchData } from "./actions/index";
import categories from "../categories.json";
import Loader from "react-loader-spinner";

const Trivia = () => {
  const mystate = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => setLoading(false), [mystate]);

  const handleClick = ({ target }) => {
    // console.log(target.innerHTML);
    // console.log(mystate);
    // if (target.innerHTML == mystate.correct_answer) {
    //   target.style.color = "green";
    // }
    Array.from(document.getElementsByClassName("trivia-item")).map((ele) => {
      ele.innerHTML == decode(mystate.correct_answer)
        ? (ele.style.color = "green")
        : (ele.style.color = "#B00020");
    });
  };

  const handleGetQuestion = ({ target }) => {
    Array.from(document.getElementsByClassName("trivia-item")).map(
      (ele) => (ele.style.color = "white")
    );
    setLoading(true);
    console.log(target);
    dispatch(fetchData(target.value ? target.value : mystate.id));
  };

  return (
    <div className="trivia-container">
      {loading ? (
        <Loader type="Circles" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>
          <h2>
            {mystate.question ? decode(mystate.question) : "Select a Category:"}
          </h2>
          <div className="dropdown">
            <button className="btn-categories">Select Category</button>
            <div className="dropdown-content">
              {categories.trivia_categories.map((cate) => (
                <button
                  key={cate.id}
                  value={cate.id}
                  onClick={handleGetQuestion}
                >
                  {cate.name}
                </button>
              ))}
            </div>
          </div>

          <ol type="A">
            {mystate.options
              ? mystate.options.map((option, index) => (
                  <li key={index} className="trivia-item" onClick={handleClick}>
                    {decode(option)}
                  </li>
                ))
              : ""}
          </ol>
          <button onClick={handleGetQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Trivia;

// const mystate = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const [loading, setLoading] = useState(false);

//   useEffect(() => dispatch(fetchData()), []);

//   useEffect(() => setLoading(false), [mystate]);

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div className="App">
//       {/* <button
//         onClick={() => {
//           setLoading(true);
//           dispatch(fetchData());
//         }}
//       >
//         Click me
//       </button>
//       <h3>{decode(mystate.question)}</h3>
//       <ol type="A">
//         {mystate.options.map((option, index) => (
//           <li key={index} className="options">
//             {decode(option)}
//           </li>
//         ))}
//       </ol> */}
//       <Trivia />
//     </div>
//   );
