import Navbar from "./Component/Navbar";
import Quiz from "./Component/Quiz";


function App() {

  const quesBank = [
    {
      question:
        "What does HTML stand for? ?",
      answers: ["HyperText Markup Language", "HyperType Markup Language", "HyperText Markup List", "HyperText type Markup Language"],
      correct: "HyperText Markup Language",
      questionId: "1"
    },
    {
      question:
        "Who is making the Web standards ?",
      answers: ["Mozilla Mdn", "Chrome", "Opera", "Brave"],
      correct: "Mozilla Mdn",
      questionId: "2"
    },
    {
      question:
        "Choose the correct HTML element for the largest heading: ?",
      answers: ["h2", "html", "head", "h1"],
      correct: "h1",
      questionId: "3"
    },
    {
      question:
        "What is the correct HTML element for inserting a line break ?",
      answers: ["Br", "Hr", "P", "Body"],
      correct: "Br",
      questionId: "4"
    },
    {
      question:
        "Choose the correct HTML element to define important text ",
      answers: ["Bold", "impotant", "strong", "Italic"],
      correct: "strong",
      questionId: "5"
    },
    
    
  ];

  return (
    <div  className="App " >
      <Navbar/>
      <h1 style={{textAlign:"center"}} className="card-body" >Simple Quiz Application</h1>
      <Quiz  ques={quesBank} />
    </div>
  );
}

export default App;
