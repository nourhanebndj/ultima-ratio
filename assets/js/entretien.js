/* Ultima Ratio — banque de questions d'entretien */

/* Pour ajouter une question : ajoute une ligne ["Question", "Conseil"] dans le bon thème. */
const QUESTIONS = {
  "Présentation et parcours": [
    ["Présentez-vous en quelques mots.", "Deux minutes maximum : identité, formation actuelle, point fort de ton parcours, puis la formation visée. Termine par ton objectif, pas par ton état civil."],
    ["Pouvez-vous retracer votre parcours depuis le baccalauréat ?", "Suis l'ordre chronologique et donne une raison à chaque choix. Le conseiller cherche le fil conducteur."],
    ["Pourquoi avez-vous choisi cette filière au départ ?", "Parle d'un intérêt réel et d'un moment concret (une matière, un projet, une rencontre), pas d'un hasard ou d'une orientation subie."],
    ["Quelles matières avez-vous préférées, et pourquoi ?", "Choisis celles qui ont un lien avec la formation demandée et explique ce que tu y as appris."],
    ["Comment expliquez-vous cette baisse de notes ou ce redoublement ?", "Explique sans te justifier longuement, puis montre ce que tu as changé depuis. Les résultats suivants doivent appuyer ton propos."],
    ["Que faites-vous cette année ?", "Études en cours, stage, emploi, préparation linguistique : montre que l'année sert ton projet."],
    ["Avez-vous déjà fait un stage ou travaillé ?", "Décris tes missions, un résultat concret et ce que l'expérience t'a appris sur le métier visé."],
    ["Quel était le sujet de votre mémoire ou projet de fin d'études ?", "Problème posé, méthode, résultat, en trois phrases compréhensibles par un non-spécialiste."],
    ["Quelles sont vos qualités et vos points à améliorer ?", "Illustre chaque qualité par un exemple. Pour le point faible, dis ce que tu fais pour progresser."],
    ["Avez-vous des activités en dehors des études ?", "Association, sport, bénévolat, projets personnels : montre ce que cela dit de toi (rigueur, esprit d'équipe, autonomie)."]
  ],
  "Projet d'études": [
    ["Quelle formation avez-vous demandée en premier choix, et pourquoi ?", "Nomme précisément la formation et l'établissement, puis donne deux raisons liées au contenu et une liée à ton objectif."],
    ["Que savez-vous du programme de cette formation ?", "Cite trois ou quatre enseignements, l'organisation en semestres, la présence d'un stage ou d'un mémoire."],
    ["Comment avez-vous choisi vos vœux ?", "Explique tes critères : contenu, prérequis, débouchés, ville, coût de la vie. Montre que tu as comparé."],
    ["Quel est le lien entre vos études actuelles et cette formation ?", "Identifie les acquis qui te préparent à la suite, et ce que la nouvelle formation t'apportera en plus."],
    ["Pourquoi changer de spécialité ?", "Une réorientation se défend si elle est progressive et motivée : montre le pont entre l'ancienne et la nouvelle discipline."],
    ["Pourquoi redemander un niveau que vous avez déjà validé ?", "Justifie par une différence réelle de contenu ou de spécialisation, pas par la facilité d'admission."],
    ["Vos vœux sont assez différents les uns des autres. Pourquoi ?", "Trouve le point commun (un même métier, une même compétence) ou reconnais un ordre de priorité clair."],
    ["Quelles difficultés pensez-vous rencontrer dans ces études ?", "Cite une difficulté réaliste (rythme, méthodes, langue) et ce que tu prévois pour y faire face."],
    ["Que ferez-vous si vous n'êtes admis nulle part ?", "Montre un plan B sérieux : poursuite d'études sur place, nouvelle candidature mieux préparée."],
    ["Si vous n'obtenez que votre dernier vœu, irez-vous ?", "Réponds franchement. Si oui, explique en quoi il sert quand même ton projet."],
    ["Envisagez-vous de poursuivre après ce diplôme ?", "Master, doctorat ou insertion directe : reste cohérent avec le métier que tu annonces."]
  ],
  "Pourquoi la France": [
    ["Pourquoi voulez-vous étudier en France ?", "Parle de la formation, de la reconnaissance du diplôme, de la langue, du lien avec ton projet. Évite les généralités sur le pays."],
    ["Cette formation existe dans votre pays. Pourquoi partir ?", "Compare concrètement : spécialisation, équipements, stages, ouverture internationale. Sans dénigrer ton université."],
    ["Pourquoi la France plutôt qu'un autre pays ?", "Langue déjà maîtrisée, coût des études, qualité de la filière : donne des raisons vérifiables."],
    ["Que savez-vous du système universitaire français ?", "LMD, crédits ECTS, cours magistraux et travaux dirigés, contrôle continu et examens, importance du travail personnel."],
    ["Pourquoi cette ville ?", "Lien avec la formation d'abord, puis coût de la vie, transports, bassin d'emploi. Montre que tu t'es renseigné."],
    ["Que savez-vous de l'université que vous avez choisie ?", "Localisation, spécialités reconnues, taille, un élément distinctif (laboratoire, partenariat, taux d'insertion)."],
    ["Êtes-vous déjà allé en France ou à l'étranger ?", "Réponds simplement. Si non, montre comment tu t'es informé et préparé."],
    ["Avez-vous de la famille ou des proches en France ?", "Dis la vérité. Un proche sur place peut être un soutien, mais ne doit pas apparaître comme la raison du départ."]
  ],
  "Projet professionnel": [
    ["Quel métier souhaitez-vous exercer ?", "Donne un intitulé de poste précis et décris ce que fait cette personne au quotidien."],
    ["En quoi cette formation vous prépare-t-elle à ce métier ?", "Relie deux ou trois enseignements aux compétences demandées dans les offres d'emploi du secteur."],
    ["Où vous voyez-vous dans cinq ans ?", "Un poste, un secteur, un lieu. Reste réaliste par rapport au diplôme visé."],
    ["Que comptez-vous faire après vos études ?", "Présente un projet construit, et comment tu comptes valoriser ton diplôme, notamment dans ton pays d'origine."],
    ["Connaissez-vous le marché de l'emploi dans votre domaine ?", "Cite des types d'employeurs, des tendances, éventuellement des entreprises où tu aimerais travailler."],
    ["Et si vous ne trouvez pas d'emploi dans ce domaine ?", "Montre que tes compétences sont transférables et que tu as pensé à des métiers voisins."],
    ["Avez-vous un projet de création d'entreprise ou de recherche ?", "Si oui, décris-le sobrement. Si non, ne l'invente pas."]
  ],
  "Financement et vie pratique": [
    ["Comment allez-vous financer vos études ?", "Indique la source (famille, garant, épargne, bourse) et le montant mensuel. Sois précis et cohérent avec tes justificatifs."],
    ["Qui est votre garant et quelle est sa profession ?", "Réponse simple et exacte. Tu dois connaître la situation de la personne qui te prend en charge."],
    ["À combien estimez-vous votre budget mensuel ?", "Détaille loyer, alimentation, transport, téléphone, assurance. Adapte le total à la ville visée."],
    ["Où allez-vous loger ?", "Résidence universitaire, résidence privée, colocation, proche : indique les démarches déjà faites."],
    ["Comptez-vous travailler pendant vos études ?", "Un emploi étudiant peut compléter ton budget, mais ne doit pas en être la base. Les études restent la priorité."],
    ["Connaissez-vous le coût des droits d'inscription ?", "Renseigne-toi sur les droits de chaque établissement et sur la contribution de vie étudiante avant l'entretien."],
    ["Comment vous êtes-vous préparé à vivre seul à l'étranger ?", "Parle d'autonomie concrète : gérer un budget, cuisiner, démarches administratives, réseau d'entraide."]
  ],
  "Langue et motivation": [
    ["Comment évaluez-vous votre niveau de français ?", "Appuie-toi sur ton résultat de test et sur ton usage réel : études, lectures, médias."],
    ["Quel résultat avez-vous obtenu au test de français ?", "Donne le niveau global et, si une compétence est plus faible, ce que tu fais pour l'améliorer."],
    ["Vos études étaient en arabe ou en anglais : suivrez-vous des cours en français ?", "Montre tes efforts concrets : cours de langue, vocabulaire de spécialité, contenus universitaires en français."],
    ["Quel est votre niveau d'anglais ?", "Utile surtout pour les masters scientifiques : cite une certification ou un usage régulier (articles, cours en ligne)."],
    ["Pourquoi devrions-nous croire à votre projet ?", "Résume en trois points : parcours cohérent, formation ciblée, moyens réunis."],
    ["Qu'est-ce qui vous distingue des autres candidats ?", "Un résultat, un projet, une expérience précise. Un fait vaut mieux qu'un adjectif."],
    ["Qu'est-ce qui vous inquiète le plus dans ce départ ?", "Une réponse sincère et mesurée, suivie de ce que tu as prévu pour y répondre."],
    ["Avez-vous des questions ?", "Prépare une question utile, par exemple sur la suite de la procédure ou les délais de réponse."]
  ],
  "Admission master (Paris-Saclay)": [
    ["Pourquoi ce parcours de master en particulier ?", "Cite des unités d'enseignement, un laboratoire ou un débouché propres à ce parcours, pas au domaine en général."],
    ["Quels prérequis du master maîtrisez-vous déjà ?", "Fais le lien entre les prérequis affichés sur la fiche et les modules que tu as validés, avec tes notes."],
    ["Expliquez une notion clé de votre discipline.", "Révise les fondamentaux de ta licence : on teste la solidité des bases, pas la mémoire des détails."],
    ["Parlez-nous d'un projet technique ou scientifique que vous avez mené.", "Contexte, ton rôle exact, outils ou méthodes, résultat, et ce que tu referais autrement."],
    ["Quels outils, langages ou techniques de laboratoire utilisez-vous ?", "Ne cite que ce que tu sais réellement utiliser, avec un exemple d'usage pour chacun."],
    ["Êtes-vous plutôt attiré par la recherche ou par l'entreprise ?", "Les deux sont acceptables : l'important est que ta réponse soit cohérente avec le parcours choisi."],
    ["Envisagez-vous un doctorat ?", "Si oui, évoque un thème qui t'intéresse. Si non, dis vers quel type de poste tu te diriges."],
    ["Quel stage aimeriez-vous faire pendant le master ?", "Un domaine, un type de structure, et ce que tu veux y apprendre."],
    ["Pouvez-vous suivre des cours en anglais ?", "Si le parcours est en anglais, attends-toi à ce qu'une partie de l'échange se fasse dans cette langue."],
    ["Avez-vous candidaté ailleurs ? Quel est votre premier choix ?", "Réponds honnêtement et explique ce qui place ce master en bonne position dans tes choix."]
  ]
};

