// vocabulary list
// ō ū ā ē c
// { latin: [""], eng: [""], fig: "", conj:""},
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
  { latin: ["accendo","accendere", "accendi", "accensus"], eng: ["to set on fire", "to kindle", "to light", "to illuminate", "to inflame", "to stir up", "to arouse", "to make bright"], fig: "verb", conjugation: "3" },
  { latin: ["accidō", "accidere", "accidĪ", "-----"], eng: ["to happen"], fig: "verb", conjugation: "3" },
  { latin: ["accipiō", "accipere", "accēpī", "acceptus"], eng: ["to accept", "to receive", "to get", "to welcome", "to take,", "to grasp","to receive","to accept","to undertake", "to admit","to let in","to hear", "to learn", "to obey"], fig: "verb", conjugation: "3" },
  { latin: ["accumbo", "accúmbere", "accubui"], eng: ["to recline"], fig: "verb", conjugation: "3" },
  { latin: ["accurrō", "accurrere", "accurrī"], eng: ["to run", "to run toward", "to run up to", "to run up" "to hasten to","to rush up to", "to rush up" "to charge", "to rush to attack"], fig: "verb", conjugation: "3" },
  { latin: ["accusāre"], eng: ["to accuse"], fig: "verb", conjugation: "1" },
  { latin: ["ācer"], eng: ["sharp", "bitter", "pointed", "piercing", "shrill", "sagacious", "keen", "severe", "vigorous"], fig: "adjective" },
  { latin: ["ācriter"], eng: ["fiercely"], fig: "adverb" },
  { latin: ["āctor"], eng: ["actor", "doer"], fig: "noun", gender: "M", genitive: "āctōris", declension: "3" },
  { latin: ["abdūcō", "abducere", "abdūxĪ", "abductus"], eng: [...], fig: "verb", conjugation: "3"},
  { latin: ["abripiō", "abripere", "abripuĪ", "abreptus"], eng: ["to drag","to snatch","to carry away by force", "to remove away by force", "to wash away", "to blow away","to abduct", "to kidnap"], fig: "verb", conjugation: "3"},
  { latin: ["absurdus"], eng: ["out of tune", "discordant", "absurd", "nonsensical", "out of place", "awkward", "uncouth"], fig: "adjective" },
  { latin: ["ac"], eng: ["and","and also","and besides"], fig: "conjunction"},
  { latin: ["idem ac"], eng: ["the same as","same","the same", "the very same"], fig: "conjunction" },
  { latin: ["accūsātiō"], eng: ["accusation", "inditement", "act of accusation", "rebuke", "reproof"], fig: "noun", gender: "F", genitive: "accūsātiōnis", declension:"3" },
{ latin: ["ab (a) + abl."], eng: ["away from, from", "by"], fig: "preposition" },
{ latin: ["abeo", "abire", "abii", "abitum"], eng: ["to go away, depart", "to die", "to disappear"], fig: "verb", conjugation: "irregular" },
{ latin: ["absens", "absentis"], eng: ["absent, away"], fig: "adjective" },
{ latin: ["accedo", "accedere", "accessi", "accessum"], eng: ["to come to, approach", "to agree"], fig: "verb", conjugation: "irregular" },
{ latin: ["accido", "accidere", "accidi"], eng: ["to fall upon", "happen", "occur"], fig: "verb", conjugation: "irregular" },
{ latin: ["accipio", "accipere", "accepi", "acceptum"], eng: ["to take, receive", "to let in"], fig: "verb", conjugation: "irregular" },
{ latin: ["acer", "acris", "acre"], eng: ["sharp, keen, eager, severe"], fig: "adjective" },
{ latin: ["acerbus", "a", "um"], eng: ["harsh, bitter, grievous"], fig: "adjective" },
{ latin: ["ad"], eng: ["to, near to, toward, at"], fig: "preposition" },
{ latin: ["adeo", "adire", "adii", "aditum"], eng: ["to go to, approach"], fig: "verb", conjugation: "irregular" },
{ latin: ["adfero", "adferre", "attuli", "allatum"], eng: ["to bring to"], fig: "verb", conjugation: "irregular" },
{ latin: ["adiuvo", "adiuvare", "adiuvi", "adiutum"], eng: ["to help"], fig: "verb", conjugation: "irregular" },
{ latin: ["admitto", "admittere", "admisi", "admissum"], eng: ["to admit, receive, let in"], fig: "verb", conjugation: "irregular" },
{ latin: ["adulescens", "adulescentis"], eng: ["youth", "young man"], fig: "noun", gender: "M", genitive: "adulescentis", declension: "3" },
{ latin: ["adulescentia", "adulescentiae"], eng: ["youth"], fig: "noun", gender: "F", genitive: "adulescentiae", declension: "1" },
{ latin: ["advenio", "advenire", "adveni", "adventum"], eng: ["to come", "arrive, reach"], fig: "verb", conjugation: "irregular" },
{ latin: ["adversus", "a", "um"], eng: ["opposite, adversary"], fig: "adjective" },
{ latin: ["aedificium", "aedificii"], eng: ["building, structure"], fig: "noun", gender: "N", genitive: "aedificii", declension: "2" },
{ latin: ["aequus", "a", "um"], eng: ["level, even", "calm", "equal, just"], fig: "adjective" },
{ latin: ["aes", "aeris"], eng: ["bronze"], fig: "noun", gender: "N", genitive: "aeris", declension: "3" },
{ latin: ["aestimo", "aestimare", "aestimavi", "aestimatum"], eng: ["to consider, esteem", "to judge"], fig: "verb", conjugation: "irregular" },
{ latin: ["aetas", "aetatis"], eng: ["period, time of life, age"], fig: "noun", gender: "F", genitive: "aetatis", declension: "3" },
{ latin: ["aeternus", "a", "um"], eng: ["eternal"], fig: "adjective" },
{ latin: ["affero", "afferre", "attuli", "allatus"], eng: ["to bring to", "carry", "produce"], fig: "verb", conjugation: "irregular" },
{ latin: ["ager", "agri"], eng: ["field"], fig: "noun", gender: "M", genitive: "agri", declension: "2" },
{ latin: ["aggredior", "aggredi", "aggressus sum"], eng: ["approach, advance", "attack", "undertake"], fig: "verb", conjugation: "irregular" },
{ latin: ["ago", "agere", "egi", "actum"], eng: ["to drive, lead, do, act", "pass, spend"], fig: "time" },
{ latin: ["ago", "agere", "egi", "actus"], eng: ["drive, urge, conduct", "deliver"], fig: "speech" },
{ latin: ["agricola", "agricolae"], eng: ["farmer"], fig: "noun", gender: "M", genitive: "agricolae", declension: "1" },
{ latin: ["alius", "alia", "aliud"], eng: ["other, another"], fig: "adjective" },
{ latin: ["alo", "alere", "alui", "altum"], eng: ["to nourish, support, sustain"], fig: "verb", conjugation: "irregular" },
{ latin: ["alter", "altera", "alterum"], eng: ["the other"], fig: "of two" },
{ latin: ["ambulo", "ambulare", "ambulavi", "ambulatum"], eng: ["to walk"], fig: "verb", conjugation: "irregular" },
{ latin: ["amica", "amicae"], eng: ["friend"], fig: "noun", gender: "F", genitive: "amicae", declension: "1" },
{ latin: ["amicitia", "amicitiae"], eng: ["friendship"], fig: "noun", gender: "F", genitive: "amicitiae", declension: "1" },
{ latin: ["amicus", "a", "um"], eng: ["friendly"], fig: "adjective" },
{ latin: ["amicus", "amici"], eng: ["friend"], fig: "noun", gender: "M", genitive: "amici", declension: "2" },
{ latin: ["amo", "amare", "amavi", "amatum"], eng: ["to love, like"], fig: "verb", conjugation: "irregular" },
{ latin: ["amor", "amoris"], eng: ["love"], fig: "noun", gender: "M", genitive: "amoris", declension: "3" },
{ latin: ["anima", "animae"], eng: ["soul, spirit"], fig: "noun", gender: "F", genitive: "animae", declension: "1" },
{ latin: ["animadverto", "animadvertere", "animadverti", "animadversum"], eng: ["pay attention to, attend to", "notice, observe"], fig: "verb", conjugation: "irregular" },
{ latin: ["animal", "animalis"], eng: ["animal"], fig: "noun", gender: "N", genitive: "animalis", declension: "3" },
{ latin: ["animi", "animorum"], eng: ["pride, high spirits, courage"], fig: "noun", gender: "M", genitive: "animorum", declension: "unknown" },
{ latin: ["animus", "animi"], eng: ["soul, spirit"], fig: "noun", gender: "M", genitive: "animi", declension: "2" },
{ latin: ["annus", "anni"], eng: ["year"], fig: "noun", gender: "M", genitive: "anni", declension: "2" },
{ latin: ["ante + acc."], eng: ["before, in front of"], fig: "preposition" },
{ latin: ["antiquus", "a", "um"], eng: ["ancient"], fig: "adjective" },
{ latin: ["aperio", "aperire", "aperui", "apertum"], eng: ["uncover, open, disclose"], fig: "verb", conjugation: "irregular" },
{ latin: ["appareo", "apparere", "apparui", "apparitum"], eng: ["appear, show up, occur"], fig: "verb", conjugation: "irregular" },
{ latin: ["appello", "appellare", "appellavi", "appellatum"], eng: ["to call, name"], fig: "verb", conjugation: "irregular" },
{ latin: ["aqua", "aquae"], eng: ["water"], fig: "noun", gender: "F", genitive: "aquae", declension: "1" },
{ latin: ["arbitror", "arbitrari", "arbitratus sum"], eng: ["to judge, think"], fig: "verb", conjugation: "irregular" },
{ latin: ["arbor", "arboris"], eng: ["tree"], fig: "noun", gender: "F", genitive: "arboris", declension: "3" },
{ latin: ["argumentum", "argumenti"], eng: ["proof, evidence, argument"], fig: "noun", gender: "N", genitive: "argumenti", declension: "2" },
{ latin: ["arma", "armorum"], eng: ["arms, weapons"], fig: "noun", gender: "N", genitive: "armorum", declension: "unknown" },
{ latin: ["ars", "artis"], eng: ["skill, art"], fig: "noun", gender: "F", genitive: "artis", declension: "3" },
{ latin: ["as", "assis", "m."], eng: ["an as"], fig: "ancient coin" },
{ latin: ["asper", "aspera", "asperum"], eng: ["rough, harsh, bitter"], fig: "adjective" },
{ latin: ["Athenae", "Athenarum"], eng: ["Athens"], fig: "noun", gender: "F", genitive: "Athenarum", declension: "unknown" },
{ latin: ["auctor", "auctoris"], eng: ["author, originator", "supporter"], fig: "noun", gender: "M", genitive: "auctoris", declension: "3" },
{ latin: ["audax", "audacis"], eng: ["bold, daring", "courageous", "rash"], fig: "adjective" },
{ latin: ["audeo", "audere", "ausus sum"], eng: ["to dare"], fig: "verb", conjugation: "irregular" },
{ latin: ["audio", "audire", "audivi", "auditum"], eng: ["to hear"], fig: "verb", conjugation: "irregular" },
{ latin: ["auditor", "auditoris"], eng: ["listener, hearer"], fig: "noun", gender: "M", genitive: "auditoris", declension: "3" },
{ latin: ["aura", "aurae"], eng: ["breeze, wind, air", "vapor"], fig: "noun", genitive: "aurae", declension: "1" },
{ latin: ["aureus", "a", "um"], eng: ["golden", "gilded", "beautiful"], fig: "adjective" },
{ latin: ["auris", "auris"], eng: ["ear"], fig: "noun", gender: "F", genitive: "auris", declension: "3" },
{ latin: ["aurum", "auri"], eng: ["gold", "riches"], fig: "noun", gender: "N", genitive: "auri", declension: "2" },
{ latin: ["auxilium", "auxilii"], eng: ["aid, help"], fig: "noun", gender: "N", genitive: "auxilii", declension: "2" },
{ latin: ["avarus", "a", "um"], eng: ["greedy, avaricious"], fig: "adjective" },
{ latin: ["averto", "avertere", "averti", "aversum"], eng: ["to avert, turn away"], fig: "verb", conjugation: "irregular" },
{ latin: ["basium", "basii"], eng: ["kiss"], fig: "noun", gender: "N", genitive: "basii", declension: "2" },
{ latin: ["beatus", "a", "um"], eng: ["happy, fortunate, blessed"], fig: "adjective" },
{ latin: ["bellum", "belli"], eng: ["war"], fig: "noun", gender: "N", genitive: "belli", declension: "2" },
{ latin: ["bellus", "a", "um"], eng: ["pretty, handsome"], fig: "adjective" },
{ latin: ["bene"], eng: ["well, satisfactorily, quite"], fig: "adverb" },
{ latin: ["beneficium", "beneficii"], eng: ["benefit, kindness, favor"], fig: "noun", gender: "N", genitive: "beneficii", declension: "2" },
{ latin: ["bibo", "bibere", "bibi"], eng: ["to drink"], fig: "verb", conjugation: "irregular" },
{ latin: ["bonus", "a", "um"], eng: ["good", "kind"], fig: "adjective" },
{ latin: ["brevis", "breve"], eng: ["short, brief"], fig: "adjective" },
{ latin: ["cado", "cadere", "cecidi", "casum"], eng: ["to fall"], fig: "verb", conjugation: "irregular" },
{ latin: ["caecus", "a", "um"], eng: ["blind"], fig: "adjective" },
{ latin: ["caelum", "caeli"], eng: ["heaven, sky"], fig: "noun", gender: "N", genitive: "caeli", declension: "2" },
{ latin: ["Caesar", "Caesaris"], eng: ["Caesar"], fig: "noun", gender: "M", genitive: "Caesaris", declension: "3" },
{ latin: ["calamitas", "calamitatis"], eng: ["disaster, calamity"], fig: "noun", genitive: "calamitatis", declension: "3" },
{ latin: ["campus", "campi m."], eng: ["plain, level field, surface"], fig: "noun", genitive: "campi m.", declension: "unknown" },
{ latin: ["candidus", "a", "um"], eng: ["shining, bright, white", "beautiful"], fig: "adjective" },
{ latin: ["cano", "canere", "cecini", "cantum"], eng: ["sing, celebrate, chant", "recite"], fig: "verb", conjugation: "irregular" },
{ latin: ["capio", "capere", "cepi", "captum"], eng: ["to capture, take, get"], fig: "verb", conjugation: "irregular" },
{ latin: ["caput", "capitis"], eng: ["head", "leader", "beginning"], fig: "noun", gender: "N", genitive: "capitis", declension: "3" },
{ latin: ["careo", "carere", "carui", "cariturum"], eng: ["to be without, lack, be deprived from"], fig: "verb", conjugation: "irregular" },
{ latin: ["carmen", "carminis"], eng: ["poem, song"], fig: "noun", gender: "N", genitive: "carminis", declension: "3" },
{ latin: ["carpo", "carpere", "carpsi", "carptum"], eng: ["to harvest, pluck, seize"], fig: "verb", conjugation: "irregular" },
{ latin: ["Carthago", "Carthaginis"], eng: ["Carthage"], fig: "noun", gender: "F", genitive: "Carthaginis", declension: "3" },
{ latin: ["carus", "a", "um"], eng: ["dear"], fig: "adjective" },
{ latin: ["casa", "casae"], eng: ["house"], fig: "noun", gender: "F", genitive: "casae", declension: "1" },
{ latin: ["casus", "casus f."], eng: ["fall, overthrow", "chance", "accident"], fig: "noun", genitive: "casus f.", declension: "unknown" },
{ latin: ["causa + gen."], eng: ["for the sake of, on account of"], fig: "preposition" },
{ latin: ["causa", "causae"], eng: ["cause, reason", "case, situation"], fig: "noun", gender: "F", genitive: "causae", declension: "1" },
{ latin: ["cedo", "cedere", "cessi", "cessum"], eng: ["to go, withdraw", "yield to, grant, submit"], fig: "verb", conjugation: "irregular" },
{ latin: ["celer", "celeris", "celere"], eng: ["swift, quick"], fig: "adjective" },
{ latin: ["celeritas", "celeritatis f."], eng: ["speed, quickness", "speed of action, haste"], fig: "noun", genitive: "celeritatis f.", declension: "unknown" },
{ latin: ["cella", "cellae f."], eng: ["room", "storeroom"], fig: "noun", genitive: "cellae f.", declension: "unknown" },
{ latin: ["celo", "celare", "celavi", "celatum"], eng: ["conceal", "disguise", "keep in the dark"], fig: "verb", conjugation: "irregular" },
{ latin: ["cena", "cenae"], eng: ["dinner"], fig: "noun", gender: "F", genitive: "cenae", declension: "1" },
{ latin: ["ceno", "cenare", "cenavi", "cenatum"], eng: ["to dine"], fig: "verb", conjugation: "irregular" },
{ latin: ["centum"], eng: ["hundred"], fig: "adjective" },
{ latin: ["cerno", "cernere", "crevi", "cretum"], eng: ["to distinguish, discern, perceive"], fig: "verb", conjugation: "irregular" },
{ latin: ["ceteri", "ceterae", "cetera"], eng: ["the remaining, the rest, the other, all the others"], fig: "adjective" },
{ latin: ["cingo", "cingere", "cinxi", "cinctum"], eng: ["to surround, gird", "equip"], fig: "verb", conjugation: "irregular" },
{ latin: ["civis", "civis", "m. & f."], eng: ["citizen"], fig: "noun", genitive: "civis", declension: "3" },
{ latin: ["civitas", "civitatis"], eng: ["state, citizenship"], fig: "noun", gender: "F", genitive: "civitatis", declension: "3" },
{ latin: ["clamo", "clamare", "clamavi", "clamatum"], eng: ["to proclaim, declare", "shout out"], fig: "verb", conjugation: "irregular" },
{ latin: ["clarus", "a", "um"], eng: ["clear, bright", "famous, illustrious"], fig: "adjective" },
{ latin: ["clementia", "clementiae"], eng: ["mercy, mildness, clemency"], fig: "noun", gender: "F", genitive: "clementiae", declension: "1" },
{ latin: ["cogito", "cogitare", "cogitavi", "cogitatum"], eng: ["to think"], fig: "verb", conjugation: "irregular" },
{ latin: ["cognosco", "cognoscere", "cognovi", "cognitum"], eng: ["to learn, recognize", "know"], fig: "perf. tenses" },
{ latin: ["cogo", "cogere", "coegi", "coactum"], eng: ["to drive together, bring together, force, compel"], fig: "verb", conjugation: "irregular" },
{ latin: ["colloquor", "colloqui", "collocutus sum"], eng: ["to speak with", "talk over"], fig: "verb", conjugation: "irregular" },
{ latin: ["comes", "comitis"], eng: ["comrade, companion"], fig: "noun", genitive: "comitis", declension: "3" },
{ latin: ["committo", "committere", "commisi", "commissum"], eng: ["to entrust, commit", "join"], fig: "verb", conjugation: "irregular" },
{ latin: ["communis", "commune"], eng: ["common, general"], fig: "adjective" },
{ latin: ["comprehendo", "comprehendere", "comprehensi", "comprehensum"], eng: ["to grasp, seize, arrest", "comprehend, understand"], fig: "verb", conjugation: "irregular" },
{ latin: ["condo", "condere", "condidi", "conditum"], eng: ["to put together, store", "found, establish"], fig: "verb", conjugation: "irregular" },
{ latin: ["confero", "conferre", "contuli", "collatum"], eng: ["to bring together, compare", "to go"], fig: "+reflex." },
{ latin: ["conficio", "conficere", "confeci", "confectum"], eng: ["to make, complete, accomplish", "do thoroughly"], fig: "verb", conjugation: "irregular" },
{ latin: ["confiteor", "confiteri", "confessus sum"], eng: ["to confess, admit, acknowledge, reveal"], fig: "verb", conjugation: "irregular" },
{ latin: ["coniunx", "coniugis c."], eng: ["spouse", "husband, wife"], fig: "noun", genitive: "coniugis c.", declension: "unknown" },
{ latin: ["coniuratus", "coniurati"], eng: ["conspirator"], fig: "noun", gender: "M", genitive: "coniurati", declension: "2" },
{ latin: ["conor", "conari", "conatus sum"], eng: ["to try, attempt"], fig: "verb", conjugation: "irregular" },
{ latin: ["conservo", "conservare", "conservavi", "conservatum"], eng: ["to preserve, conserve, maintain"], fig: "verb", conjugation: "irregular" },
{ latin: ["consilium", "consilii"], eng: ["plan, purpose", "advice"], fig: "noun", gender: "N", genitive: "consilii", declension: "2" },
{ latin: ["constituo", "constituere", "constitui", "constitutum"], eng: ["to set up", "locate", "decide, resolve", "establish"], fig: "verb", conjugation: "irregular" },
{ latin: ["consul", "consulis"], eng: ["consul"], fig: "noun", gender: "M", genitive: "consulis", declension: "3" },
{ latin: ["consumo", "consumere", "consumpsi", "consumptum"], eng: ["to consume, use up"], fig: "verb", conjugation: "irregular" },
{ latin: ["contemno", "contemnere", "contempsi", "contemptum"], eng: ["to despise, condemn"], fig: "verb", conjugation: "irregular" },
{ latin: ["contendo", "contendere", "contendi", "contentum"], eng: ["to strive, struggle, contend", "hasten"], fig: "verb", conjugation: "irregular" },
{ latin: ["contineo", "continere", "continui", "contentum"], eng: ["to contain"], fig: "verb", conjugation: "irregular" },
{ latin: ["contra + acc."], eng: ["against"], fig: "preposition" },
{ latin: ["contundo", "contundere", "contudi", "contusum"], eng: ["to beat, crush, bruise, destroy"], fig: "verb", conjugation: "irregular" },
{ latin: ["copia", "copiae"], eng: ["abundance, supply"], fig: "noun", gender: "F", genitive: "copiae", declension: "1" },
{ latin: ["copiae", "copiarum"], eng: ["troops, forces"], fig: "noun", gender: "F", genitive: "copiarum", declension: "unknown" },
{ latin: ["cornu", "cornus"], eng: ["horn"], fig: "noun", gender: "N", genitive: "cornus", declension: "4" },
{ latin: ["corona", "coronae f."], eng: ["crown, garland", "wealth"], fig: "noun", genitive: "coronae f.", declension: "unknown" },
{ latin: ["corpus", "corporis"], eng: ["body"], fig: "noun", gender: "N", genitive: "corporis", declension: "3" },
{ latin: ["cras"], eng: ["tomorrow"], fig: "adverb" },
{ latin: ["credo", "credere", "credidi", "creditum"], eng: ["to believe, trust"], fig: "verb", conjugation: "irregular" },
{ latin: ["creo", "creare", "creavi", "creatum"], eng: ["to create"], fig: "verb", conjugation: "irregular" },
{ latin: ["cresco", "crescere", "crevi", "cretum"], eng: ["to increase"], fig: "verb", conjugation: "irregular" },
{ latin: ["crudelis", "crudele"], eng: ["cruel, severe", "harsh, bitter"], fig: "noun", genitive: "crudele", declension: "unknown" },
{ latin: ["culpa", "culpae"], eng: ["fault, blame"], fig: "noun", gender: "F", genitive: "culpae", declension: "1" },
{ latin: ["culpo", "culpare", "culpavi", "culpatum"], eng: ["to blame, censure"], fig: "verb", conjugation: "irregular" },
{ latin: ["cum + abl."], eng: ["with"], fig: "preposition" },
{ latin: ["cum + subj."], eng: ["when, since, although"], fig: "conjunction" },
{ latin: ["cupiditas", "cupiditatis"], eng: ["desire, longing, passion"], fig: "noun", gender: "F", genitive: "cupiditatis", declension: "3" },
{ latin: ["cupido", "cupidinis"], eng: ["desire, passion"], fig: "noun", gender: "F", genitive: "cupidinis", declension: "3" },
{ latin: ["cupidus", "a", "um"], eng: ["desirous, eager, fond", "desirous of,eager for"], fig: "+gen." },
{ latin: ["cupio", "cupere", "cupivi", "cupitum"], eng: ["to desire, wish, long for"], fig: "verb", conjugation: "irregular" },
{ latin: ["cura", "curae"], eng: ["care, attention", "love", "anxiety"], fig: "noun", gender: "F", genitive: "curae", declension: "1" },
{ latin: ["curo", "curare", "curavi", "curatum"], eng: ["to care for, attend to", "heal, cure", "take care"], fig: "verb", conjugation: "irregular" },
{ latin: ["curro", "currere", "cucurri", "cursum"], eng: ["to run, rush"], fig: "verb", conjugation: "irregular" },
{ latin: ["cursus", "cursus"], eng: ["running, race, course"], fig: "noun", gender: "M", genitive: "cursus", declension: "4" },
{ latin: ["custodia", "custodiae"], eng: ["protection, custody", "pl., guards"], fig: "noun", gender: "F", genitive: "custodiae", declension: "1" },
{ latin: ["custos", "custodis c."], eng: ["to guard, watch", "keeperl jailer"], fig: "noun", genitive: "custodis c.", declension: "unknown" },
{ latin: ["damno", "damnare", "damnavi", "damnatum"], eng: ["to condemn, harm", "find fault"], fig: "verb", conjugation: "irregular" },
{ latin: ["dea", "deae"], eng: ["goddess"], fig: "noun", gender: "F", genitive: "deae", declension: "1" },
{ latin: ["debeo", "debere", "debui", "debitum"], eng: ["to owe", "ought"], fig: "verb", conjugation: "irregular" },
{ latin: ["decerno", "decernere", "decrevi", "decretum"], eng: ["to decree", "to separate"], fig: "verb", conjugation: "irregular" },
{ latin: ["decorus", "a", "um"], eng: ["beautiful", "adorned", "proper, noble"], fig: "adjective" },
{ latin: ["dedico", "dedicare", "dedicavi", "dedicatum"], eng: ["to dedicate"], fig: "verb", conjugation: "irregular" },
{ latin: ["defendo", "defendere", "defendi", "defensum"], eng: ["to ward off, defend, protect"], fig: "verb", conjugation: "irregular" },
{ latin: ["defero", "deferre", "detuli", "delatum"], eng: ["to carry off", "transfer", "reduce", "offer"], fig: "verb", conjugation: "irregular" },
{ latin: ["delectatio", "delectationis"], eng: ["delight, pleasure, enjoyment"], fig: "noun", gender: "F", genitive: "delectationis", declension: "3" },
{ latin: ["delecto", "delectare", "delectavi", "delectatum"], eng: ["to delight, charm, please"], fig: "verb", conjugation: "irregular" },
{ latin: ["deleo", "delere", "delevi", "deletum"], eng: ["to destroy, wipe out, erase"], fig: "verb", conjugation: "irregular" },
{ latin: ["deligo", "deligere", "delegi", "delectum"], eng: ["to choose, select", "enrol"], fig: "verb", conjugation: "irregular" },
{ latin: ["demens", "dementis"], eng: ["demented, mad", "foolish"], fig: "adjective" },
{ latin: ["demonstro", "demonstrare", "demonstravi", "demonstratum"], eng: ["to point out, show, demonstrate"], fig: "verb", conjugation: "irregular" },
{ latin: ["desidero", "desiderare", "desideravi", "desideratum"], eng: ["to desire, long for, miss"], fig: "verb", conjugation: "irregular" },
{ latin: ["desino", "desinere", "desivi", "desitum"], eng: ["to give up", "abandon, cease, desist"], fig: "verb", conjugation: "irregular" },
{ latin: ["deterreo", "deterrere", "deterrui", "deterritum"], eng: ["to deter", "frighten away, discourage"], fig: "verb", conjugation: "irregular" },
{ latin: ["deus", "dei"], eng: ["god"], fig: "noun", gender: "M", genitive: "dei", declension: "2" },
{ latin: ["dexter", "dextra", "dextrum"], eng: ["right, right-hand"], fig: "adjective" },
{ latin: ["dico", "dicere", "dixi", "dictum"], eng: ["to say, speak"], fig: "verb", conjugation: "irregular" },
{ latin: ["dies", "diei"], eng: ["day"], fig: "noun", gender: "M", genitive: "diei", declension: "2" },
{ latin: ["differo", "differre", "distuli", "dilatum"], eng: ["to differ", "delay", "disperse"], fig: "verb", conjugation: "irregular" },
{ latin: ["difficilis", "difficile"], eng: ["difficult"], fig: "adjective" },
{ latin: ["digitus", "digiti"], eng: ["finger, toe"], fig: "noun", gender: "M", genitive: "digiti", declension: "2" },
{ latin: ["dignitas", "dignitatis"], eng: ["merit, prestige, dignity"], fig: "noun", gender: "F", genitive: "dignitatis", declension: "3" },
{ latin: ["dignus", "a", "um + abl."], eng: ["worthy, worthy of"], fig: "adjective" },
{ latin: ["diligens", "diligentis"], eng: ["diligent, careful"], fig: "adjective" },
{ latin: ["diligentia", "diligentiae f."], eng: ["diligencee, care", "frugality"], fig: "noun", genitive: "diligentiae f.", declension: "unknown" },
{ latin: ["diligo", "diligere", "dilexi", "dilectum"], eng: ["to esteem, love"], fig: "verb", conjugation: "irregular" },
{ latin: ["discedo", "discedere", "discessi", "discessum"], eng: ["to go away, depart"], fig: "verb", conjugation: "irregular" },
{ latin: ["discipula", "discipulae", "f."], eng: ["student"], fig: "female" },
{ latin: ["discipulus", "discipuli"], eng: ["student"], fig: "noun", gender: "M", genitive: "discipuli", declension: "2" },
{ latin: ["disco", "discere", "didici"], eng: ["to teach"], fig: "verb", conjugation: "irregular" },
{ latin: ["dissimilis", "dissimile"], eng: ["unlike, different, dissimilar"], fig: "adjective" },
{ latin: ["dives", "divitis (ditis)"], eng: ["rich"], fig: "adjective" },
{ latin: ["divitiae", "divitiarum"], eng: ["wealth, riches"], fig: "noun", gender: "F", genitive: "divitiarum", declension: "unknown" },
{ latin: ["do", "dare", "dedi", "datum"], eng: ["to give"], fig: "verb", conjugation: "irregular" },
{ latin: ["doceo", "docere", "docui", "doctum"], eng: ["to teach"], fig: "verb", conjugation: "irregular" },
{ latin: ["doctus", "a", "um"], eng: ["taught, learned, skilled"], fig: "adjective" },
{ latin: ["doleo", "dolere", "dolui", "doliturum"], eng: ["to grieve, suffer", "hurt, give pain"], fig: "verb", conjugation: "irregular" },
{ latin: ["dolor", "doloris"], eng: ["pain, grief"], fig: "noun", gender: "M", genitive: "doloris", declension: "3" },
{ latin: ["domi"], eng: ["at home"], fig: "adverb" },
{ latin: ["domina", "dominae"], eng: ["mistress, lady"], fig: "noun", gender: "F", genitive: "dominae", declension: "1" },
{ latin: ["dominus", "domini"], eng: ["master, lord"], fig: "noun", gender: "M", genitive: "domini", declension: "2" },
{ latin: ["domo"], eng: ["from home"], fig: "adverb" },
{ latin: ["domum"], eng: ["to home"], fig: "adverb" },
{ latin: ["domus", "domus"], eng: ["house, home"], fig: "noun", gender: "F", genitive: "domus", declension: "4" },
{ latin: ["donum", "doni"], eng: ["gift"], fig: "noun", gender: "N", genitive: "doni", declension: "2" },
{ latin: ["dormio", "dormire", "dormivi", "dormitum"], eng: ["to sleep"], fig: "verb", conjugation: "irregular" },
{ latin: ["dubito", "dubitare", "dubitavi", "dubitatum"], eng: ["to doubt, hesitate"], fig: "verb", conjugation: "irregular" },
{ latin: ["dubium", "dubii n"], eng: ["doubt, question"], fig: "noun", genitive: "dubii n", declension: "unknown" },
{ latin: ["dubius", "a", "um"], eng: ["doubtful, dubious, uncertain"], fig: "adjective" },
{ latin: ["duco", "ducere", "duxi", "ductum"], eng: ["to lead", "consider, regard"], fig: "verb", conjugation: "irregular" },
{ latin: ["dulcis", "dulce"], eng: ["sweet, pleasant, agreeable"], fig: "adjective" },
{ latin: ["duo", "duae", "duo"], eng: ["two"], fig: "adjective" },
{ latin: ["durus", "a", "um"], eng: ["hard, harsh, rough, stern, unfeeling"], fig: "adjective" },
{ latin: ["dux", "ducis"], eng: ["leader, guide, commander, general"], fig: "noun", gender: "M", genitive: "ducis", declension: "3" },
{ latin: ["educo", "educare", "educavi", "educatum"], eng: ["to bring up, educate", "bring out"], fig: "verb", conjugation: "irregular" },
{ latin: ["effero", "efferre", "extuli", "elatum"], eng: ["to carry out", "bring out", "raise"], fig: "verb", conjugation: "irregular" },
{ latin: ["egeo", "egere", "egui + abl."], eng: ["to need, lack, want"], fig: "verb", conjugation: "irregular" },
{ latin: ["ego", "mei"], eng: ["I"], fig: "pronoun" },
{ latin: ["egredior", "egredi", "egressus sum"], eng: ["to go out"], fig: "verb", conjugation: "irregular" },
{ latin: ["emo", "emere", "emi", "emptum"], eng: ["to buy", "gain, obtain"], fig: "verb", conjugation: "irregular" },
{ latin: ["eo", "ire", "ivi (ii)", "itum"], eng: ["to go"], fig: "verb", conjugation: "irregular" },
{ latin: ["equus", "equi"], eng: ["horse"], fig: "noun", gender: "M", genitive: "equi", declension: "2" },
{ latin: ["eripio", "eripere", "eripui", "ereptum"], eng: ["to snatch away, take away", "rescue"], fig: "verb", conjugation: "irregular" },
{ latin: ["erro", "errare", "erravi", "erratum"], eng: ["to wander, err, go astray"], fig: "verb", conjugation: "irregular" },
{ latin: ["est"], eng: ["is"], fig: "verb", conjugation: "irregular" },
{ latin: ["et"], eng: ["and"], fig: "conjunction" },
{ latin: ["ex (e) +abl."], eng: ["out of, from", "on account of"], fig: "preposition" },
{ latin: ["excipio", "excipere", "excepi", "exceptum"], eng: ["to take out, except", "take, receive, capture"], fig: "verb", conjugation: "irregular" },
{ latin: ["exemplum", "exempli n/"], eng: ["sample, specimen, representative", "model"], fig: "noun", genitive: "exempli n/", declension: "unknown" },
{ latin: ["exeo", "exire", "exii", "exitum"], eng: ["to go out, exit"], fig: "verb", conjugation: "irregular" },
{ latin: ["exercitus", "exercitus"], eng: ["army"], fig: "noun", gender: "M", genitive: "exercitus", declension: "4" },
{ latin: ["exigo", "exigere", "exegi", "exactum"], eng: ["to drive out, force out", "exact", "complete, perfect"], fig: "verb", conjugation: "irregular" },
{ latin: ["exiguus", "a", "um"], eng: ["small", "meager", "poor"], fig: "adjective" },
{ latin: ["exitium", "exitii"], eng: ["destruction, ruin"], fig: "noun", gender: "N", genitive: "exitii", declension: "2" },
{ latin: ["exorior", "exoriri", "exortus sum"], eng: ["to come out", "bring", "appear", "rise"], fig: "verb", conjugation: "irregular" },
{ latin: ["expello", "expellere", "expuli", "expulsum"], eng: ["to drive out, expel, banish"], fig: "verb", conjugation: "irregular" },
{ latin: ["experior", "experiri", "expertus sum"], eng: ["to try, test, experience"], fig: "verb", conjugation: "irregular" },
{ latin: ["expleo", "explere", "explevi", "expletum"], eng: ["to fill, fill up, complete"], fig: "verb", conjugation: "irregular" },
{ latin: ["explico", "explicare", "explicavi", "explicatum"], eng: ["to unfold, explain", "spread out, deploy"], fig: "verb", conjugation: "irregular" },
{ latin: ["expono", "exponere", "exposui", "expositum"], eng: ["to set forth, explain, expose"], fig: "verb", conjugation: "irregular" },
{ latin: ["exsilium", "exsilii"], eng: ["exile, banishment"], fig: "noun", gender: "N", genitive: "exsilii", declension: "2" },
{ latin: ["exspecto", "exspectare", "exspectavi", "exspectatum"], eng: ["to look for, expect, await"], fig: "verb", conjugation: "irregular" },
{ latin: ["fabula", "fabulae"], eng: ["story, tale, fable"], fig: "noun", gender: "F", genitive: "fabulae", declension: "1" },
{ latin: ["facile"], eng: ["easily"], fig: "adverb" },
{ latin: ["facilis", "facile"], eng: ["easy, agreeable"], fig: "adjective" },
{ latin: ["facio", "facere", "feci", "factum"], eng: ["to make, do, accomplish"], fig: "verb", conjugation: "irregular" },
{ latin: ["factum", "facti"], eng: ["deed, act"], fig: "noun", gender: "N", genitive: "facti", declension: "2" },
{ latin: ["fama", "famae"], eng: ["rumor, report", "fame", "reputation"], fig: "noun", gender: "F", genitive: "famae", declension: "1" },
{ latin: ["familia", "familiae"], eng: ["family, household"], fig: "noun", gender: "F", genitive: "familiae", declension: "1" },
{ latin: ["fateor", "fateri", "fassus sum"], eng: ["to confess, admit"], fig: "verb", conjugation: "irregular" },
{ latin: ["fatigo", "fatigare", "fatigavi", "fatigatum"], eng: ["to weary, tire out"], fig: "verb", conjugation: "irregular" },
{ latin: ["fatum", "fati"], eng: ["fate, death"], fig: "noun", gender: "N", genitive: "fati", declension: "2" },
{ latin: ["faveo", "favere", "favi", "fautum"], eng: ["to favor, befriend, support, back up"], fig: "verb", conjugation: "irregular" },
{ latin: ["felix", "felicis"], eng: ["lucky, fortunate, happy"], fig: "adjective" },
{ latin: ["femina", "feminae"], eng: ["woman"], fig: "noun", gender: "F", genitive: "feminae", declension: "1" },
{ latin: ["fenestra", "fenestrae"], eng: ["window"], fig: "noun", gender: "F", genitive: "fenestrae", declension: "1" },
{ latin: ["fero", "ferre", "tuli", "latum"], eng: ["to bear, carry, bring", "suffer, endure", "say, report"], fig: "verb", conjugation: "irregular" },
{ latin: ["ferox", "ferocis"], eng: ["fierce, savage"], fig: "adjective" },
{ latin: ["ferrum", "ferri"], eng: ["iron", "sword"], fig: "noun", gender: "N", genitive: "ferri", declension: "2" },
{ latin: ["fidelis", "fidele"], eng: ["faithful, loyal"], fig: "adjective" },
{ latin: ["fides", "fidei"], eng: ["faith, trust, fidelity, promise, guarantee"], fig: "noun", gender: "F", genitive: "fidei", declension: "2" },
{ latin: ["figura", "figurae f."], eng: ["shape, form, figure, image", "beauty"], fig: "noun", genitive: "figurae f.", declension: "unknown" },
{ latin: ["filia", "filiae"], eng: ["daughter"], fig: "noun", gender: "F", genitive: "filiae", declension: "1" },
{ latin: ["filius", "filii"], eng: ["son"], fig: "noun", gender: "M", genitive: "filii", declension: "2" },
{ latin: ["fines", "finium"], eng: ["boundaries, territory"], fig: "noun", gender: "M", genitive: "finium", declension: "unknown" },
{ latin: ["finis", "finis"], eng: ["end, limit, boundary, purpose"], fig: "noun", gender: "M", genitive: "finis", declension: "3" },
{ latin: ["fio", "fieri", "factus sum"], eng: ["to occur, happen, become", "be made, be done"], fig: "verb", conjugation: "irregular" },
{ latin: ["firmus", "a", "um"], eng: ["firm, strong, reliable"], fig: "adjective" },
{ latin: ["flamma", "flammae f."], eng: ["flame, blaze", "ardor", "object of love"], fig: "noun", genitive: "flammae f.", declension: "unknown" },
{ latin: ["flumen", "fluminis"], eng: ["river"], fig: "noun", gender: "N", genitive: "fluminis", declension: "3" },
{ latin: ["fluo", "fluere", "fluxi", "fluxum"], eng: ["to flow"], fig: "verb", conjugation: "irregular" },
{ latin: ["foedus", "foederis n."], eng: ["treaty, agreement, contract", "league"], fig: "noun", genitive: "foederis n.", declension: "unknown" },
{ latin: ["for", "fari", "fatus sum"], eng: ["to speak, talk, foretell"], fig: "verb", conjugation: "irregular" },
{ latin: ["foris"], eng: ["outdoors, outside"], fig: "adverb" },
{ latin: ["forma", "formae"], eng: ["form, shape, beauty"], fig: "noun", gender: "F", genitive: "formae", declension: "1" },
{ latin: ["fortis", "forte"], eng: ["strong, brave"], fig: "adjective" },
{ latin: ["fortuna", "fortunae"], eng: ["fortune, luck"], fig: "noun", gender: "F", genitive: "fortunae", declension: "1" },
{ latin: ["fortunatus", "a", "um"], eng: ["fortunate"], fig: "adjective" },
{ latin: ["forum", "fori"], eng: ["marketplace, forum"], fig: "noun", gender: "N", genitive: "fori", declension: "2" },
{ latin: ["foveo", "fovere", "fovi", "fotum"], eng: ["to cherish"], fig: "verb", conjugation: "irregular" },
{ latin: ["frater", "fratris"], eng: ["brother"], fig: "noun", gender: "M", genitive: "fratris", declension: "3" },
{ latin: ["frigidus", "a", "um"], eng: ["cold, cool, chilly, frigid", "lifeless"], fig: "adjective" },
{ latin: ["fructus", "fructus"], eng: ["fruit"], fig: "noun", gender: "M", genitive: "fructus", declension: "4" },
{ latin: ["fuga", "fugae f."], eng: ["flight", "escape", "exhile"], fig: "noun", genitive: "fugae f.", declension: "unknown" },
{ latin: ["fugio", "fugere", "fugi", "fugiturum"], eng: ["to flee, hurry away"], fig: "verb", conjugation: "irregular" },
{ latin: ["fulgeo", "fulgere", "fulsi"], eng: ["to flash, shine", "glow, gleam"], fig: "verb", conjugation: "irregular" },
{ latin: ["fulgor", "fulgoris n."], eng: ["lightening, flash", "brightness, glory"], fig: "noun", genitive: "fulgoris n.", declension: "unknown" },
{ latin: ["furtim"], eng: ["stealthily, secretly"], fig: "adverb" },
{ latin: ["gaudeo", "gaudere", "gavisus sum"], eng: ["to be glad, rejoice"], fig: "verb", conjugation: "irregular" },
{ latin: ["gaudium", "gaudii n."], eng: ["joy"], fig: "noun", genitive: "gaudii n.", declension: "unknown" },
{ latin: ["geminus", "a", "um"], eng: ["twin"], fig: "adjective" },
{ latin: ["gens", "gentis"], eng: ["clan, race, nation, people"], fig: "noun", gender: "F", genitive: "gentis", declension: "3" }, 
{ latin: ["genu", "genus"], eng: ["knee"], fig: "noun", gender: "N", genitive: "genus", declension: "4" },
{ latin: ["genus", "generis"], eng: ["origin, kind, sort, class"], fig: "noun", gender: "N", genitive: "generis", declension: "3" },
{ latin: ["gero", "gerere", "gessi", "gestum"], eng: ["to carry, manage, conduct", "accomplish"], fig: "verb", conjugation: "irregular" },
{ latin: ["gladius", "gladii m."], eng: ["sword"], fig: "noun", genitive: "gladii m.", declension: "unknown" },
{ latin: ["gloria", "gloriae"], eng: ["glory, fame"], fig: "noun", gender: "F", genitive: "gloriae", declension: "1" },
{ latin: ["gracilis", "gracile"], eng: ["slender, thin", "poor"], fig: "adjective" },
{ latin: ["gradior", "gradi", "gressus sum"], eng: ["to walk, go, advance"], fig: "verb", conjugation: "irregular" },
{ latin: ["gratus", "a", "um"], eng: ["pleasing, agreeable", "grateful"], fig: "adjective" },
{ latin: ["gravis", "grave"], eng: ["heavy, serious, important, grievous"], fig: "adjective" },
{ latin: ["habeo", "habere", "habui", "habitum"], eng: ["to have, hold, possess"], fig: "verb", conjugation: "irregular" },
{ latin: ["hasta", "hastae"], eng: ["spear"], fig: "noun", gender: "F", genitive: "hastae", declension: "1" },
{ latin: ["hic", "haec", "hoc"], eng: ["this"], fig: "adjective" },
{ latin: ["hodie"], eng: ["today"], fig: "adverb" },
{ latin: ["homo", "hominis"], eng: ["man, human"], fig: "noun", gender: "M", genitive: "hominis", declension: "3" },
{ latin: ["honestus", "a", "um"], eng: ["distinguished, reputable, respected", "worthy"], fig: "adjective" },
{ latin: ["honor", "honoris"], eng: ["honor, esteem", "public office"], fig: "noun", gender: "M", genitive: "honoris", declension: "3" },
{ latin: ["hora", "horae"], eng: ["hour"], fig: "noun", gender: "F", genitive: "horae", declension: "1" },
{ latin: ["horridus", "a", "um"], eng: ["wild, frightful, rough", "unkempt"], fig: "adjective" },
{ latin: ["hortor", "hortari", "hortatus sum"], eng: ["to encourage, urge"], fig: "verb", conjugation: "irregular" },
{ latin: ["hospes", "hospitis m."], eng: ["host", "guest, visitor, stranger"], fig: "noun", genitive: "hospitis m.", declension: "unknown" },
{ latin: ["hostis", "hostis"], eng: ["an enemy", "pl., the enemy"], fig: "noun", gender: "M", genitive: "hostis", declension: "3" },
{ latin: ["humanus", "a", "um"], eng: ["human"], fig: "adjective" },
{ latin: ["humilis", "humile"], eng: ["lowly, humble"], fig: "adjective" },
{ latin: ["humus", "humi"], eng: ["ground, earth, soil"], fig: "noun", gender: "F", genitive: "humi", declension: "2" },
{ latin: ["iaceo", "iacere", "iacui"], eng: ["to lie, lie prostrate, lie dead"], fig: "verb", conjugation: "irregular" },
{ latin: ["iacio", "iacere", "ieci", "iactum"], eng: ["to throw, hurl"], fig: "verb", conjugation: "irregular" },
{ latin: ["ianua", "ianuae"], eng: ["door"], fig: "noun", gender: "F", genitive: "ianuae", declension: "1" },
{ latin: ["ibi"], eng: ["there"], fig: "adverb" },
{ latin: ["idem", "eadem", "idem"], eng: ["the same"], fig: "adjective" },
{ latin: ["idoneus", "a", "um"], eng: ["suitable, fit, appropriate"], fig: "adjective" },
{ latin: ["ignis", "ignis"], eng: ["fire"], fig: "noun", gender: "M", genitive: "ignis", declension: "3" },
{ latin: ["ignosco", "ignoscere", "ignovi", "ignotum + dat."], eng: ["to grant pardon to, forgive"], fig: "verb", conjugation: "irregular" },
{ latin: ["ille", "illa", "illud"], eng: ["that"], fig: "adjective" },
{ latin: ["immortalis", "immortale"], eng: ["immortal"], fig: "adjective" },
{ latin: ["impedio", "impedire", "impedivi", "impeditum"], eng: ["to impede, hinder, prevent"], fig: "verb", conjugation: "irregular" },
{ latin: ["imperator", "imperatoris"], eng: ["general, commander-in-chief"], fig: "noun", gender: "M", genitive: "imperatoris", declension: "3" },
{ latin: ["imperium", "imperii"], eng: ["power to command, authority, command, control"], fig: "noun", gender: "N", genitive: "imperii", declension: "2" },
{ latin: ["impero", "imperare", "imperavi", "imperatum + dat."], eng: ["to give orders to, command"], fig: "verb", conjugation: "irregular" },
{ latin: ["impius", "a", "um"], eng: ["wicked, impious, irreverent"], fig: "adjective" },
{ latin: ["impleo", "implere", "implevi", "impletum"], eng: ["to fill up, satisfy", "finish"], fig: "verb", conjugation: "irregular" },
{ latin: ["in + abl."], eng: ["in, on"], fig: "preposition" },
{ latin: ["in + acc."], eng: ["into, toward", "against"], fig: "preposition" },
{ latin: ["incertus", "a", "um"], eng: ["uncertain, doubtful"], fig: "adjective" },
{ latin: ["incipio", "incipere", "incepi", "inceptum"], eng: ["to begin"], fig: "verb", conjugation: "irregular" },
{ latin: ["incola", "incolae m."], eng: ["inhabitant"], fig: "noun", genitive: "incolae m.", declension: "unknown" },
{ latin: ["incolo", "incolere", "incolui"], eng: ["to live, dwell", "to inhabit"], fig: "verb", conjugation: "irregular" },
{ latin: ["indignus", "a", "um"], eng: ["unworthy, undeserving, shameful"], fig: "noun", genitive: "a", declension: "unknown" },
{ latin: ["ineo", "inire", "inii", "initum"], eng: ["to go in, enter"], fig: "verb", conjugation: "irregular" },
{ latin: ["infelix", "infelicis"], eng: ["unfortunate, unhappy, wretched"], fig: "adjective" },
{ latin: ["infero", "inferre", "intuli", "inlatum"], eng: ["bring in, import", "inflict"], fig: "verb", conjugation: "irregular" },
{ latin: ["infirmus", "a", "um"], eng: ["not strong, weak, feeble"], fig: "adjective" },
{ latin: ["ingenium", "ingenii"], eng: ["nature, innate talent"], fig: "noun", gender: "N", genitive: "ingenii", declension: "2" },
{ latin: ["ingens", "ingentis"], eng: ["huge"], fig: "adjective" },
{ latin: ["ingredior", "ingredi", "ingressus sum"], eng: ["advance, walk", "enter, go into", "begin"], fig: "verb", conjugation: "irregular" },
{ latin: ["inimicitia", "inimicitiae f."], eng: ["unfriendliness, enmity, hostility"], fig: "noun", genitive: "inimicitiae f.", declension: "unknown" },
{ latin: ["inimicus", "a", "um"], eng: ["enemy, foe"], fig: "adjective" },
{ latin: ["initium", "initii"], eng: ["beginning, commencement"], fig: "noun", gender: "N", genitive: "initii", declension: "2" },
{ latin: ["iniuria", "iniuriae"], eng: ["injustice, injury, wrong"], fig: "noun", gender: "F", genitive: "iniuriae", declension: "1" },
{ latin: ["insidiae", "insidiarum"], eng: ["ambush, plot, treachery"], fig: "noun", gender: "F", genitive: "insidiarum", declension: "unknown" },
{ latin: ["instituo", "instituere", "institui", "institutum"], eng: ["to set up, establish, make, institute", "build"], fig: "verb", conjugation: "irregular" },
{ latin: ["insula", "insulae"], eng: ["island"], fig: "noun", gender: "F", genitive: "insulae", declension: "1" },
{ latin: ["intellego", "intellegere", "intellexi", "intellectum"], eng: ["to understand"], fig: "verb", conjugation: "irregular" },
{ latin: ["intendo", "intendere", "intendi", "intentum"], eng: ["to hold out", "stretch, strain, exert"], fig: "verb", conjugation: "irregular" },
{ latin: ["inter + acc."], eng: ["between, among"], fig: "preposition" },
{ latin: ["interest", "interesse", "interfuit"], eng: ["it concerns, it interests"], fig: "verb", conjugation: "irregular" },
{ latin: ["interficio", "interficere", "interfeci", "interfectum"], eng: ["to kill, murder"], fig: "verb", conjugation: "irregular" },
{ latin: ["invado", "invadere", "invasi", "invasum"], eng: ["enter, attempt", "invade"], fig: "verb", conjugation: "irregular" },
{ latin: ["invenio", "invenire", "inveni", "inventum"], eng: ["to come upon, find"], fig: "verb", conjugation: "irregular" },
{ latin: ["invideo", "invidere", "invidi", "invisum"], eng: ["to look at with envy, envy, be jealous of"], fig: "verb", conjugation: "irregular" },
{ latin: ["invidia", "invidiae"], eng: ["envy, jealousy, hatred"], fig: "noun", gender: "F", genitive: "invidiae", declension: "1" },
{ latin: ["invito", "invitare", "invitavi", "invitatum"], eng: ["to invite, summon"], fig: "verb", conjugation: "irregular" },
{ latin: ["ipse", "ipsa", "ipsum"], eng: ["-self"], fig: "intensive" },
{ latin: ["ira", "irae"], eng: ["anger, ire"], fig: "noun", gender: "F", genitive: "irae", declension: "1" },
{ latin: ["iratus", "a", "um"], eng: ["angry"], fig: "adjective" },
{ latin: ["iter", "itineris"], eng: ["road, route, journey"], fig: "noun", gender: "N", genitive: "itineris", declension: "3" },
{ latin: ["iterum"], eng: ["again"], fig: "adverb" },
{ latin: ["iubeo", "iubere", "iussi", "iussum"], eng: ["to bid, order, command"], fig: "verb", conjugation: "irregular" },
{ latin: ["iucundus", "a", "um"], eng: ["pleasant, delightful, agreeable"], fig: "adjective" },
{ latin: ["iudex", "iudicis"], eng: ["judge, juror"], fig: "noun", gender: "M", genitive: "iudicis", declension: "3" },
{ latin: ["iudicium", "iudicii"], eng: ["judgement, decision, opinion", "trial"], fig: "noun", gender: "N", genitive: "iudicii", declension: "2" },
{ latin: ["iungo", "iungere", "iunxi", "iunctum"], eng: ["to join"], fig: "verb", conjugation: "irregular" },
{ latin: ["ius", "iuris"], eng: ["right, justice, law"], fig: "noun", gender: "N", genitive: "iuris", declension: "3" },
{ latin: ["iussum", "iussi n."], eng: ["command, order"], fig: "noun", genitive: "iussi n.", declension: "unknown" },
{ latin: ["iustus", "a", "um"], eng: ["just, right"], fig: "adjective" },
{ latin: ["iuvo", "iuvare", "iuvi", "iutum"], eng: ["to help"], fig: "verb", conjugation: "irregular" },
{ latin: ["labor", "labi", "lapsus sum"], eng: ["slip, slip and fall", "slide"], fig: "verb", conjugation: "irregular" },
{ latin: ["labor", "laboris"], eng: ["work, labor"], fig: "noun", gender: "M", genitive: "laboris", declension: "3" },
{ latin: ["laboro", "laborare", "laboravi", "laboratum"], eng: ["to labor, be in distress"], fig: "verb", conjugation: "irregular" },
{ latin: ["lacrima", "lacrimae"], eng: ["tear"], fig: "noun", gender: "F", genitive: "lacrimae", declension: "1" },
{ latin: ["laetus", "a", "um"], eng: ["happy, cheerful"], fig: "adjective" },
{ latin: ["Latinus", "a", "um"], eng: ["Latin"], fig: "adjective" },
{ latin: ["laudo", "laudare", "laudavi", "laudatum"], eng: ["to praise"], fig: "verb", conjugation: "irregular" },
{ latin: ["laus", "laudis"], eng: ["praise"], fig: "noun", gender: "F", genitive: "laudis", declension: "3" },
{ latin: ["lector", "lectoris"], eng: ["reader"], fig: "noun", gender: "M", genitive: "lectoris", declension: "3" },
{ latin: ["lectrix", "lectricis", "f."], eng: ["reader"], fig: "female" },
{ latin: ["legatus", "legati m."], eng: ["legate, envoy"], fig: "noun", genitive: "legati m.", declension: "unknown" },
{ latin: ["lego", "legere", "legi", "lectum"], eng: ["to pick out, choose", "read"], fig: "verb", conjugation: "irregular" },
{ latin: ["levis", "leve"], eng: ["light, slight, easy, trivial"], fig: "adjective" },
{ latin: ["lex", "legis"], eng: ["law, statute"], fig: "noun", gender: "F", genitive: "legis", declension: "3" },
{ latin: ["libellus", "libelli"], eng: ["little book"], fig: "noun", gender: "M", genitive: "libelli", declension: "2" },
{ latin: ["liber", "libera", "liberum"], eng: ["free"], fig: "adjective" },
{ latin: ["liber", "libri"], eng: ["book"], fig: "noun", gender: "M", genitive: "libri", declension: "2" },
{ latin: ["liberalis", "liberale"], eng: ["relating to a free person, decent, generous"], fig: "adjective" },
{ latin: ["libero", "liberare", "liberavi", "liberatum"], eng: ["to free, liberate"], fig: "verb", conjugation: "irregular" },
{ latin: ["libertas", "libertatis"], eng: ["liberty, freedom"], fig: "noun", gender: "F", genitive: "libertatis", declension: "3" },
{ latin: ["libo", "libare", "libavi", "libatum"], eng: ["to pour a libation", "to pour ritually", "to sip"], fig: "verb", conjugation: "irregular" },
{ latin: ["licet", "licere", "licuit"], eng: ["it is permitted, one may"], fig: "verb", conjugation: "irregular" },
{ latin: ["limen", "liminis"], eng: ["threshold"], fig: "noun", gender: "N", genitive: "liminis", declension: "3" },
{ latin: ["lingua", "linguae"], eng: ["tongue", "language"], fig: "noun", gender: "F", genitive: "linguae", declension: "1" },
{ latin: ["littera", "litterae", "f."], eng: ["letter"], fig: "of alphabet" },
{ latin: ["litterae", "litterarum"], eng: ["letter, literature"], fig: "noun", gender: "F", genitive: "litterarum", declension: "unknown" },
{ latin: ["litus", "litoris"], eng: ["shore, coast"], fig: "noun", gender: "N", genitive: "litoris", declension: "3" },
{ latin: ["loca", "locorum"], eng: ["places, region"], fig: "noun", gender: "N", genitive: "locorum", declension: "unknown" },
{ latin: ["locus", "loci", "m."], eng: ["place", "passage"], fig: "in literature" },
{ latin: ["longus", "a", "um"], eng: ["long", "a long period of time"], fig: "adjective" },
{ latin: ["loquor", "loqui", "locutus sum"], eng: ["to say, speak, tell"], fig: "verb", conjugation: "irregular" },
{ latin: ["ludus", "ludi"], eng: ["game, sport", "school"], fig: "noun", gender: "M", genitive: "ludi", declension: "2" },
{ latin: ["lumen", "luminis n."], eng: ["light"], fig: "noun", genitive: "luminis n.", declension: "unknown" },
{ latin: ["luna", "lunae"], eng: ["moon"], fig: "noun", gender: "F", genitive: "lunae", declension: "1" },
{ latin: ["lux", "lucis"], eng: ["light", "daylight"], fig: "noun", gender: "F", genitive: "lucis", declension: "3" },
{ latin: ["magister", "magistri", "m."], eng: ["teacher"], fig: "male" },
{ latin: ["magistra", "magistrae", "f."], eng: ["teacher"], fig: "female" },
{ latin: ["magnanimus", "a", "um"], eng: ["great-hearted, brave, magnanimous"], fig: "adjective" },
{ latin: ["magnus", "a", "um"], eng: ["great, large"], fig: "adjective" },
{ latin: ["maior", "maius"], eng: ["greater, older"], fig: "adjective" },
{ latin: ["maiores", "maiorum"], eng: ["ancestors"], fig: "noun", genitive: "maiorum", declension: "unknown" },
{ latin: ["male"], eng: ["badly"], fig: "adverb" },
{ latin: ["malus", "a", "um"], eng: ["bad, wicked, evil"], fig: "adjective" },
{ latin: ["maneo", "manere", "mansi", "mansum"], eng: ["to remain, stay"], fig: "verb", conjugation: "irregular" },
{ latin: ["manus", "manus"], eng: ["hand", "team, band of soldiers"], fig: "noun", gender: "F", genitive: "manus", declension: "4" },
{ latin: ["mare", "maris"], eng: ["sea"], fig: "noun", gender: "N", genitive: "maris", declension: "3" },
{ latin: ["mater", "matris"], eng: ["mother"], fig: "noun", gender: "M", genitive: "matris", declension: "3" },
{ latin: ["maximus", "a", "um"], eng: ["greatest"], fig: "adjective" },
{ latin: ["medica", "medicae"], eng: ["doctor"], fig: "noun", gender: "F", genitive: "medicae", declension: "1" },
{ latin: ["medicus", "medici"], eng: ["doctor"], fig: "noun", gender: "M", genitive: "medici", declension: "2" },
{ latin: ["mediocris", "mediocre"], eng: ["ordinary, moderate, mediocre"], fig: "adjective" },
{ latin: ["medius", "a", "um"], eng: ["middle"], fig: "adjective" },
{ latin: ["melior", "melius"], eng: ["better"], fig: "adjective" },
{ latin: ["memini", "meminisse"], eng: ["to remember"], fig: "verb", conjugation: "irregular" },
{ latin: ["memor", "memoris"], eng: ["rememgering, mindful"], fig: "adjective" },
{ latin: ["memoria", "memoriae"], eng: ["memory"], fig: "noun", gender: "F", genitive: "memoriae", declension: "1" },
{ latin: ["mens", "mentis"], eng: ["mind, thought", "intention"], fig: "noun", gender: "F", genitive: "mentis", declension: "3" },
{ latin: ["mensa", "mensae"], eng: ["table"], fig: "noun", gender: "F", genitive: "mensae", declension: "1" },
{ latin: ["merus", "a", "um"], eng: ["pure, undiluted"], fig: "adjective" },
{ latin: ["meta", "metae"], eng: ["turning post, goal"], fig: "noun", gender: "F", genitive: "metae", declension: "1" },
{ latin: ["metus", "metus"], eng: ["fear, anxiety"], fig: "noun", gender: "M", genitive: "metus", declension: "4" },
{ latin: ["meus", "a", "um"], eng: ["my"], fig: "adjective" },
{ latin: ["miles", "militis"], eng: ["soldier"], fig: "noun", gender: "M", genitive: "militis", declension: "3" },
{ latin: ["mille", "milia"], eng: ["thousand"], fig: "adjective" },
{ latin: ["minimus", "a", "um"], eng: ["smallest, least"], fig: "adjective" },
{ latin: ["minor", "minus"], eng: ["smaller, less"], fig: "adjective" },
{ latin: ["minuo", "minuere", "minui", "minutum"], eng: ["to lessen, diminish"], fig: "verb", conjugation: "irregular" },
{ latin: ["mirabilis", "mirabile"], eng: ["amazing, wondrous, remarkable"], fig: "adjective" },
{ latin: ["miror", "mirari", "miratus sum"], eng: ["to marvel at, admire, wonder"], fig: "verb", conjugation: "irregular" },
{ latin: ["misceo", "miscere", "miscui", "mixtum"], eng: ["to mix"], fig: "verb", conjugation: "irregular" },
{ latin: ["miser", "misera", "miserum"], eng: ["miserable, wretched"], fig: "adjective" },
{ latin: ["misereor", "misereri", "miseritus sum"], eng: ["to pity, feel sorry for", "view with compassion"], fig: "verb", conjugation: "irregular" },
{ latin: ["miseret", "miserere", "miserit"], eng: ["it distresses/grieves me"], fig: "verb", conjugation: "irregular" },
{ latin: ["mitto", "mittere", "misi", "missum"], eng: ["to send"], fig: "verb", conjugation: "irregular" },
{ latin: ["modus", "modi"], eng: ["measure, bound, limit", "manner, method, mode"], fig: "noun", gender: "M", genitive: "modi", declension: "2" },
{ latin: ["moenia", "moenium"], eng: ["city walls, ramparts"], fig: "noun", gender: "N", genitive: "moenium", declension: "unknown" },
{ latin: ["molior", "moliri", "molitus sum"], eng: ["to work at, build, undertake, plan"], fig: "verb", conjugation: "irregular" },
{ latin: ["mollio", "mollire", "mollivi", "mollitum"], eng: ["to soften", "make calm"], fig: "verb", conjugation: "irregular" },
{ latin: ["moneo", "monere", "monui", "monitum"], eng: ["to warn, advise"], fig: "verb", conjugation: "irregular" },
{ latin: ["mons", "montis"], eng: ["mountain"], fig: "noun", gender: "M", genitive: "montis", declension: "3" },
{ latin: ["monstro", "monstrare", "monstravi", "monstratum"], eng: ["to show", "point out, reveal", "advise, teach"], fig: "verb", conjugation: "irregular" },
{ latin: ["monumentum", "monumenti"], eng: ["monument"], fig: "noun", gender: "N", genitive: "monumenti", declension: "2" },
{ latin: ["mora", "morae"], eng: ["delay"], fig: "noun", gender: "F", genitive: "morae", declension: "1" },
{ latin: ["morbus", "morbi"], eng: ["disease, illness"], fig: "noun", gender: "M", genitive: "morbi", declension: "2" },
{ latin: ["morior", "mori", "mortuus sum"], eng: ["to die"], fig: "verb", conjugation: "irregular" },
{ latin: ["moror", "morari", "moratus sum"], eng: ["to delay", "stay, stay behind", "devote attention to"], fig: "verb", conjugation: "irregular" },
{ latin: ["mors", "mortis"], eng: ["death"], fig: "noun", gender: "F", genitive: "mortis", declension: "3" },
{ latin: ["mortalis", "mortale"], eng: ["mortal"], fig: "adjective" },
{ latin: ["mortuus", "a", "um"], eng: ["dead"], fig: "adjective" },
{ latin: ["mos", "moris"], eng: ["habit, custom, manner", "pl., character"], fig: "noun", gender: "M", genitive: "moris", declension: "3" },
{ latin: ["moveo", "movere", "movi", "motum"], eng: ["to move", "affect"], fig: "verb", conjugation: "irregular" },
{ latin: ["mulier", "mulieris"], eng: ["woman"], fig: "noun", gender: "F", genitive: "mulieris", declension: "3" },
{ latin: ["multum"], eng: ["much"], fig: "adverb" },
{ latin: ["multus", "a", "um"], eng: ["much, many"], fig: "adjective" },
{ latin: ["mundus", "mundi"], eng: ["world, universe"], fig: "noun", gender: "M", genitive: "mundi", declension: "2" },
{ latin: ["munio", "munire", "munivi", "munitum"], eng: ["to fortify", "strengthen", "protect, defend", "build"], fig: "verb", conjugation: "irregular" },
{ latin: ["muto", "mutare", "mutavi", "mutatum"], eng: ["to change, alter, exchange"], fig: "verb", conjugation: "irregular" },
{ latin: ["narro", "narrare", "narravi", "narratum"], eng: ["to tell, report", "narrate"], fig: "verb", conjugation: "irregular" },
{ latin: ["nascor", "nasci", "natus sum"], eng: ["to be born", "spring forth, arise"], fig: "verb", conjugation: "irregular" },
{ latin: ["nasus", "nasi"], eng: ["nose"], fig: "noun", gender: "M", genitive: "nasi", declension: "2" },
{ latin: ["nata", "natae"], eng: ["daughter"], fig: "noun", gender: "F", genitive: "natae", declension: "1" },
{ latin: ["natura", "naturae"], eng: ["nature"], fig: "noun", gender: "F", genitive: "naturae", declension: "1" },
{ latin: ["natus", "nati m."], eng: ["son, child"], fig: "noun", genitive: "nati m.", declension: "unknown" },
{ latin: ["nauta", "nautae"], eng: ["sailor"], fig: "noun", gender: "M", genitive: "nautae", declension: "1" },
{ latin: ["navigo", "navigare", "navigavi", "navigatum"], eng: ["to sail"], fig: "verb", conjugation: "irregular" },
{ latin: ["navis", "navis"], eng: ["ship, boat"], fig: "noun", gender: "F", genitive: "navis", declension: "3" },
{ latin: ["ne"], eng: ["not", "in order that?not, that?not", "lest"], fig: "conjunction" },
{ latin: ["necesse"], eng: ["necessary, inevitable"], fig: "adjective" },
{ latin: ["neco", "necare", "necavi", "necatum"], eng: ["to murder, kill"], fig: "verb", conjugation: "irregular" },
{ latin: ["neglego", "neglegere", "neglexi", "neglectum"], eng: ["to neglect"], fig: "verb", conjugation: "irregular" },
{ latin: ["nego", "negare", "negavi", "negatum"], eng: ["to deny, say not"], fig: "verb", conjugation: "irregular" },
{ latin: ["nemus", "nemoris n."], eng: ["wood, forest"], fig: "noun", genitive: "nemoris n.", declension: "unknown" },
{ latin: ["nepos", "nepotis"], eng: ["grandson, descendant"], fig: "noun", gender: "M", genitive: "nepotis", declension: "3" },
{ latin: ["nescio", "nescire", "nescivi", "nescitum"], eng: ["not to know, be ignorant"], fig: "verb", conjugation: "irregular" },
{ latin: ["neuter", "neutra", "neutrum"], eng: ["neither"], fig: "adjective" },
{ latin: ["nihil"], eng: ["nothing"], fig: "noun" },
{ latin: ["nihilum", "nihili n."], eng: ["nothing"], fig: "noun", genitive: "nihili n.", declension: "unknown" },
{ latin: ["nimis"], eng: ["too, too much"], fig: "adverb" },
{ latin: ["nimium"], eng: ["too, too much"], fig: "adverb" },
{ latin: ["nisi"], eng: ["if ? not", "unless"], fig: "conjunction" },
{ latin: ["noceo", "nocere", "nocui", "nocitum + dat."], eng: ["to do harm to, harm, injure"], fig: "verb", conjugation: "irregular" },
{ latin: ["nolo", "nolle", "nolui"], eng: ["to not?wish, be unwilling"], fig: "verb", conjugation: "irregular" },
{ latin: ["nomen", "nominis"], eng: ["name"], fig: "noun", gender: "N", genitive: "nominis", declension: "3" },
{ latin: ["nosco", "noscere"], eng: ["to get to know", "learn, find out", "recognize"], fig: "verb", conjugation: "irregular" },
{ latin: ["noster", "nostra", "nostrum"], eng: ["our"], fig: "adjective" },
{ latin: ["notus", "a", "um"], eng: ["well known, familiar", "esteemed"], fig: "adjective" },
{ latin: ["novus", "a", "um"], eng: ["new", "last"], fig: "adjective" },
{ latin: ["nox", "noctis"], eng: ["night"], fig: "noun", gender: "F", genitive: "noctis", declension: "3" },
{ latin: ["noxa", "noxae f."], eng: ["harm, injury"], fig: "noun", genitive: "noxae f.", declension: "unknown" },
{ latin: ["nubes", "nubis"], eng: ["cloud"], fig: "noun", gender: "F", genitive: "nubis", declension: "3" },
{ latin: ["nubo", "nubere", "nupsi", "nuptum"], eng: ["to cover, veil", "to be married to, marry"], fig: "+ dat." },
{ latin: ["nullus", "a", "um"], eng: ["no, none"], fig: "adjective" },
{ latin: ["numen", "numinis n."], eng: ["divinity, divine will"], fig: "noun", genitive: "numinis n.", declension: "unknown" },
{ latin: ["numerus", "numeri"], eng: ["number"], fig: "noun", gender: "M", genitive: "numeri", declension: "2" },
{ latin: ["nunc"], eng: ["now"], fig: "adverb" },
{ latin: ["nuntio", "nuntiare", "nuntiavi", "nuntiatum"], eng: ["to announce, report, relate"], fig: "verb", conjugation: "irregular" },
{ latin: ["nutrix", "nutricis f."], eng: ["nurse"], fig: "noun", genitive: "nutricis f.", declension: "unknown" },
{ latin: ["ob"], eng: [""], fig: "with Acc." },
{ latin: ["obeo", "obire", "obii", "obitum"], eng: ["to go up against, meet", "die"], fig: "verb", conjugation: "irregular" },
{ latin: ["obitus", "obitus m"], eng: ["downfall, death, setting"], fig: "of the sun" },
{ latin: ["oblecto", "oblectare", "oblectavi", "oblectatum"], eng: ["to please, amuse, delight", "pass time pleasantly"], fig: "verb", conjugation: "irregular" },
{ latin: ["obliviscor", "oblivisci", "oblitus sum"], eng: ["to forget"], fig: "verb", conjugation: "irregular" },
{ latin: ["obsto", "obstare", "obstiti", "obstatum"], eng: ["to oppose, hinder"], fig: "verb", conjugation: "irregular" },
{ latin: ["occasio", "occasionis"], eng: ["occasion, opportunity"], fig: "noun", gender: "F", genitive: "occasionis", declension: "3" },
{ latin: ["occido", "occidere", "occidi", "occasum"], eng: ["to fall down", "die", "set"], fig: "verb", conjugation: "irregular" },
{ latin: ["occulte"], eng: ["secretly"], fig: "adverb" },
{ latin: ["oculus", "oculi"], eng: ["eye"], fig: "noun", gender: "M", genitive: "oculi", declension: "2" },
{ latin: ["odi", "odisse", "osurum"], eng: ["to hate"], fig: "verb", conjugation: "irregular" },
{ latin: ["odium", "odii"], eng: ["hatred"], fig: "noun", gender: "N", genitive: "odii", declension: "2" },
{ latin: ["offero", "offerre", "obtuli", "oblatum"], eng: ["to offer"], fig: "verb", conjugation: "irregular" },
{ latin: ["officium", "officii"], eng: ["duty, service"], fig: "noun", gender: "N", genitive: "officii", declension: "2" },
{ latin: ["omnis", "omne"], eng: ["every, all"], fig: "adjective" },
{ latin: ["opinio", "opinionis f."], eng: ["opinion"], fig: "noun", genitive: "opinionis f.", declension: "unknown" },
{ latin: ["opinor", "opinari", "opinatus sum"], eng: ["to suppose"], fig: "verb", conjugation: "irregular" },
{ latin: ["oportet", "oportere", "oportuit"], eng: ["it is proper, right, necessary"], fig: "verb", conjugation: "irregular" },
{ latin: ["oppidum", "oppidi n."], eng: ["town"], fig: "noun", genitive: "oppidi n.", declension: "unknown" },
{ latin: ["opprimo", "opprimere", "oppressi", "oppressum"], eng: ["to suppress, overwhelm, overpower, check"], fig: "verb", conjugation: "irregular" },
{ latin: ["oppugno", "oppugnare", "oppugnavi", "oppugnatum"], eng: ["to fight against, attack, assault, assail"], fig: "verb", conjugation: "irregular" },
{ latin: ["ops", "opis"], eng: ["help, aid", "pl., resources, power, wealth"], fig: "noun", gender: "F", genitive: "opis", declension: "3" },
{ latin: ["optimus", "a", "um"], eng: ["best"], fig: "adjective" },
{ latin: ["opto", "optare", "optavi", "optatum"], eng: ["to choose, select", "wish, desire"], fig: "verb", conjugation: "irregular" },
{ latin: ["opus", "operis"], eng: ["work, task", "deed, accomplishment"], fig: "noun", gender: "N", genitive: "operis", declension: ",3" },
{ latin: ["oratio", "orationis"], eng: ["speech"], fig: "noun", gender: "F", genitive: "orationis", declension: "3" },
{ latin: ["orator", "oratoris"], eng: ["orator, speaker"], fig: "noun", gender: "M", genitive: "oratoris", declension: "3" },
{ latin: ["orbis", "orbis n."], eng: ["circle, territory", "region"], fig: "noun", genitive: "orbis n.", declension: "unknown" },
{ latin: ["orior", "oriri", "ortus sum"], eng: ["to rise, arise", "spring from, appear"], fig: "verb", conjugation: "irregular" },
{ latin: ["orno", "ornare", "ornavi", "ornatum"], eng: ["to equip, furnish, adorn"], fig: "verb", conjugation: "irregular" },
{ latin: ["oro", "orare", "oravi", "oratum"], eng: ["to speak, plead", "beg, beseech, entreat"], fig: "verb", conjugation: "irregular" },
{ latin: ["ortus", "ortus m."], eng: ["rise, origin", "birth", "source"], fig: "noun", genitive: "ortus m.", declension: "unknown" },
{ latin: ["os", "oris"], eng: ["mouth"], fig: "noun", gender: "N", genitive: "oris", declension: "3" },
{ latin: ["osculum", "osculi"], eng: ["kiss"], fig: "noun", gender: "N", genitive: "osculi", declension: "2" },
{ latin: ["ostendo", "ostendere", "ostendi", "ostentum"], eng: ["to exhibit, show, display"], fig: "verb", conjugation: "irregular" },
{ latin: ["otium", "otii"], eng: ["leisure, peace"], fig: "noun", gender: "N", genitive: "otii", declension: "2" },
{ latin: ["paene"], eng: ["almost"], fig: "adverb" },
{ latin: ["paenitet", "paenitere", "paenituit"], eng: ["it displeases, makes angry, makes sorry"], fig: "verb", conjugation: "irregular" },
{ latin: ["par", "paris"], eng: ["equal, like"], fig: "adjective" },
{ latin: ["parens", "parentis", "m./f."], eng: ["parent"], fig: "noun", genitive: "parentis", declension: "3" },
{ latin: ["paro", "parare", "paravi", "paratum"], eng: ["to prepare, provide, get, obtain"], fig: "verb", conjugation: "irregular" },
{ latin: ["pars", "partis"], eng: ["part, share", "direction"], fig: "noun", gender: "F", genitive: "partis", declension: "3" },
{ latin: ["parvus", "a", "um"], eng: ["small, little"], fig: "adjective" },
{ latin: ["patefacio", "patefacere", "patefeci", "patefactum"], eng: ["to make open, open", "disclose, expose"], fig: "verb", conjugation: "irregular" },
{ latin: ["pateo", "patere", "patui"], eng: ["to be open, lie open, be accessible, be evident"], fig: "verb", conjugation: "irregular" },
{ latin: ["pater", "patris"], eng: ["father"], fig: "noun", gender: "M", genitive: "patris", declension: "3" },
{ latin: ["patientia", "patientiae"], eng: ["suffering", "patience, endurance"], fig: "noun", gender: "F", genitive: "patientiae", declension: "1" },
{ latin: ["patior", "pati", "passus sum"], eng: ["to suffer, endure, permit"], fig: "verb", conjugation: "irregular" },
{ latin: ["patria", "patriae"], eng: ["fatherland, country"], fig: "noun", gender: "F", genitive: "patriae", declension: "1" },
{ latin: ["pauci", "ae", "a"], eng: ["few"], fig: "adjective" },
{ latin: ["paulus", "a", "um"], eng: ["small, little"], fig: "adjective" },
{ latin: ["pauper", "pauperis"], eng: ["poor"], fig: "adjective" },
{ latin: ["paupertas", "paupertatis"], eng: ["poverty, humble circumstances"], fig: "noun", gender: "F", genitive: "paupertatis", declension: "3" },
{ latin: ["pax", "pacis"], eng: ["peace"], fig: "noun", gender: "F", genitive: "pacis", declension: "3" },
{ latin: ["pectus", "pectoris"], eng: ["breast, heart"], fig: "noun", gender: "N", genitive: "pectoris", declension: "3" },
{ latin: ["pecunia", "pecuniae"], eng: ["money"], fig: "noun", gender: "F", genitive: "pecuniae", declension: "1" },
{ latin: ["peior", "peius"], eng: ["worse"], fig: "adjective" },
{ latin: ["pello", "pellere", "pepuli", "pulsum"], eng: ["to strike, push, drive out, banish"], fig: "verb", conjugation: "irregular" },
{ latin: ["per + acc."], eng: ["through"], fig: "preposition" },
{ latin: ["peregrinor", "peregrinari", "peregrinatus sum"], eng: ["to travel abroad, wander"], fig: "verb", conjugation: "irregular" },
{ latin: ["pereo", "perire", "perii", "peritum"], eng: ["to pass away, be destroyed, perish"], fig: "verb", conjugation: "irregular" },
{ latin: ["perficio", "perficere", "perfeci", "perfectum"], eng: ["to finish", "execute", "bring about, accomplish"], fig: "verb", conjugation: "irregular" },
{ latin: ["periculum", "periculi"], eng: ["danger"], fig: "noun", gender: "N", genitive: "periculi", declension: "2" },
{ latin: ["pernocto", "pernoctare", "pernoctavi", "pernoctatum"], eng: ["to spend the night"], fig: "verb", conjugation: "irregular" },
{ latin: ["perpetuus", "a", "um"], eng: ["eternal, perpetual, continuous"], fig: "adjective" },
{ latin: ["persuadeo", "persuadere", "persuasi", "persuasum + dat."], eng: ["to make sweet to, persuade"], fig: "verb", conjugation: "irregular" },
{ latin: ["pes", "pedis"], eng: ["foot"], fig: "noun", gender: "M", genitive: "pedis", declension: "3" },
{ latin: ["pessimus", "a", "um"], eng: ["worst"], fig: "adjective" },
{ latin: ["peto", "petere", "petivi", "petitum"], eng: ["to seek, aim at, beg, beseech"], fig: "verb", conjugation: "irregular" },
{ latin: ["philosophia", "philosophiae"], eng: ["philosophy"], fig: "noun", gender: "F", genitive: "philosophiae", declension: "1" },
{ latin: ["philosophus", "philosophi"], eng: ["philosopher"], fig: "noun", gender: "M", genitive: "philosophi", declension: "2" },
{ latin: ["piger", "pigra", "pigrum"], eng: ["lazy, slow"], fig: "adjective" },
{ latin: ["pius", "a", "um"], eng: ["loyal, dutiful pious"], fig: "adjective" },
{ latin: ["placeo", "placere", "placui", "placitum + dat."], eng: ["to be pleasing to, please"], fig: "verb", conjugation: "irregular" },
{ latin: ["plebs", "plebis"], eng: ["the common people, populace, plebeians"], fig: "noun", gender: "F", genitive: "plebis", declension: "3" },
{ latin: ["plenus", "a", "um"], eng: ["full"], fig: "adjective" },
{ latin: ["plurimum"], eng: ["most, very much"], fig: "adverb" },
{ latin: ["plurimus", "a", "um"], eng: ["most"], fig: "adjective" },
{ latin: ["plus", "pluris"], eng: ["more"], fig: "adjective" },
{ latin: ["poena", "poenae"], eng: ["penalty, punishment"], fig: "noun", gender: "F", genitive: "poenae", declension: "1" },
{ latin: ["poeta", "poetae"], eng: ["poet"], fig: "noun", gender: "M", genitive: "poetae", declension: "1" },
{ latin: ["polliceor", "polliceri", "pollicitus sum"], eng: ["promise"], fig: "verb", conjugation: "irregular" },
{ latin: ["pono", "ponere", "posui", "positum"], eng: ["to put, place, set"], fig: "verb", conjugation: "irregular" },
{ latin: ["populus", "populi"], eng: ["people"], fig: "noun", gender: "M", genitive: "populi", declension: "2" },
{ latin: ["porta", "portae"], eng: ["gate, entrance, door"], fig: "noun", gender: "F", genitive: "portae", declension: "1" },
{ latin: ["porto", "portare", "portavi", "portatum"], eng: ["to carry, bring"], fig: "verb", conjugation: "irregular" },
{ latin: ["possum", "posse", "potui"], eng: ["to be able, can, have power"], fig: "verb", conjugation: "irregular" },
{ latin: ["post + acc."], eng: ["after, behind"], fig: "preposition" },
{ latin: ["potens", "potentis"], eng: ["powerful, able, strong"], fig: "adjective" },
{ latin: ["prae + abl."], eng: ["in front of, before"], fig: "preposition" },
{ latin: ["praebeo", "praebere", "praebui", "praebitum"], eng: ["to offer, provide"], fig: "verb", conjugation: "irregular" },
{ latin: ["praefero", "praeferre", "praetuli", "praelatum"], eng: ["to carry in front of", "offer", "give preference to"], fig: "verb", conjugation: "irregular" },
{ latin: ["praeficio", "praeficere", "praefeci", "praefectus"], eng: ["to put in charge"], fig: "verb", conjugation: "irregular" },
{ latin: ["praemium", "praemii"], eng: ["reward"], fig: "noun", gender: "N", genitive: "praemii", declension: "2" },
{ latin: ["praesto", "praestare", "praestiti", "praestitum"], eng: ["to excel", "show, offer, supply, furnish"], fig: "verb", conjugation: "irregular" },
{ latin: ["praesum", "praeesse", "praefui"], eng: ["be in charge, be present"], fig: "verb", conjugation: "irregular" },
{ latin: ["praeter + acc."], eng: ["besides, except"], fig: "preposition" },
{ latin: ["precor", "precari", "precatus sum"], eng: ["beg, wish, pray"], fig: "verb", conjugation: "irregular" },
{ latin: ["premo", "premere", "pressi", "pressum"], eng: ["to press, press hard, pursue"], fig: "verb", conjugation: "irregular" },
{ latin: ["pretium", "pretii n."], eng: ["price, value"], fig: "noun", genitive: "pretii n.", declension: "unknown" },
{ latin: ["primo"], eng: ["at first, at the beginning"], fig: "adverb" },
{ latin: ["primum"], eng: ["at first, in the first place"], fig: "adverb" },
{ latin: ["primus", "a", "um"], eng: ["first"], fig: "adjective" },
{ latin: ["princeps", "principis"], eng: ["chief, foremost"], fig: "adjective" },
{ latin: ["princeps", "principis"], eng: ["leader, chief, emperor"], fig: "noun", gender: "M", genitive: "principis", declension: "3" },
{ latin: ["principium", "principii"], eng: ["beginning"], fig: "noun", gender: "N", genitive: "principii", declension: "2" },
{ latin: ["prior", "prius"], eng: ["former"], fig: "adjective" },
{ latin: ["pristinus", "a", "um"], eng: ["ancient", "former, previous"], fig: "adjective" },
{ latin: ["pro + abl."], eng: ["in front of, before, instead of, on behalf of"], fig: "preposition" },
{ latin: ["probitas", "probitatis"], eng: ["uprightness, honesty"], fig: "noun", gender: "F", genitive: "probitatis", declension: "3" },
{ latin: ["probo", "probare", "probavi", "probatum"], eng: ["to test", "approve", "recommend"], fig: "verb", conjugation: "irregular" },
{ latin: ["proficiscor", "proficisci", "profectus sum"], eng: ["to set out, start"], fig: "verb", conjugation: "irregular" },
{ latin: ["progredior", "progredi", "progressus sum"], eng: ["to go, come forth, go forward, march forward"], fig: "verb", conjugation: "irregular" },
{ latin: ["prohibeo", "prohibere", "prohibui", "prohibitum"], eng: ["to prevent, hinder, restrain, prohibit"], fig: "verb", conjugation: "irregular" },
{ latin: ["promitto", "promittere", "promisi", "promissum"], eng: ["to send forth", "promise"], fig: "verb", conjugation: "irregular" },
{ latin: ["pronuntio", "pronuntiare", "pronuntiavi", "pronuntiatum"], eng: ["to pronounce, announce, proclaim"], fig: "verb", conjugation: "irregular" },
{ latin: ["propter + acc."], eng: ["on account of, because"], fig: "preposition" },
{ latin: ["prosum", "prodesse", "profui"], eng: ["to be useful, benefit,"], fig: "with Dat." },
{ latin: ["provincia", "provinciae"], eng: ["province"], fig: "noun", genitive: "provinciae", declension: "1" },
{ latin: ["proximus", "a", "um"], eng: ["nearest, next"], fig: "adjective" },
{ latin: ["publicus", "a", "um"], eng: ["public"], fig: "adjective" },
{ latin: ["pudet", "pudere", "puduit", "puditus est"], eng: ["it shames, make ashamed"], fig: "verb", conjugation: "irregular" },
{ latin: ["pudicus", "a", "um"], eng: ["modest, chaste"], fig: "adjective" },
{ latin: ["puella", "puellae"], eng: ["girl"], fig: "noun", gender: "F", genitive: "puellae", declension: "1" },
{ latin: ["puer", "pueri"], eng: ["boy", "pl., children"], fig: "noun", gender: "M", genitive: "pueri", declension: "2" },
{ latin: ["pugno", "pugnare", "pugnavi", "pugnatum"], eng: ["to fight"], fig: "verb", conjugation: "irregular" },
{ latin: ["pulcher", "pulchra", "pulchrum"], eng: ["beautiful, handsome"], fig: "adjective" },
{ latin: ["puto", "putare", "putavi", "putatum"], eng: ["to reckon, suppose, suppose, think, imagine"], fig: "verb", conjugation: "irregular" },
{ latin: ["quaero", "quaerere", "quaesivi", "quaesitum"], eng: ["to seek, look for, strive for, ask, inquire"], fig: "verb", conjugation: "irregular" },
{ latin: ["qualis", "quale"], eng: ["what kind of"], fig: "adjective" },
{ latin: ["quam"], eng: ["how"], fig: "adverb" },
{ latin: ["quantus", "a", "um"], eng: ["how large, how great, how much"], fig: "adjective" },
{ latin: ["quare"], eng: ["wherefore, why, because of which"], fig: "adverb" },
{ latin: ["quasi"], eng: ["as if, as it were"], fig: "adverb" },
{ latin: ["-que"], eng: ["and"], fig: "enclitic" },
{ latin: ["queror", "queri", "questus sum"], eng: ["to complain, lament"], fig: "verb", conjugation: "irregular" },
{ latin: ["qui", "quae", "quod"], eng: ["who, which, what, that"], fig: "pronoun" },
{ latin: ["qui? quae? quod?"], eng: ["what? which? what kind?"], fig: "adjective" },
{ latin: ["quid"], eng: ["what?"], fig: "pronoun" },
{ latin: ["quidam", "quaedam", "quiddam"], eng: ["a certain one, thing", "someone, something"], fig: "pronoun" },
{ latin: ["quinque"], eng: ["five"], fig: "adjective" },
{ latin: ["quis", "quid (indef.)"], eng: ["anyone, anything, someone, something"], fig: "pronoun" },
{ latin: ["quis? quid?"], eng: ["who? what?"], fig: "pronoun" },
{ latin: ["quoad"], eng: ["as long as, as far as"], fig: "conjunction" },
{ latin: ["quot"], eng: ["how many, as many as"], fig: "adjective" },
{ latin: ["radius", "radii m."], eng: ["ray, rod"], fig: "noun", genitive: "radii m.", declension: "unknown" },
{ latin: ["rapio", "rapere", "rapui", "raptum"], eng: ["to seize, snatch, carry away"], fig: "verb", conjugation: "irregular" },
{ latin: ["ratio", "rationis"], eng: ["reckoning, account, reason, judgment, manner"], fig: "noun", gender: "F", genitive: "rationis", declension: "3" },
{ latin: ["recipio", "recipere", "recepi", "receptum"], eng: ["to take back, regain, admit, receive"], fig: "verb", conjugation: "irregular" },
{ latin: ["recito", "recitare", "recitavi", "recitatum"], eng: ["to recite"], fig: "verb", conjugation: "irregular" },
{ latin: ["recognosco", "recognoscere", "recognovi", "recognitum"], eng: ["to recognize, recollect"], fig: "verb", conjugation: "irregular" },
{ latin: ["recreo", "recreare", "recreavi", "recreatum"], eng: ["to restore, revive", "refresh, cheer"], fig: "verb", conjugation: "irregular" },
{ latin: ["recuso", "recusare", "recusavi", "recusatum"], eng: ["to refuse"], fig: "verb", conjugation: "irregular" },
{ latin: ["redeo", "redire", "redii", "reditum"], eng: ["to go back, return"], fig: "verb", conjugation: "irregular" },
{ latin: ["refero", "referre", "rettuli", "relatum"], eng: ["to carry back, bring back", "repeat, answer"], fig: "verb", conjugation: "irregular" },
{ latin: ["regina", "reginae"], eng: ["queen"], fig: "noun", gender: "F", genitive: "reginae", declension: "1" },
{ latin: ["rego", "regere", "rexi", "rectum"], eng: ["to rule, guide, direct"], fig: "verb", conjugation: "irregular" },
{ latin: ["relinquo", "relinquere", "reliqui", "relictum"], eng: ["to leave behind, leave, abandon, desert"], fig: "verb", conjugation: "irregular" },
{ latin: ["remaneo", "remanere", "remansi", "remansum"], eng: ["to remain, stay"], fig: "verb", conjugation: "irregular" },
{ latin: ["remedium", "remedii"], eng: ["cure, remedy"], fig: "noun", gender: "N", genitive: "remedii", declension: "2" },
{ latin: ["remissio", "remissionis"], eng: ["letting go, release", "relaxation"], fig: "noun", gender: "F", genitive: "remissionis", declension: "3" },
{ latin: ["removeo", "removere", "removi", "remotum"], eng: ["move back", "put away", "withdraw", "remove"], fig: "verb", conjugation: "irregular" },
{ latin: ["reperio", "reperire", "repperi", "repertum"], eng: ["to find, discover, learn, get"], fig: "verb", conjugation: "irregular" },
{ latin: ["requiesco", "requiescere", "requievi", "requietum"], eng: ["to rest"], fig: "verb", conjugation: "irregular" },
{ latin: ["requiro", "requirere", "requisivi", "requisitum"], eng: ["to seek, ask for, miss, need, require"], fig: "verb", conjugation: "irregular" },
{ latin: ["res publica", "rei publicae"], eng: ["state, commonwealth, republic"], fig: "noun", gender: "F", genitive: "rei publicae", declension: "1" },
{ latin: ["res", "rei"], eng: ["thing, matter, business, affair"], fig: "noun", gender: "F", genitive: "rei", declension: "2" },
{ latin: ["respondeo", "respondere", "respondi", "responsum"], eng: ["to answer"], fig: "verb", conjugation: "irregular" },
{ latin: ["retego", "retegere", "retexi", "retectum"], eng: ["to uncover, reveal"], fig: "verb", conjugation: "irregular" },
{ latin: ["reverto", "revertere", "reverti", "reversum"], eng: ["to turn back"], fig: "verb", conjugation: "irregular" },
{ latin: ["rex", "regis"], eng: ["king"], fig: "noun", gender: "M", genitive: "regis", declension: "3" },
{ latin: ["rideo", "ridere", "risi", "risum"], eng: ["to laugh, laugh at"], fig: "verb", conjugation: "irregular" },
{ latin: ["ridiculus", "a", "um"], eng: ["laughable, ridiculous"], fig: "adjective" },
{ latin: ["rogo", "rogare", "rogavi", "rogatum"], eng: ["to ask"], fig: "verb", conjugation: "irregular" },
{ latin: ["Romanus", "a", "um"], eng: ["Roman"], fig: "adjective" },
{ latin: ["ruina", "ruinae f."], eng: ["ruin, destruction"], fig: "noun", genitive: "ruinae f.", declension: "unknown" },
{ latin: ["rumor", "rumoris"], eng: ["rumor, gossip"], fig: "noun", gender: "M", genitive: "rumoris", declension: "3" },
{ latin: ["ruo", "ruere", "rui", "rutus"], eng: ["to fall, rush"], fig: "verb", conjugation: "irregular" },
{ latin: ["rus", "ruris"], eng: ["the country, countryside"], fig: "noun", gender: "N", genitive: "ruris", declension: "3" },
{ latin: ["rusticor", "rusticari", "rusticatus sum"], eng: ["to live in the country"], fig: "verb", conjugation: "irregular" },
{ latin: ["sacerdos", "sacerdotis"], eng: ["priest"], fig: "noun", gender: "M", genitive: "sacerdotis", declension: "3" },
{ latin: ["saevus", "a", "um"], eng: ["cruel"], fig: "adjective" },
{ latin: ["sal", "salis"], eng: ["salt", "wit"], fig: "noun", gender: "M", genitive: "salis", declension: "3" },
{ latin: ["salus", "salutis"], eng: ["health, safety", "greeting"], fig: "noun", gender: "F", genitive: "salutis", declension: "3" },
{ latin: ["salveo", "salvere"], eng: ["to be well"], fig: "verb", conjugation: "irregular" },
{ latin: ["salvus", "a", "um"], eng: ["safe, sound"], fig: "adjective" },
{ latin: ["sanus", "a", "um"], eng: ["sound, healthy, sane"], fig: "adjective" },
{ latin: ["sapiens", "sapientis"], eng: ["wise, judicious"], fig: "adjective" },
{ latin: ["sapiens", "sapientis"], eng: ["wise man, philosopher"], fig: "noun", gender: "M", genitive: "sapientis", declension: "3" },
{ latin: ["sapientia", "sapientiae"], eng: ["wisdom"], fig: "noun", gender: "F", genitive: "sapientiae", declension: "1" },
{ latin: ["sapio", "sapere", "sapui"], eng: ["to have good taste", "have good sense, be wise"], fig: "verb", conjugation: "irregular" },
{ latin: ["satio", "satiare", "satiavi", "satiatum"], eng: ["to satisfy, sate"], fig: "verb", conjugation: "irregular" },
{ latin: ["satis"], eng: ["enough, sufficient"], fig: "adjective" },
{ latin: ["sator", "satoris"], eng: ["sower, planter", "begetter, father", "founder"], fig: "noun", gender: "M", genitive: "satoris", declension: "3" },
{ latin: ["satura", "saturae"], eng: ["satire"], fig: "noun", gender: "F", genitive: "saturae", declension: "1" },
{ latin: ["saxum", "saxi"], eng: ["rock, stone"], fig: "noun", gender: "N", genitive: "saxi", declension: "2" },
{ latin: ["scelus", "sceleris"], eng: ["evil deed, crime"], fig: "noun", gender: "N", genitive: "sceleris", declension: "3" },
{ latin: ["scientia", "scientiae"], eng: ["knowledge"], fig: "noun", gender: "F", genitive: "scientiae", declension: "1" },
{ latin: ["scio", "scire", "scivi", "scitum"], eng: ["to know"], fig: "verb", conjugation: "irregular" },
{ latin: ["scribo", "scribere", "scripsi", "scriptum"], eng: ["to write"], fig: "verb", conjugation: "irregular" },
{ latin: ["scriptor", "scriptoris"], eng: ["writer"], fig: "noun", gender: "M", genitive: "scriptoris", declension: "3" },
{ latin: ["secundus", "a", "um"], eng: ["second", "favorable"], fig: "adjective" },
{ latin: ["sedeo", "sedere", "sedi", "sessum"], eng: ["to sit"], fig: "verb", conjugation: "irregular" },
{ latin: ["semel"], eng: ["once, a single time"], fig: "adverb" },
{ latin: ["semper"], eng: ["always"], fig: "adverb" },
{ latin: ["senectus", "senectutis"], eng: ["old age"], fig: "noun", gender: "F", genitive: "senectutis", declension: "3" },
{ latin: ["senex", "senis", "m."], eng: ["old"], fig: "man" },
{ latin: ["sensus", "sensus"], eng: ["sense, feeling"], fig: "noun", gender: "M", genitive: "sensus", declension: "4" },
{ latin: ["sententia", "sententiae"], eng: ["feeling, thought", "opinion", "sentence"], fig: "noun", gender: "F", genitive: "sententiae", declension: "1" },
{ latin: ["sentio", "sentire", "sensi", "sensum"], eng: ["to feel, perceive, think"], fig: "verb", conjugation: "irregular" },
{ latin: ["sequor", "sequi", "secutus sum"], eng: ["to follow"], fig: "verb", conjugation: "irregular" },
{ latin: ["sereno", "serenare", "serenavi", "serenatum"], eng: ["to make clear, brighten", "cheer up, soothe"], fig: "verb", conjugation: "irregular" },
{ latin: ["serva", "servae", "f."], eng: ["slave"], fig: "female" },
{ latin: ["servio", "servire", "servivi", "servitum + dat."], eng: ["to be a slave to, serve"], fig: "verb", conjugation: "irregular" },
{ latin: ["servitus", "servitutis"], eng: ["slavery, servitude"], fig: "noun", gender: "F", genitive: "servitutis", declension: "3" },
{ latin: ["servo", "servare", "servavi", "servatum"], eng: ["to preserve, keep, save"], fig: "verb", conjugation: "irregular" },
{ latin: ["servus", "servi", "m."], eng: ["slave"], fig: "male" },
{ latin: ["sidus", "sideris"], eng: ["constellation, star"], fig: "noun", gender: "N", genitive: "sideris", declension: "3" },
{ latin: ["signum", "signi"], eng: ["sign, signal, seal, indication"], fig: "noun", gender: "N", genitive: "signi", declension: "2" },
{ latin: ["similis", "simile"], eng: ["similar, resembling"], fig: "adjective" },
{ latin: ["sine"], eng: ["without"], fig: "preposition" },
{ latin: ["sinister", "sinistra", "sinistrum"], eng: ["left, left-hand"], fig: "adjective" },
{ latin: ["socius", "socii m."], eng: ["associate, companion", "ally"], fig: "noun", genitive: "socii m.", declension: "unknown" },
{ latin: ["sol", "solis"], eng: ["sun"], fig: "noun", gender: "M", genitive: "solis", declension: "3" },
{ latin: ["solacium", "solacii"], eng: ["comfort, relief"], fig: "noun", gender: "N", genitive: "solacii", declension: "2" },
{ latin: ["soleo", "solere", "solitus sum"], eng: ["to be accustomed"], fig: "verb", conjugation: "irregular" },
{ latin: ["sollers", "sollertis m."], eng: ["skilled, expert"], fig: "noun", genitive: "sollertis m.", declension: "unknown" },
{ latin: ["solus", "a", "um"], eng: ["alone, only"], fig: "adjective" },
{ latin: ["somnus", "somni"], eng: ["sleep, dream"], fig: "noun", gender: "M", genitive: "somni", declension: "2" },
{ latin: ["soror", "sororis"], eng: ["sister"], fig: "noun", gender: "F", genitive: "sororis", declension: "3" },
{ latin: ["sors", "sortis f."], eng: ["lot, destiny"], fig: "noun", genitive: "sortis f.", declension: "unknown" },
{ latin: ["spargo", "spargere", "sparsi", "sparsum"], eng: ["to scatter, strew, sprinkle"], fig: "verb", conjugation: "irregular" },
{ latin: ["species", "speciei f."], eng: ["appearance"], fig: "noun", genitive: "speciei f.", declension: "unknown" },
{ latin: ["specto", "spectare", "spectavi", "spectatum"], eng: ["to look at, see"], fig: "verb", conjugation: "irregular" },
{ latin: ["speculum", "speculi"], eng: ["mirror"], fig: "noun", gender: "N", genitive: "speculi", declension: "2" },
{ latin: ["spero", "sperare", "speravi", "speratum"], eng: ["to hope for, hope"], fig: "verb", conjugation: "irregular"},
{ latin: ["spiritus", "spiritus"], eng: ["breath, spirit, soul"], fig: "noun", gender: "M", genitive: "spiritus", declension: "4" },
{ latin: ["statua", "statuae f."], eng: ["statue"], fig: "noun", genitive: "statuae f.", declension: "unknown" },
{ latin: ["stella", "stellae"], eng: ["star, planet"], fig: "noun", gender: "F", genitive: "stellae", declension: "1" },
{ latin: ["sto", "stare", "steti", "statum"], eng: ["to stand, stand still"], fig: "verb", conjugation: "irregular" },
{ latin: ["studeo", "studere", "studui + dat."], eng: ["to direct one's zeal to, be eager for, study"], fig: "verb", conjugation: "irregular" },
{ latin: ["studium", "studii"], eng: ["eagerness, zeal, pursuit"], fig: "noun", gender: "N", genitive: "studii", declension: "2" },
{ latin: ["stultus", "a", "um"], eng: ["foolish"], fig: "adjective" },
{ latin: ["suavis", "suave"], eng: ["sweet"], fig: "adjective" },
{ latin: ["sub + abl."], eng: ["under, up under"], fig: "preposition" },
{ latin: ["sub + acc."], eng: ["under, up under, close to"], fig: "preposition" },
{ latin: ["subito"], eng: ["suddenly"], fig: "adverb" },
{ latin: ["sublimis", "sublime"], eng: ["elevated, lofty", "heroic, noble"], fig: "adjective" },
{ latin: ["subrideo", "subridere", "subrisi", "subrisum"], eng: ["to smile down upon"], fig: "verb", conjugation: "irregular" },
{ latin: ["sui", "sibi", "se", "se"], eng: ["-self"], fig: "reflexive" },
{ latin: ["sum", "esse", "fui", "futurum"], eng: ["to be"], fig: "verb", conjugation: "irregular" },
{ latin: ["summus", "a", "um"], eng: ["highest"], fig: "adjective" },
{ latin: ["superbus", "a", "um"], eng: ["proud, arrogant, overbearing, haughty"], fig: "adjective" },
{ latin: ["superior", "superius"], eng: ["higher", "the gods above"], fig: "adjective" },
{ latin: ["supero", "superare", "superavi", "superatum"], eng: ["to be above, surpass", "overcome, conquer"], fig: "verb", conjugation: "irregular" },
{ latin: ["supersum", "superesse", "superfui"], eng: ["to be left over", "survive"], fig: "verb", conjugation: "irregular" },
{ latin: ["superus", "a", "um"], eng: ["above, upper"], fig: "adjective" },
{ latin: ["supremus", "a", "um"], eng: ["highest, upper, last"], fig: "adjective" },
{ latin: ["surgo", "surgere", "surrexi", "surrectum"], eng: ["to get up, arise"], fig: "verb", conjugation: "irregular" },
{ latin: ["suscipio", "suscipere", "suscepi", "susceptum"], eng: ["to undertake", "support"], fig: "verb", conjugation: "irregular" },
{ latin: ["suspendo", "suspendere", "suspendi", "suspensum"], eng: ["to hang up, suspend", "interrupt"], fig: "verb", conjugation: "irregular" },
{ latin: ["sustineo", "sustinere", "sustinui", "sustentum"], eng: ["to support", "check", "put off", "sustain"], fig: "verb", conjugation: "irregular" },
{ latin: ["suus", "a", "um"], eng: ["his, her, its, their"], fig: "own" },
{ latin: ["Syracusae", "Syracusarum"], eng: ["Syracuse"], fig: "noun", gender: "F", genitive: "Syracusarum", declension: "unknown" },
{ latin: ["taceo", "tacere", "tacui", "tacitum"], eng: ["to be silent, leave unmentioned"], fig: "verb", conjugation: "irregular" },
{ latin: ["talis", "tale"], eng: ["such, of such a sort"], fig: "adjective" },
{ latin: ["tango", "tangere", "tetigi", "tactum"], eng: ["to touch"], fig: "verb", conjugation: "irregular" },
{ latin: ["tantum"], eng: ["only, so much"], fig: "adverb" },
{ latin: ["tantus", "a", "um"], eng: ["so large, so great, of such a size"], fig: "adjective" },
{ latin: ["tantus..quantus"], eng: ["just as much?as"], fig: "adjective" },
{ latin: ["te"], eng: ["you"], fig: "pronoun" },
{ latin: ["tego", "tegere", "texi", "tectum"], eng: ["to cover, defend", "hide"], fig: "verb", conjugation: "irregular" },
{ latin: ["tempestas", "tempestatis"], eng: ["period of time, season", "weather", "storm"], fig: "noun", gender: "F", genitive: "tempestatis", declension: "3" },
,{ latin: ["tempto", "temptare", "temptavi", "temptatum"], eng: ["to test, try", "urge"], fig: "verb", conjugation: "irregular" }
,{ latin: ["tempus", "temporis"], eng: ["time"], fig: "noun", gender: "N", genitive: "temporis", declension: "3" }
,{ latin: ["teneo", "tenere", "tenui", "tentum"], eng: ["to hold, keep, possess"], fig: "verb", conjugation: "irregular" }
,{ latin: ["tergum", "tergi n."], eng: ["back"], fig: "noun", genitive: "tergi n.", declension: "unknown" }
,{ latin: ["terra", "terrae"], eng: ["earth, land"], fig: "noun", gender: "F", genitive: "terrae", declension: "1" }
,{ latin: ["terreo", "terrere", "terrui", "territum"], eng: ["to terrify"], fig: "verb", conjugation: "irregular" }
,{ latin: ["timeo", "timere", "timui"], eng: ["to fear"], fig: "verb", conjugation: "irregular" }
,{ latin: ["timor", "timoris"], eng: ["fear"], fig: "noun", gender: "M", genitive: "timoris", declension: "3" }
,{ latin: ["tolero", "tolerare", "toleravi", "toleratum"], eng: ["to bear, endure"], fig: "verb", conjugation: "irregular" }
,{ latin: ["tollo", "tollere", "sustuli", "sublatum"], eng: ["to raise, lift up", "take away, remove, destroy"], fig: "verb", conjugation: "irregular" }
,{ latin: ["tot"], eng: ["so many"], fig: "adjective" }
,{ latin: ["totus", "a", "um"], eng: ["whole, entire"], fig: "adjective" }
,{ latin: ["trado", "tradere", "tradidi", "traditum"], eng: ["to give over, surrender", "hand down, transmit,teach"], fig: "verb", conjugation: "irregular" }
,{ latin: ["traho", "trahere", "traxi", "tractum"], eng: ["to draw, drag, derive"], fig: "verb", conjugation: "irregular" }
,{ latin: ["trans + acc."], eng: ["across"], fig: "preposition" }
,{ latin: ["transeo", "transire", "transii", "transitum"], eng: ["to go across, cross", "pass over, ignore"], fig: "verb", conjugation: "irregular" }
,{ latin: ["transitus", "transitus"], eng: ["passing over, transit, transition"], fig: "noun", gender: "M", genitive: "transitus", declension: "4" }
,{ latin: ["tres", "tria"], eng: ["three"], fig: "adjective" }
,{ latin: ["tristis", "triste"], eng: ["sad, sorrowful", "joyless, grim, severe"], fig: "adjective" }
,{ latin: ["Troia", "Troiae"], eng: ["Troy"], fig: "noun", gender: "F", genitive: "Troiae", declension: "1" }
,{ latin: ["tu", "tui"], eng: ["you"], fig: "pronoun" }
,{ latin: ["turba", "turbae"], eng: ["mob, crowd, disturbance"], fig: "noun", gender: "F", genitive: "turbae", declension: "1" }
,{ latin: ["turpis", "turpe"], eng: ["ugly, shameful, base, disgraceful"], fig: "adjective" }
,{ latin: ["tuus", "a", "um"], eng: ["your"], fig: "adjective" }
,{ latin: ["tyrannus", "tyranni"], eng: ["tyrant"], fig: "noun", gender: "M", genitive: "tyranni", declension: "2" }
,{ latin: ["ubi"], eng: ["when, where, where?"], fig: "conjunction" }
,{ latin: ["ullus", "a", "um"], eng: ["any"], fig: "adjective" }
,{ latin: ["ultimus", "a", "um"], eng: ["farthest, extreme", "last"], fig: "adjective" }
,{ latin: ["ultra"], eng: ["on the other side, beyond"], fig: "adverb" }
,{ latin: ["ultra"], eng: ["on the other side, beyond"], fig: "preposition" }
,{ latin: ["unda", "undae f."], eng: ["wave"], fig: "noun", genitive: "undae f.", declension: "unknown" }
,{ latin: ["unus", "a", "um"], eng: ["one, single, alone"], fig: "adjective" }
,{ latin: ["urbanus", "a", "um"], eng: ["of the city, urban, urbane"], fig: "adjective" }
,{ latin: ["urbs", "urbis"], eng: ["city", "City of Rome"], fig: "noun", gender: "F", genitive: "urbis", declension: "3" }
,{ latin: ["urna", "urnae f."], eng: ["urn"], fig: "noun", genitive: "urnae f.", declension: "unknown" }
,{ latin: ["usus", "usus m."], eng: ["use, advantage, enjojment"], fig: "noun", genitive: "usus m.", declension: "unknown" }
,{ latin: ["uter", "utra", "utrum"], eng: ["either, which"], fig: "of two" }
,{ latin: ["utilis", "utile"], eng: ["useful, advantageous"], fig: "adjective" }
,{ latin: ["utor", "uti", "usus sum + abl."], eng: ["to use", "enjoy, experience"], fig: "verb", conjugation: "irregular" }
,{ latin: ["uxor", "uxoris"], eng: ["wife"], fig: "noun", gender: "F", genitive: "uxoris", declension: "3" }
,{ latin: ["valeo", "valere", "valui", "valiturum"], eng: ["to be strong", "have power", "be well"], fig: "verb", conjugation: "irregular" }
,{ latin: ["validus", "a", "um"], eng: ["strong, healthy"], fig: "adjective" }
,{ latin: ["vendo", "vendere", "vendidi", "venditum"], eng: ["to sell"], fig: "verb", conjugation: "irregular" }
,{ latin: ["venia", "veniae f."], eng: ["favor, kindness"], fig: "noun", genitive: "veniae f.", declension: "unknown" }
,{ latin: ["venio", "venire", "veni", "ventum"], eng: ["to come"], fig: "verb", conjugation: "irregular" }
,{ latin: ["ventus", "venti"], eng: ["wind"], fig: "noun", gender: "M", genitive: "venti", declension: "2" }
,{ latin: ["verbum", "verbi"], eng: ["word"], fig: "noun", gender: "N", genitive: "verbi", declension: "2" }
,{ latin: ["vereor", "vereri", "veritus sum"], eng: ["to show reverence for, respect"], fig: "verb", conjugation: "irregular" }
,{ latin: ["veritas", "veritatis"], eng: ["truth"], fig: "noun", gender: "F", genitive: "veritatis", declension: "3" }
,{ latin: ["vero"], eng: ["but", "in truth, indeed, to be sure, however"], fig: "adverb" }
,{ latin: ["versus", "versus"], eng: ["verse"], fig: "noun", gender: "M", genitive: "versus", declension: "4" }
,{ latin: ["verto", "vertere", "verti", "versum"], eng: ["to turn, change"], fig: "verb", conjugation: "irregular" }
,{ latin: ["verus", "a", "um"], eng: ["true, real", "proper"], fig: "adjective" }
,{ latin: ["vesper", "vesperis"], eng: ["evening", "evening star"], fig: "noun", gender: "M", genitive: "vesperis", declension: "3" }
,{ latin: ["vetus", "veteris"], eng: ["old"], fig: "adjective" }
,{ latin: ["via", "viae"], eng: ["way, road, street"], fig: "noun", gender: "F", genitive: "viae", declension: "1" }
,{ latin: ["vicina", "vicinae"], eng: ["neighbor"], fig: "noun", gender: "F", genitive: "vicinae", declension: "1" }
,{ latin: ["vicinus", "vicini"], eng: ["neighbor"], fig: "noun", gender: "M", genitive: "vicini", declension: "2" }
,{ latin: ["victoria", "victoriae"], eng: ["victory"], fig: "noun", gender: "F", genitive: "victoriae", declension: "1" }
,{ latin: ["video", "videre", "vidi", "visum"], eng: ["to see"], fig: "verb", conjugation: "irregular" }
,{ latin: ["videor", "videri", "visus sum"], eng: ["to be seen, seem"], fig: "verb", conjugation: "irregular" }
,{ latin: ["vigor", "vigoris m."], eng: ["liveliness, vigor, activity"], fig: "noun", genitive: "vigoris m.", declension: "unknown" }
,{ latin: ["vinco", "vincere", "vici", "victum"], eng: ["to conquer"], fig: "verb", conjugation: "irregular" }
,{ latin: ["vinum", "vini"], eng: ["wine"], fig: "noun", gender: "N", genitive: "vini", declension: "2" }
,{ latin: ["violo", "violare", "violavi", "violatum"], eng: ["to violate, dishonor", "outrage"], fig: "verb", conjugation: "irregular" }
,{ latin: ["vir", "viri"], eng: ["man"], fig: "noun", gender: "M", genitive: "viri", declension: "2" }
,{ latin: ["virgo", "virginis"], eng: ["maiden, virgin"], fig: "noun", gender: "F", genitive: "virginis", declension: "3" }
,{ latin: ["virtus", "virtutis"], eng: ["manliness, courage, excellence, virtue"], fig: "noun", gender: "F", genitive: "virtutis", declension: "3" }
,{ latin: ["vis", "vis"], eng: ["force"], fig: "noun", gender: "F", genitive: "vis", declension: "3" }
,{ latin: ["vita", "vitae"], eng: ["life"], fig: "noun", gender: "F", genitive: "vitae", declension: "1" }
,{ latin: ["vitium", "vitii"], eng: ["fault, crime", "vice"], fig: "noun", gender: "N", genitive: "vitii", declension: "2" }
,{ latin: ["vito", "vitare", "vitavi", "vitatum"], eng: ["to avoid, shun"], fig: "verb", conjugation: "irregular" }
,{ latin: ["vivo", "vivere", "vixi", "victum"], eng: ["to live"], fig: "verb", conjugation: "irregular" }
,{ latin: ["vivus", "a", "um"], eng: ["alive, living"], fig: "adjective" }
,{ latin: ["voco", "vocare", "vocavi", "vocatum"], eng: ["to call"], fig: "verb", conjugation: "irregular" }
,{ latin: ["volo", "velle", "volui"], eng: ["to wish, want, be willing, will"], fig: "verb", conjugation: "irregular" }
,{ latin: ["voluptas", "voluptatis"], eng: ["pleasure"], fig: "noun", gender: "F", genitive: "voluptatis", declension: "3" }
,{ latin: ["vox", "vocis"], eng: ["voice, word"], fig: "noun", gender: "F", genitive: "vocis", declension: "3" }
,{ latin: ["vulgus", "vulgi"], eng: ["the common people, mob, rabble"], fig: "noun", gender: "M", genitive: "vulgi", declension: "2" }
,{ latin: ["vulnero", "vulnerare", "vulneravi", "vulneratum"], eng: ["to wound, harm, distress"], fig: "verb", conjugation: "irregular" }
,{ latin: ["vulnus", "vulneris"], eng: ["wound"], fig: "noun", gender: "N", genitive: "vulneris", declension: "3" }
,{ latin: ["vultus", "vultus"], eng: ["countenance, face"], fig: "noun", gender: "M", genitive: "vultus", declension: "4" }


];


