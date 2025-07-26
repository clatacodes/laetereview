// vocabulary list
let vocabList = [
  { latin: ["a", "ab"], eng: ["from", "by"], fig: "preposition" },
  { latin: ["abeō", "abīre", "abīvī", "abitus"], eng: ["to go away"], fig: "verb", conjugation: "irregular" },
  { latin: ["abhinc"], eng: ["ago", "previously"], fig: "adverb" },
  { latin: ["abōminándus", "abōminánda", "abōminándum"], eng: ["detestable", "horrible"], fig: "adjective" },
  { latin: ["abstineo, abstinere, abstinui, abstentus "], eng: ["to refrain from"], fig: "verb", conjugation: "2"},
  { latin: ["abstulo, abstulere, ---, ---"], eng: ["to takeaway", "to withdraw"], fig: "verb", conjugation: "irregular" },
  { latin: ["absum, abesse, afui, afuturus"], eng: ["to be away", "to be absent", "to be distant"], fig: "verb", conjugation: "irregular" },
  { latin: ["ac", "et"], eng: ["and"], fig: "conjunction" },
  { latin: ["idem ac"], eng: ["the same as"], fig: "phrase" },
  { latin: ["accendere"], eng: ["to set on fire"], fig: "verb", conjugation: "3" },
  { latin: ["accidere"], eng: ["to happen"], fig: "verb", conjugation: "3" },
  { latin: ["accípere"], eng: ["to receive", "to get", "to welcome"], fig: "verb", conjugation: "3" },
  { latin: ["accúmbere"], eng: ["to recline"], fig: "verb", conjugation: "3" },
  { latin: ["accúrrere"], eng: ["to run", "to run toward", "to run up to"], fig: "verb", conjugation: "3" },
  { latin: ["accusāre"], eng: ["to accuse"], fig: "verb", conjugation: "1" },
  { latin: ["ācer"], eng: ["sharp", "bitter", "pointed", "piercing", "shrill", "sagacious", "keen", "severe", "vigorous"], fig: "adjective" },
  { latin: ["ācriter"], eng: ["fiercely"], fig: "adverb" },
  { latin: ["āctor"], eng: ["actor", "doer"], fig: "noun", gender: "M", genitive: "āctōris", declension: "3rd" }
];

let shuffledList = [];
let currentIndex = 0;
let score = 0;
let questionLimit = null;
let mode = "latToEng";
let ppMode = false;
let genMode = false;
let genderMode = false;
let decMode = false;
let conjMode = false;

