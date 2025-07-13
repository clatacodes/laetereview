// vocabulary list 
//{ latin: "", eng: "", fig: "" },
//ō, ā, 
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

let shuffledList = [];
let currentIndex = 0;
let score = 0;
let totalQuestions = vocabList.length;
let modeLatinToEng = true;

let settings = 
{
  principalPartsMode: false,
  genitiveMode: false,
  genderMode: false,
  decMode: false,
  conjugationMode: false
};

function shuffle(array) 
{
  return [...array].sort(() => Math.random() - 0.5);
}

function cleanText(text)
  {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function getPrompt(cur) 
{
  if (modeLatinToEng) 
  {
    if (cur.fig === "verb") 
    {
      return settings.principalPartsMode ? cur.latin : cur.latin.split(",")[0];
    } 
    else if (cur.fig === "noun") 
    {
      return settings.genitiveMode && cur.genitive ? `${cur.latin}, ${cur.genitive}` : cur.latin;
    } 
    else 
    {
      return cur.latin;
    }
  } else 
  {
    return cur.eng;
  }
}

function showQuestion()
  {
  if (currentIndex >= totalQuestions) 
  {
    alert("You've completed all selected questions!");
    return;
  }

  const cur = shuffledList[currentIndex];
  document.getElementById("definition").textContent = getPrompt(cur);
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("modeLabel").textContent = modeLatinToEng ? "Latin → English" : "English → Latin";
  document.getElementById("answerInput").focus();

  // optional input visibility
  document.getElementById("extraFields")?.remove();

  const extra = document.createElement("div");
  extra.id = "extraFields";

  if (!modeLatinToEng) {
    const cur = shuffledList[currentIndex];
    if (settings.genderMode && cur.fig === "noun") {
      extra.innerHTML += `<input id="genderInput" type="text" placeholder="Gender">`;
    }
    if (settings.decMode && cur.fig === "noun") {
      extra.innerHTML += `<input id="declensionInput" type="text" placeholder="Declension">`;
    }
    if (settings.conjugationMode && cur.fig === "verb") {
      extra.innerHTML += `<input id="conjugationInput" type="text" placeholder="Conjugation">`;
    }
    document.querySelector(".card").insertBefore(extra, document.getElementById("feedback"));
  }
}

function submitAnswer() 
{
  const input = cleanText(document.getElementById("answerInput").value);
  const cur = shuffledList[currentIndex];
  let correctRaw = modeLatinToEng ? cur.eng : cur.latin;

  const extras = [];

  if (!modeLatinToEng) 
  {
    if (settings.genderMode && cur.fig === "noun" && cur.gender) 
    {
      const genderInput = cleanText(document.getElementById("genderInput")?.value || "");
      extras.push({ actual: cleanText(cur.gender), input: genderInput });
    }
    if (settings.decMode && cur.fig === "noun" && cur.declension) 
    {
      const decInput = cleanText(document.getElementById("declensionInput")?.value || "");
      extras.push({ actual: cleanText(cur.declension), input: decInput });
    }
    if (settings.conjugationMode && cur.fig === "verb" && cur.conjugation) 
    {
      const conjInput = cleanText(document.getElementById("conjugationInput")?.value || "");
      extras.push({ actual: cleanText(cur.conjugation), input: conjInput });
    }
  }

  const correctAnswers = correctRaw.split(',').map(cleanText);
  const feedback = document.getElementById("feedback");

  const mainCorrect = correctAnswers.includes(input);
  const allExtrasCorrect = extras.every(e => e.actual === e.input);

  if (input && mainCorrect && allExtrasCorrect) 
  {
    feedback.textContent = "Yay, that is correct!";
    feedback.className = "feedback correct";
    score++;
  } 
  else 
  {
    let extraFeedback = extras.map(e => `${e.actual}`).join(", ");
    feedback.textContent = `Sorry, that is incorrect. Correct answer: "${correctRaw}${extraFeedback ? ', ' + extraFeedback : ''}"`;
    feedback.className = "feedback incorrect";
  }

  document.getElementById("score").textContent = `Score: ${score}`;
}

function nextQuestion() 
{
  currentIndex++;
  showQuestion();
}

function startOver() 
{
  score = 0;
  currentIndex = 0;
  const total = prompt(`How many questions would you like to do? Max: ${vocabList.length}`);
  totalQuestions = Math.min(parseInt(total) || vocabList.length, vocabList.length);
  shuffledList = shuffle(vocabList).slice(0, totalQuestions);
  showQuestion();
}

function toggleMode() 
{
  modeLatinToEng = !modeLatinToEng;
  showQuestion();
}

function openOptions() 
{
  document.getElementById("optionsModal").style.display = "block";
}

function closeOptions() 
{
  document.getElementById("optionsModal").style.display = "none";
}

function applyOptions() 
{
  settings.principalPartsMode = document.getElementById("ppMode").checked;
  settings.genitiveMode = document.getElementById("genMode").checked;
  settings.genderMode = document.getElementById("genderMode").checked;
  settings.decMode = document.getElementById("decMode").checked;
  settings.conjugationMode = document.getElementById("conjMode").checked;
  closeOptions();
  showQuestion();
}

// keyboard shortcuts
document.addEventListener("keydown", e => 
  {
  if (e.key === "Enter") 
  {
    submitAnswer();
  }
  else if (e.key === " ") 
  {
    e.preventDefault();
    nextQuestion();
  }
});

window.onload = () => 
  {
  startOver();
};
