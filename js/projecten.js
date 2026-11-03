// Projectdata: een array met objecten (les 3, JSON)
const projecten = [
  {
    titel: "Campus EventDesk",
    categorie: "school",
    beschrijving:
      "Domeinmodel en relationeel databaseontwerp voor een webapplicatie waarmee activiteiten worden gepubliceerd en deelnemers zich aanmelden.",
    technieken: ["UML", "SQL"],
  },
  {
    titel: "Portfoliosite",
    categorie: "school",
    beschrijving:
      "Deze site: een responsieve basis met semantische HTML5 en CSS3, uitgebreid met JavaScript.",
    technieken: ["HTML", "CSS", "JavaScript"],
  },
  {
    titel: "Groepsproject",
    categorie: "school",
    beschrijving:
      "Met een groep van 7 studenten bouwen we een webapplicatie, die we aan het einde van het semester inleveren.",
    technieken: ["C#", "SQL", "HTML", "CSS"],
  },
  {
    titel: "Persoonlijk project",
    categorie: "persoonlijk",
    beschrijving:
      "Een eigen project waarin ik mijn vaardigheden in webontwikkeling en databases verder ontwikkel.",
    technieken: ["JavaScript", "Python"],
  },
];

// De lege <section> waar de kaarten in komen
const lijst = document.querySelector("#projecten-lijst");
const filterSelect = document.querySelector("#filter-categorie");
const sorteerKnop = document.querySelector("#sorteer-naam");
const aantalTekst = document.querySelector("#aantal-projecten");

// Wat de gebruiker op dit moment gekozen heeft
let gekozenCategorie = "alle";
let sorteerRichting = "geen"; // "geen", "az" of "za"

// Maakt de <ul> met technieken van één project
function maakTagLijst(technieken) {
  const ul = document.createElement("ul");
  ul.classList.add("tag-list");

  technieken.forEach((techniek) => {
    const li = document.createElement("li");
    li.textContent = techniek;
    ul.appendChild(li);
  });

  return ul;
}

// Maakt één <article class="card"> voor één project
function maakProjectKaart(project) {
  const kaart = document.createElement("article");
  kaart.classList.add("card");

  const titel = document.createElement("h2");
  titel.textContent = project.titel;

  const beschrijving = document.createElement("p");
  beschrijving.textContent = project.beschrijving;

  kaart.appendChild(titel);
  kaart.appendChild(beschrijving);
  kaart.appendChild(maakTagLijst(project.technieken));

  return kaart;
}

// Zet een lijst met projecten op de pagina
function renderProjecten(lijstMetProjecten) {
  lijst.textContent = ""; // eerst leegmaken (nodig voor stap 2)

  lijstMetProjecten.forEach((project) => {
    lijst.appendChild(maakProjectKaart(project));
  });
}

// Geeft alleen de projecten van de gekozen categorie terug
function filterOpCategorie(lijstMetProjecten, categorie) {
  if (categorie === "alle") {
    return lijstMetProjecten;
  }
  return lijstMetProjecten.filter((project) => project.categorie === categorie);
}

// Sorteert een kopie van de lijst op titel
function sorteerOpNaam(lijstMetProjecten, richting) {
  const kopie = [...lijstMetProjecten];

  if (richting === "az") {
    kopie.sort((a, b) => a.titel.localeCompare(b.titel));
  } else if (richting === "za") {
    kopie.sort((a, b) => b.titel.localeCompare(a.titel));
  }

  return kopie;
}

// Toont hoeveel projecten er zichtbaar zijn
function toonAantal(aantal) {
  aantalTekst.textContent =
    aantal === 1 ? "1 project gevonden" : `${aantal} projecten gevonden`;
}

// Filtert, sorteert en rendert opnieuw
function werkLijstBij() {
  const gefilterd = filterOpCategorie(projecten, gekozenCategorie);
  const gesorteerd = sorteerOpNaam(gefilterd, sorteerRichting);

  renderProjecten(gesorteerd);
  toonAantal(gesorteerd.length);
}

// Events: reageren op de gebruiker
filterSelect.addEventListener("change", (event) => {
  gekozenCategorie = event.target.value;
  werkLijstBij();
});

sorteerKnop.addEventListener("click", () => {
  sorteerRichting = sorteerRichting === "az" ? "za" : "az";

  sorteerKnop.textContent =
    sorteerRichting === "az"
      ? "Sorteer op naam (Z–A)"
      : "Sorteer op naam (A–Z)";

  werkLijstBij();
});

// Eerste keer tonen bij het laden van de pagina
werkLijstBij();