// Quiz state variables
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

//  elements
const definitionEl = document.getElementById("definition");
const answerInputEl = document.getElementById("answerInput");
const genderInputEl = document.getElementById("genderInput");
const declensionInputEl = document.getElementById("declensionInput");
const conjugationInputEl = document.getElementById("conjugationInput");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const modeLabelEl = document.getElementById("modeLabel");
const questionCountModalEl = document.getElementById("questionCountModal");
const optionsModalEl = document.getElementById("optionsModal");
const questionCountInputEl = document.getElementById("questionCountInput");

// initialize the quiz
function init() 
{
  bindEvents();
  startOver();
}

//  event listeners
function bindEvents() 
{
  document.getElementById("submitBtn").addEventListener("click", submitAnswer);
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("toggleModeBtn").addEventListener("click", toggleMode);
  document.getElementById("optionsBtn").addEventListener("click", openOptions);
  document.getElementById("restartBtn").addEventListener("click", startOver);
  document.getElementById("startQuizBtn").addEventListener("click", applyQuestionCount);
  document.getElementById("applyOptionsBtn").addEventListener("click", applyOptions);
  document.getElementById("closeOptionsBtn").addEventListener("click", closeOptions);
  
  document.addEventListener("keydown", handleKeydown);
}

// keyboard events
function handleKeydown(event)
  {
  const activeElement = document.activeElement;
  if (activeElement.tagName === "INPUT" && event.key !== "Enter") return;
  
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
}

