import Flash from "./flash";

const questions = [
  {
    question: "What language react is based on ?",
    answer: "Javascript",
  },
  {
    question: "What are the building blocks of React apps ?",
    answer: "Components",
  },
  {
    question:
      "What's the name of the syntax we use to describe a UI in React ?",
    answer: "JSX",
  },
  {
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },
  {
    question: "What are the features of React ?",
    answer: "Virtual DOM, Server-side rendering, Uni-directional data flow",
  },
];
function App() {
  return <Flash questions={questions} />;
}
export default App;
