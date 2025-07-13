// Vocabulary List (keep extending it as needed)
const vocabList = [
  { latin: "a, ab", eng: "from, by", fig: "preposition" },
  { latin: "abeō, abīre, abīvī, abitus", eng: "to go away", fig: "verb", conjugation: "irregular" },
  { latin: "abhinc", eng: "ago, previously", fig: "adverb" },
  { latin: "abōminándus, abōminánda, abōminándum", eng: "detestable, horrible", fig: "adjective" },
  { latin: "ábstinēns, abstinéntis", eng: "refraining from", fig: "adjective" },
  { latin: "abstulere", eng: "to takeaway, to withdraw", fig: "verb", conjugation: "irregular" },
  { latin: "abesse", eng: "to be away, to be absent, to be distant", fig: "verb", conjugation: "irregular" },
  { latin: "ac", eng: "and", fig: "conjunction" },
  { latin: "idem ac", eng: "the same as", fig: "phrase" },
  { latin: "accendere", eng: "to set on fire", fig: "verb", conjugation: "3" },
  { latin: "accidere", eng: "to happen", fig: "verb", conjugation: "3" },
  { latin: "accípere", eng: "to receive, to get, to welcome", fig: "verb", conjugation: "3" },
  { latin: "accúmbere", eng: "to recline", fig: "verb", conjugation: "3" },
  { latin: "accúrrere", eng: "to run, to run toward, to run up to", fig: "verb", conjugation: "3" },
  { latin: "accusāre", eng: "to accuse", fig: "verb", conjugation: "1" },
  { latin: "ācer", eng: "sharp, bitter, pointed, piercing, shrill, sagacious, keen, severe, vigorous", fig: "adjective" },
  { latin: "ācriter", eng: "fiercely", fig: "adverb" },
  { latin: "āctor", eng: "actor, doer", fig: "noun", gender: "M", genitive: "āctōris", declension: "3rd"}
];

// App state
let shuffledList = [];
let currentIndex = 0;
let score = 0;
let modeLatinToEng = true;
let settings = {
  principalPartsMode: false,
  genitiveMode: false,
  genderMode: false,
  decMode: false,
  conjugationMode: false
};

// Shuffle helper
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Normalize/clean text
function cleanText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Prompt generator
function getPrompt(cur) {
  if (modeLatinToEng) {
    if (cur.fig === "verb") {
      if (settings.principalPartsMode) {
        return cur.latin;
      } else {
        const parts = cur.latin.split(",");
        return parts[0]; // Just the first form (infinitive or stem)
      }
    } else if (cur.fig === "noun") {
      return settings.genitiveMode && cur.genitive
        ? `${cur.latin}, ${cur.genitive}`
        : cur.latin;
    } else {
      return cur.latin;
    }
  } else {
    return cur.eng;
  }
}

// Show current question
function showQuestion() {
  const cur = shuffledList[currentIndex];
  const prompt = getPrompt(cur);

  document.getElementById("definition").textContent = prompt;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("modeLabel").textContent = modeLatinToEng ? "Latin → English" : "English → Latin";
  document.getElementById("answerInput").focus();
}

// Check answer
function submitAnswer() {
  const input = cleanText(document.getElementById("answerInput").value);
  const cur = shuffledList[currentIndex];
  let correctRaw = modeLatinToEng ? cur.eng : cur.latin;

  if (settings.genderMode && cur.fig === "noun") {
    correctRaw += ", " + cur.gender;
  }
if (settings.decMode && cur.fig === "noun") {
    correctRaw += ", " + cur.declension;
  }
  if (settings.conjugationMode && cur.fig === "verb") {
    correctRaw += ", " + cur.conjugation;
  }

  const correctAnswers = correctRaw.split(',').map(ans => cleanText(ans));
  const feedback = document.getElementById("feedback");
  if (!input) return;

  if (correctAnswers.includes(input)) {
    feedback.textContent = "Yay, that is correct!";
    feedback.className = "feedback correct";
    score++;
  } else {
    feedback.textContent = `Sorry, that is incorrect. Correct answer: "${correctRaw}"`;
    feedback.className = "feedback incorrect";
  }

  document.getElementById("score").textContent = `Score: ${score}`;
}

// Go to next question
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= shuffledList.length) {
    currentIndex = 0;
    shuffledList = shuffle(vocabList);
  }
  showQuestion();
}

// Start over
function startOver() {
  score = 0;
  currentIndex = 0;
  shuffledList = shuffle(vocabList);
  showQuestion();
}

// Toggle mode
function toggleMode() {
  modeLatinToEng = !modeLatinToEng;
  showQuestion();
}

// Modal controls
function openOptions() {
  document.getElementById("optionsModal").style.display = "block";
}

function closeOptions() {
  document.getElementById("optionsModal").style.display = "none";
}

function applyOptions() {
  settings.principalPartsMode = document.getElementById("ppMode").checked;
  settings.genitiveMode = document.getElementById("genMode").checked;
  settings.genderMode = document.getElementById("genderMode").checked;
  settings.conjugationMode = document.getElementById("decMode").checked;
  settings.conjugationMode = document.getElementById("conjMode").checked;
  closeOptions();
  showQuestion();
}

// Initialize app
window.onload = () => {
  shuffledList = shuffle(vocabList);
  showQuestion();
};
