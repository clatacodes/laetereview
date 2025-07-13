const vocabList = [
  { latin: "magnus", eng: "big, great" },
  { latin: "bonus", eng: "good" },
  { latin: "malus", eng: "bad" },
  { latin: "canis", eng: "dog" },
  { latin: "puer", eng: "boy" },
  { latin: "puella", eng: "girl" },
  { latin: "ab", eng: "from, by" },
  { latin: "abīre", eng: "to go away" },
  { latin: "abhinc", eng: "ago, previously" },
  { latin: "abōminandus", eng: "detestable, horrible" },
  { latin: "abstinēns", eng: "refraining from" },
  { latin: "abstulere", eng: "to takeaway, to withdraw" },
  { latin: "abesse", eng: "to be away, to be absent, to be distant" },
  { latin: "ac", eng: "and" },
  { latin: "idem ac", eng: "the same as" },
  { latin: "accendere", eng: "to set on fire" },
  { latin: "accidere", eng: "to happen" }
];

let shuffledList = [];
let currentIndex = 0;
let score = 0;
let modeLatinToEng = true;
let questionLimit = vocabList.length;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
  const cur = shuffledList[currentIndex];
  const prompt = modeLatinToEng ? cur.latin : cur.eng;
  document.getElementById("definition").textContent = prompt;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("modeLabel").textContent = modeLatinToEng ? "Latin → English" : "English → Latin";
  document.getElementById("answerInput").focus();
}

function submitAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const cur = shuffledList[currentIndex];
  const correctAnswers = (modeLatinToEng ? cur.eng : cur.latin).toLowerCase().split(',').map(s => s.trim());
  const feedback = document.getElementById("feedback");
  if (!input) return;
  if (correctAnswers.includes(input)) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "feedback correct";
    score++;
  } else {
    feedback.textContent = `❌ Incorrect. Correct answer: "${correctAnswers.join(', ')}"`;
    feedback.className = "feedback incorrect";
  }
  document.getElementById("score").textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questionLimit) {
    alert(`🎉 Done! Final score: ${score} out of ${questionLimit}`);
    startOver();
  } else {
    showQuestion();
  }
}

function startOver() {
  score = 0;
  currentIndex = 0;
  let input = prompt(`How many questions do you want? (Max ${vocabList.length})`);
  let num = parseInt(input);
  if (isNaN(num) || num < 1) {
    num = vocabList.length;
  } else if (num > vocabList.length) {
    num = vocabList.length;
  }
  questionLimit = num;
  shuffledList = shuffle([...vocabList]).slice(0, questionLimit);
  showQuestion();
}

function toggleMode() {
  modeLatinToEng = !modeLatinToEng;
  startOver();
}

document.addEventListener('keydown', function(event) {
  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === 'input') {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      nextQuestion();
    }
  }
});

startOver();