function shuffle(array) 
{
  let a = array.slice();
  for (let i = a.length - 1; i > 0; i--) 
  {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showQuestion() 
{
  clearInputs();
  const vocab = shuffledList[currentIndex];
  const defDiv = document.getElementById("definition");

  if (!vocab || !vocab.latin || !vocab.eng)
  {
    defDiv.textContent = "No more questions!";
    return;
  }

  const displayText = mode === "latToEng" ? vocab.latin[0] : vocab.eng[0];
  defDiv.textContent = displayText;

  document.getElementById("modeLabel").textContent = mode === "latToEng" ? "Latin → English" : "English → Latin";
  document.getElementById("score").textContent = `Score: ${score}/${currentIndex}`;
  document.getElementById("feedback").textContent = "";
  console.log("Current index:", currentIndex);
console.log("Shuffled list length:", shuffledList.length);
console.log("Vocab at current index:", shuffledList[currentIndex]);

}

function submitAnswer() 
{
  const vocab = shuffledList[currentIndex];
  const answer = document.getElementById("answerInput").value.trim().toLowerCase();
  const genderInput = document.getElementById("genderInput").value.trim().toLowerCase();
  const declensionInput = document.getElementById("declensionInput").value.trim().toLowerCase();
  const conjugationInput = document.getElementById("conjugationInput").value.trim().toLowerCase();

  let correctAnswers = mode === "latToEng" ? vocab.eng : vocab.latin;

  // ensure array format
  if (!Array.isArray(correctAnswers)) correctAnswers = [correctAnswers];

  let isCorrect = correctAnswers.some(ans =>
  ans.toLowerCase().trim().replace(/[^\w\s]/g,' ') ===
  answer.toLowerCase().trim().replace(/[^\w\s]/g,' '));


  if (isCorrect && genderMode && vocab.gender) 
  {
    isCorrect = genderInput === vocab.gender.toLowerCase();
  }
  if (isCorrect && decMode && vocab.declension) 
  {
    isCorrect = declensionInput === vocab.declension.toLowerCase();
  }
  if (isCorrect && conjMode && vocab.conjugation) 
  {
    isCorrect = conjugationInput === vocab.conjugation.toLowerCase();
  }

  const feedback = document.getElementById("feedback");
  if (isCorrect) 
  {
    feedback.textContent = "Correct!";
    feedback.className = "feedback correct";
    score++;
  } 
  else 
  {
    feedback.textContent = `Incorrect. Acceptable answer(s): ${correctAnswers.join(", ")}` +
      (genderMode && vocab.gender ? ` | Gender: ${vocab.gender}` : "") +
      (decMode && vocab.declension ? ` | Declension: ${vocab.declension}` : "") +
      (conjMode && vocab.conjugation ? ` | Conjugation: ${vocab.conjugation}` : "");
    feedback.className = "feedback incorrect";
  }

  currentIndex++;
  document.getElementById("score").textContent = `Score: ${score}/${currentIndex}`;
}


function nextQuestion() 
{
  if (currentIndex >= shuffledList.length) 
  {
    document.getElementById("definition").textContent = "Finished!";
    document.getElementById("feedback").textContent = `Final Score: ${score}/${shuffledList.length}`;
    return;
  }
  showQuestion();
}

function clearInputs() 
{
  document.getElementById("answerInput").value = "";
  document.getElementById("genderInput").value = "";
  document.getElementById("declensionInput").value = "";
  document.getElementById("conjugationInput").value = "";
}

function applyQuestionCount() 
{
  const input = document.getElementById("questionCountInput").value;
  const count = parseInt(input);
  if (isNaN(count) || count <= 0) 
  {
    alert("Please enter a valid number.");
    return;
  }

  questionLimit = count;
  shuffledList = shuffle(vocabList).slice(0, questionLimit);
  currentIndex = 0;
  score = 0;
  document.getElementById("questionCountModal").style.display = "none";
  showQuestion();
}

function startOver() 
{
  shuffledList = shuffle(vocabList);
  currentIndex = 0;
  score = 0;
 document.getElementById("questionCountModal").style.display = "block";
  
}

function toggleMode() {
  mode = mode === "latToEng" ? "engToLat" : "latToEng";
  showQuestion();
}

function openOptions() 
{
  document.getElementById("optionsModal").style.display = "block";
  document.getElementById("ppMode").checked = ppMode;
  document.getElementById("genMode").checked = genMode;
  document.getElementById("genderMode").checked = genderMode;
  document.getElementById("decMode").checked = decMode;
  document.getElementById("conjMode").checked = conjMode;
}

function closeOptions() 
{
  document.getElementById("optionsModal").style.display = "none";
}

function applyOptions() 
{
  ppMode = document.getElementById("ppMode").checked;
  genMode = document.getElementById("genMode").checked;
  genderMode = document.getElementById("genderMode").checked;
  decMode = document.getElementById("decMode").checked;
  conjMode = document.getElementById("conjMode").checked;
  closeOptions();
}
document.addEventListener("keydown", function (event) {
  const activeElement = document.activeElement;

  // Prevent triggering while typing in an input except for Enter
  if (activeElement.tagName === "INPUT" && event.key !== "Enter") {
    return;
  }

  if (event.key === "Enter") 
  {
    event.preventDefault();
    submitAnswer();
  } 
  else if (event.key === " ") 
  {
    event.preventDefault();
    nextQuestion();
  }
});


window.onload = function () 
{
  startOver();
};
