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

renderProjecten(projecten);