(function () {
  const all = [];
  Object.entries(QUESTIONS).forEach(([cat, items]) => items.forEach(([q, tip]) => all.push({ cat, q, tip })));

  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  /* ---------- Liste filtrable ---------- */
  const list = document.getElementById("q-list");
  const chips = document.getElementById("q-chips");
  const search = document.getElementById("q-search");
  const count = document.getElementById("q-count");
  let activeCat = "Toutes";

  function renderChips() {
    chips.innerHTML = ["Toutes", ...Object.keys(QUESTIONS)].map(c =>
      `<button class="chip${c === activeCat ? " on" : ""}" data-cat="${esc(c)}" aria-pressed="${c === activeCat}">${esc(c)}</button>`
    ).join("");
  }

  function renderList() {
    const term = norm(search.value.trim());
    const shown = all.filter(x =>
      (activeCat === "Toutes" || x.cat === activeCat) &&
      (!term || norm(x.q + " " + x.tip).includes(term))
    );
    count.textContent = `${shown.length} question${shown.length > 1 ? "s" : ""} affichée${shown.length > 1 ? "s" : ""} sur ${all.length}`;
    list.innerHTML = shown.length
      ? shown.map(x => `<details><summary><span class="cat-tag">${esc(x.cat)}</span><br>${esc(x.q)}</summary><div class="answer"><span class="tip-label">Conseil</span><p>${esc(x.tip)}</p></div></details>`).join("")
      : '<p class="empty">Aucune question ne correspond à cette recherche.</p>';
  }

  chips.addEventListener("click", e => {
    const b = e.target.closest(".chip");
    if (!b) return;
    activeCat = b.dataset.cat;
    renderChips();
    renderList();
  });
  search.addEventListener("input", renderList);
  renderChips();
  renderList();

})();