// Shuffle array 
function shuffle(array) 
{
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) 
  {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// current question
function showQuestion() 
{
  clearInputs();
  
  if (currentIndex >= shuffledList.length) 
  {
    definitionEl.textContent = "Finished!";
    feedbackEl.textContent = `Final Score: ${score}/${shuffledList.length}`;
    return;
  }
  
  const vocab = shuffledList[currentIndex];
  const displayText = mode === "latToEng" ? vocab.latin[0] : vocab.eng[0];
  
  definitionEl.textContent = displayText;
  modeLabelEl.textContent = mode === "latToEng" ? "Latin → English" : "English → Latin";
  scoreEl.textContent = `Score: ${score}/${currentIndex}`;
  feedbackEl.textContent = "";
}

// Clear input fields
function clearInputs() 
{
  answerInputEl.value = "";
  genderInputEl.value = "";
  declensionInputEl.value = "";
  conjugationInputEl.value = "";
}

// Check if answer is correct
function submitAnswer() 
{
  const vocab = shuffledList[currentIndex];
  if (!vocab) return;
  
  const answer = answerInputEl.value.trim().toLowerCase();
  const genderInput = genderInputEl.value.trim().toLowerCase();
  const declensionInput = declensionInputEl.value.trim().toLowerCase();
  const conjugationInput = conjugationInputEl.value.trim().toLowerCase();
  
  let correctAnswers = mode === "latToEng" ? vocab.eng : vocab.latin;
  if (!Array.isArray(correctAnswers)) correctAnswers = [correctAnswers];
  
  // Normalize strings for comparison
  const normalizedAnswer = answer.replace(/[^\w\s]/g, ' ');
  let isCorrect = correctAnswers.some(ans => 
    ans.toLowerCase().trim().replace(/[^\w\s]/g, ' ') === normalizedAnswer
  );
  
  // check additional properties if enabled
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
  
  // feedback
  if (isCorrect) 
  {
    feedbackEl.textContent = "Correct!";
    feedbackEl.className = "feedback correct";
    score++;
  } 
  else 
  {
    let feedbackText = `Incorrect. Acceptable answer(s): ${correctAnswers.join(", ")}`;
    
    if (genderMode && vocab.gender) feedbackText += ` | Gender: ${vocab.gender}`;
    if (decMode && vocab.declension) feedbackText += ` | Declension: ${vocab.declension}`;
    if (conjMode && vocab.conjugation) feedbackText += ` | Conjugation: ${vocab.conjugation}`;
    
    feedbackEl.textContent = feedbackText;
    feedbackEl.className = "feedback incorrect";
  }
  
  currentIndex++;
  scoreEl.textContent = `Score: ${score}/${currentIndex}`;
}

// Move to next question
function nextQuestion() 
{
  showQuestion();
}

// toggle between Latin to English and English to Latin modes
function toggleMode() 
{
  mode = mode === "latToEng" ? "engToLat" : "latToEng";
  showQuestion();
}

// start a new quiz
function startOver() 
{
  shuffledList = shuffle(vocabList);
  currentIndex = 0;
  score = 0;
  questionCountModalEl.style.display = "block";
}

// Apply selected question count
function applyQuestionCount() 
{
  const count = parseInt(questionCountInputEl.value);
  if (isNaN(count) || count <= 0) 
  {
    alert("Please enter a valid number.");
    return;
  }
  
  questionLimit = count;
  shuffledList = shuffle(vocabList).slice(0, questionLimit);
  currentIndex = 0;
  score = 0;
  questionCountModalEl.style.display = "none";
  showQuestion();
}


function openOptions() 
{
  document.getElementById("ppMode").checked = ppMode;
  document.getElementById("genMode").checked = genMode;
  document.getElementById("genderMode").checked = genderMode;
  document.getElementById("decMode").checked = decMode;
  document.getElementById("conjMode").checked = conjMode;
  optionsModalEl.style.display = "block";
}

function closeOptions()
  {
  optionsModalEl.style.display = "none";
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

window.addEventListener("DOMContentLoaded", init);
