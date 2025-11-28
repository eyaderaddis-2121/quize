const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: ["Central Style Sheet", "Cascading Style Sheets", "Candy Style Sheet", "Case Styling Sheet"],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "Hyper Trainer Marking Language", "HyperText Marketing Language", "HighText Machine Language"],
    correct: 0
  }
];

let index = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = questions[index];
  questionElement.textContent = q.question;
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    if (i === questions[index].correct) btn.classList.add("correct");
    else btn.classList.add("wrong");

    btn.disabled = true;
  });

  if (selected === questions[index].correct) score++;
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

document.getElementById("restartBtn").onclick = () => location.reload();

loadQuestion();
